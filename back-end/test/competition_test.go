package test

import (
	"back-end-competition/controllers"
	"back-end-competition/database"
	"back-end-competition/models"
	"bytes"
	"encoding/json"
	"net/http/httptest"
	"testing"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
	"github.com/stretchr/testify/assert"
)

func TestCompetitionRoutes(t *testing.T) {
	tx := database.DB.Begin()
	defer tx.Rollback()

	competition := models.Competition{}
	database.DB.First(&competition)
	app := fiber.New()

	// Register routes with transaction database
	app.Post("/api/competitions", func(c *fiber.Ctx) error {
		oldDB := database.DB
		database.DB = tx
		defer func() { database.DB = oldDB }()
		return controllers.CreateCompetition(c)
	})

	app.Get("/api/competitions", func(c *fiber.Ctx) error {
		oldDB := database.DB
		database.DB = tx
		defer func() { database.DB = oldDB }()
		return controllers.GetCompetitions(c)
	})

	app.Get("/api/competitions/:id", func(c *fiber.Ctx) error {
		oldDB := database.DB
		database.DB = tx
		defer func() { database.DB = oldDB }()
		return controllers.GetCompetitionByID(c)
	})

	app.Put("/api/competitions/:id", func(c *fiber.Ctx) error {
		oldDB := database.DB
		database.DB = tx
		defer func() { database.DB = oldDB }()
		return controllers.UpdateCompetition(c)
	})

	app.Delete("/api/competitions/:id", func(c *fiber.Ctx) error {
		oldDB := database.DB
		database.DB = tx
		defer func() { database.DB = oldDB }()
		return controllers.DeleteCompetition(c)
	})

	t.Run("CreateCompetition valid", func(t *testing.T) {
		competition := models.Competition{
			Title:       "Test Competition",
			Description: "This is a test competition",
			Deadline:    time.Now().Add(24 * time.Hour),
		}
		body, _ := json.Marshal(competition)
		req := httptest.NewRequest("POST", "/api/competitions", bytes.NewReader(body))
		req.Header.Set("Content-Type", "application/json")

		resp, err := app.Test(req)
		assert.NoError(t, err)
		assert.Equal(t, fiber.StatusCreated, resp.StatusCode)
	})

	t.Run("CreateCompetition missing title", func(t *testing.T) {
		competition := models.Competition{
			Description: "This is a test competition",
			Deadline:    time.Now().Add(24 * time.Hour),
		}
		body, _ := json.Marshal(competition)
		req := httptest.NewRequest("POST", "/api/competitions", bytes.NewReader(body))
		req.Header.Set("Content-Type", "application/json")

		resp, err := app.Test(req)
		assert.NoError(t, err)
		assert.Equal(t, fiber.StatusBadRequest, resp.StatusCode)
	})

	t.Run("CreateCompetition invalid JSON", func(t *testing.T) {
		req := httptest.NewRequest("POST", "/api/competitions", bytes.NewReader([]byte("invalid json")))
		req.Header.Set("Content-Type", "application/json")

		resp, err := app.Test(req)
		assert.NoError(t, err)
		assert.Equal(t, fiber.StatusBadRequest, resp.StatusCode)
	})

	t.Run("GetCompetitions valid", func(t *testing.T) {
		// Create a competition for testing
		competition := models.Competition{
			ID:          uuid.New(),
			Title:       "Test Competition",
			Description: "This is a test competition",
			Deadline:    time.Now().Add(24 * time.Hour),
		}
		tx.Create(&competition)

		var expectedCount int64
		tx.Model(&models.Competition{}).Where("deleted_at IS NULL").Count(&expectedCount)

		req := httptest.NewRequest("GET", "/api/competitions", nil)
		resp, err := app.Test(req)
		assert.NoError(t, err)
		assert.Equal(t, fiber.StatusOK, resp.StatusCode)

		var competitions []models.Competition
		err = json.NewDecoder(resp.Body).Decode(&competitions)
		assert.NoError(t, err)
		assert.Equal(t, int(expectedCount), len(competitions))
	})

	t.Run("GetCompetitionByID valid", func(t *testing.T) {
		// Create a competition for testing
		competition := models.Competition{
			ID:          competition.ID,
			Title:       "Test Competition",
			Description: "This is a test competition",
			Deadline:    time.Now().Add(24 * time.Hour),
		}

		req := httptest.NewRequest("GET", "/api/competitions/"+competition.ID.String(), nil)
		resp, err := app.Test(req)
		assert.NoError(t, err)
		assert.Equal(t, fiber.StatusOK, resp.StatusCode)
	})

	t.Run("GetCompetitionByID not found", func(t *testing.T) {
		req := httptest.NewRequest("GET", "/api/competitions/"+uuid.New().String(), nil)
		resp, err := app.Test(req)
		assert.NoError(t, err)
		assert.Equal(t, fiber.StatusNotFound, resp.StatusCode)
	})

	t.Run("UpdateCompetition valid", func(t *testing.T) {
		// Create a competition for testing
		competition := models.Competition{
			ID:          competition.ID,
			Title:       "Test Competition",
			Description: "This is a test competition",
			Deadline:    time.Now().Add(24 * time.Hour),
		}

		updatedCompetition := models.Competition{
			Title:       "Updated Competition",
			Description: "This is an updated competition",
			Deadline:    time.Now().Add(48 * time.Hour),
		}
		body, _ := json.Marshal(updatedCompetition)
		req := httptest.NewRequest("PUT", "/api/competitions/"+competition.ID.String(), bytes.NewReader(body))
		req.Header.Set("Content-Type", "application/json")

		resp, err := app.Test(req)
		assert.NoError(t, err)
		assert.Equal(t, fiber.StatusOK, resp.StatusCode)
	})

	t.Run("UpdateCompetition not found", func(t *testing.T) {
		updatedCompetition := models.Competition{
			Title:       "Updated Competition",
			Description: "This is an updated competition",
			Deadline:    time.Now().Add(48 * time.Hour),
		}
		body, _ := json.Marshal(updatedCompetition)
		req := httptest.NewRequest("PUT", "/api/competitions/"+uuid.New().String(), bytes.NewReader(body))
		req.Header.Set("Content-Type", "application/json")

		resp, err := app.Test(req)
		assert.NoError(t, err)
		assert.Equal(t, fiber.StatusNotFound, resp.StatusCode)
	})

	t.Run("DeleteCompetition valid", func(t *testing.T) {
		// Create a competition for testing
		competition := models.Competition{
			ID:          competition.ID,
			Title:       "Test Competition",
			Description: "This is a test competition",
			Deadline:    time.Now().Add(24 * time.Hour),
		}

		req := httptest.NewRequest("DELETE", "/api/competitions/"+competition.ID.String(), nil)
		resp, err := app.Test(req)
		assert.NoError(t, err)
		assert.Equal(t, fiber.StatusOK, resp.StatusCode)
	})

	t.Run("DeleteCompetition not found", func(t *testing.T) {
		req := httptest.NewRequest("DELETE", "/api/competitions/"+uuid.New().String(), nil)
		resp, err := app.Test(req)
		assert.NoError(t, err)
		assert.Equal(t, fiber.StatusNotFound, resp.StatusCode)
	})
}
