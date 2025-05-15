package test

import (
	"back-end-competition/controllers"
	"back-end-competition/database"
	"back-end-competition/models"
	"bytes"
	"fmt"
	"mime/multipart"
	"net/http"
	"net/http/httptest"
	"net/url"
	"os"
	"strings"
	"testing"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt"
	"github.com/google/uuid"
	"github.com/stretchr/testify/assert"
)

func TestRegistrationRoutes(t *testing.T) {
	tx := database.DB.Begin()
	defer tx.Rollback()

	competition := models.Competition{}
	database.DB.First(&competition)
	user := models.User{}
	database.DB.First(&user)
	app := fiber.New()

	claims := jwt.MapClaims{
		"user_id": user.ID.String(),
		"role":    user.Role,
		"exp":     time.Now().Add(time.Hour * 24).Unix(),
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	signedToken, err := token.SignedString([]byte(os.Getenv("SECRET_KEY")))
	if err != nil {
		t.Fatalf("Failed to sign token: %v", err)
	}

	app.Post("/api/registrations", func(c *fiber.Ctx) error {
		oldDB := database.DB
		database.DB = tx
		defer func() { database.DB = oldDB }()
		return controllers.CreateRegistration(c)
	})

	app.Get("/api/registrations", func(c *fiber.Ctx) error {
		oldDB := database.DB
		database.DB = tx
		defer func() { database.DB = oldDB }()
		c.Locals("user_id", user.ID.String())
		return controllers.GetRegistration(c)
	})

	app.Patch("/api/registrations/:id", func(c *fiber.Ctx) error {
		oldDB := database.DB
		database.DB = tx
		defer func() { database.DB = oldDB }()
		return controllers.UpdateRegistration(c)
	})

	app.Delete("/api/registrations/:id", func(c *fiber.Ctx) error {
		oldDB := database.DB
		database.DB = tx
		defer func() { database.DB = oldDB }()
		c.Locals("user_id", user.ID.String())
		return controllers.DeleteRegistration(c)
	})

	app.Get("/api/all-registrations", func(c *fiber.Ctx) error {
		oldDB := database.DB
		database.DB = tx
		defer func() { database.DB = oldDB }()
		return controllers.GetAllRegistrer(c)
	})

	app.Patch("/api/registrations/:id/payment", func(c *fiber.Ctx) error {
		oldDB := database.DB
		database.DB = tx
		defer func() { database.DB = oldDB }()
		return controllers.ApprovedPayment(c)
	})

	t.Run("CreateRegistration Valid", func(t *testing.T) {
		body := &bytes.Buffer{}
		writer := multipart.NewWriter(body)
		writer.WriteField("team_name", "Test Team")
		writer.WriteField("leader_id", user.ID.String())
		writer.WriteField("member1_id", user.ID.String())
		writer.WriteField("member2_id", user.ID.String())
		writer.WriteField("competition_id", competition.ID.String())
		part, _ := writer.CreateFormFile("payment_prove", "payment.jpg")
		part.Write([]byte("fake image content"))
		writer.Close()

		req := httptest.NewRequest("POST", "/api/registrations", body)
		req.Header.Set("Content-Type", writer.FormDataContentType())
		req.AddCookie(&http.Cookie{Name: "token", Value: signedToken})

		resp, err := app.Test(req)
		assert.NoError(t, err)
		assert.Equal(t, fiber.StatusCreated, resp.StatusCode)
	})

	// Tes: CreateRegistration Kosong
	t.Run("CreateRegistration Kosong", func(t *testing.T) {
		req := httptest.NewRequest("POST", "/api/registrations", nil)
		req.Header.Set("Content-Type", "application/x-www-form-urlencoded")
		req.AddCookie(&http.Cookie{Name: "token", Value: signedToken})

		resp, err := app.Test(req)
		assert.NoError(t, err)
		assert.Equal(t, fiber.StatusBadRequest, resp.StatusCode)
	})

	// Tes: GetRegistration Valid
	t.Run("GetRegistration Valid", func(t *testing.T) {
		// Buat registrasi untuk pengujian
		registration := models.Registration{
			ID:            uuid.New(),
			TeamName:      "Test Team",
			LeaderID:      user.ID,
			Member1ID:     user.ID,
			Member2ID:     user.ID,
			CompetitionID: competition.ID,
			PaymentProff:  "./uploads/payment.jpg",
		}
		tx.Create(&registration)

		req := httptest.NewRequest("GET", "/api/registrations", nil)
		req.AddCookie(&http.Cookie{Name: "token", Value: signedToken})

		resp, err := app.Test(req)
		assert.NoError(t, err)
		assert.Equal(t, fiber.StatusOK, resp.StatusCode)
	})

	// Tes: UpdateRegistration Valid
	t.Run("UpdateRegistration Valid", func(t *testing.T) {
		registration := models.Registration{
			ID:            uuid.New(),
			TeamName:      "Old Team",
			LeaderID:      user.ID,
			Member1ID:     user.ID,
			Member2ID:     user.ID,
			CompetitionID: competition.ID,
			PaymentProff:  "./uploads/old_payment.jpg",
		}
		tx.Create(&registration)

		body := &bytes.Buffer{}
		writer := multipart.NewWriter(body)
		writer.WriteField("team_name", "Updated Team")
		part, _ := writer.CreateFormFile("payment_prove", "new_payment.jpg")
		part.Write([]byte("new fake image content"))
		writer.Close()

		req := httptest.NewRequest("PATCH", fmt.Sprintf("/api/registrations/%s", registration.ID.String()), body)
		req.Header.Set("Content-Type", writer.FormDataContentType())
		req.AddCookie(&http.Cookie{Name: "token", Value: signedToken})

		resp, err := app.Test(req)
		assert.NoError(t, err)
		assert.Equal(t, fiber.StatusCreated, resp.StatusCode)
	})

	// Tes: UpdateRegistration Tidak Ditemukan
	t.Run("UpdateRegistration Tidak Ditemukan", func(t *testing.T) {
		body := &bytes.Buffer{}
		writer := multipart.NewWriter(body)
		writer.WriteField("team_name", "Updated Team")
		writer.Close()

		req := httptest.NewRequest("PATCH", "/api/registrations/00000000-0000-0000-0000-000000000000", body)
		req.Header.Set("Content-Type", writer.FormDataContentType())
		req.AddCookie(&http.Cookie{Name: "token", Value: signedToken})

		resp, err := app.Test(req)
		assert.NoError(t, err)
		assert.Equal(t, fiber.StatusNotFound, resp.StatusCode)
	})

	// Tes: DeleteRegistration Valid
	t.Run("DeleteRegistration Valid", func(t *testing.T) {
		registration := models.Registration{
			ID:            uuid.New(),
			TeamName:      "Test Team",
			LeaderID:      user.ID,
			Member1ID:     user.ID,
			Member2ID:     user.ID,
			CompetitionID: competition.ID,
			PaymentProff:  "./uploads/payment.jpg",
		}
		tx.Create(&registration)

		req := httptest.NewRequest("DELETE", fmt.Sprintf("/api/registrations/%s", registration.ID.String()), nil)
		req.AddCookie(&http.Cookie{Name: "token", Value: signedToken})

		resp, err := app.Test(req)
		assert.NoError(t, err)
		assert.Equal(t, fiber.StatusNoContent, resp.StatusCode)
	})

	// Tes: DeleteRegistration Unauthorized
	t.Run("DeleteRegistration Unauthorized", func(t *testing.T) {
		otherUser := models.User{ID: uuid.New(), Email: "other@example.com", Role: "user"}
		tx.Create(&otherUser)

		registration := models.Registration{
			ID:            uuid.New(),
			TeamName:      "Test Team",
			LeaderID:      otherUser.ID,
			Member1ID:     user.ID,
			Member2ID:     user.ID,
			CompetitionID: competition.ID,
			PaymentProff:  "./uploads/payment.jpg",
		}
		tx.Create(&registration)

		req := httptest.NewRequest("DELETE", fmt.Sprintf("/api/registrations/%s", registration.ID.String()), nil)
		req.AddCookie(&http.Cookie{Name: "token", Value: signedToken})

		resp, err := app.Test(req)
		assert.NoError(t, err)
		assert.Equal(t, fiber.StatusUnauthorized, resp.StatusCode)
	})

	// Tes: GetAllRegistrer Valid
	t.Run("GetAllRegistrer Valid", func(t *testing.T) {
		req := httptest.NewRequest("GET", "/api/all-registrations", nil)
		req.AddCookie(&http.Cookie{Name: "token", Value: signedToken})

		resp, err := app.Test(req)
		assert.NoError(t, err)
		assert.Equal(t, fiber.StatusOK, resp.StatusCode)
	})

	// Tes: ApprovedPayment Valid (Approved)
	t.Run("ApprovedPayment Valid Approved", func(t *testing.T) {
		registration := models.Registration{
			ID:            uuid.New(),
			TeamName:      "Test Team",
			LeaderID:      user.ID,
			Member1ID:     user.ID,
			Member2ID:     user.ID,
			CompetitionID: competition.ID,
			PaymentProff:  "./uploads/payment.jpg",
		}
		tx.Create(&registration)

		form := url.Values{}
		form.Add("payment_status", "approved")

		req := httptest.NewRequest("PATCH", fmt.Sprintf("/api/registrations/%s/payment", registration.ID.String()), strings.NewReader(form.Encode()))
		req.Header.Set("Content-Type", "application/x-www-form-urlencoded")
		req.AddCookie(&http.Cookie{Name: "token", Value: signedToken})

		resp, err := app.Test(req)
		assert.NoError(t, err)
		assert.Equal(t, fiber.StatusCreated, resp.StatusCode)
	})

	// Tes: ApprovedPayment Invalid Status
	t.Run("ApprovedPayment Invalid Status", func(t *testing.T) {
		registration := models.Registration{
			ID:            uuid.New(),
			TeamName:      "Test Team",
			LeaderID:      user.ID,
			Member1ID:     user.ID,
			Member2ID:     user.ID,
			CompetitionID: competition.ID,
			PaymentProff:  "./uploads/payment.jpg",
		}
		tx.Create(&registration)

		form := url.Values{}
		form.Add("payment_status", "invalid")

		req := httptest.NewRequest("PATCH", fmt.Sprintf("/api/registrations/%s/payment", registration.ID.String()), strings.NewReader(form.Encode()))
		req.Header.Set("Content-Type", "application/x-www-form-urlencoded")
		req.AddCookie(&http.Cookie{Name: "token", Value: signedToken})

		resp, err := app.Test(req)
		assert.NoError(t, err)
		assert.Equal(t, fiber.StatusBadRequest, resp.StatusCode)
	})
}
