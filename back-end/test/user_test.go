package test

import (
	"back-end-competition/controllers"
	"back-end-competition/database"
	"encoding/json"
	"net/http/httptest"
	"net/url"
	"strings"
	"testing"

	"github.com/gofiber/fiber/v2"
	"github.com/stretchr/testify/assert"
)

func TestUserSignup(t *testing.T) {
	tx := database.DB.Begin()
	defer tx.Rollback()

	app := fiber.New()

	app.Post("/api/signup", func(c *fiber.Ctx) error {
		oldDB := database.DB
		database.DB = tx
		defer func() { database.DB = oldDB }()

		return controllers.Signup(c)
	})

	app.Post("/api/login", func(c *fiber.Ctx) error {
		oldDB := database.DB
		database.DB = tx
		defer func() { database.DB = oldDB }()

		return controllers.Login(c)
	})

	t.Run("Signup valid", func(t *testing.T) {
		form := url.Values{}
		form.Add("name", "Test User")
		form.Add("email", "testuser@example.com")
		form.Add("password", "123456")

		req := httptest.NewRequest("POST", "/api/signup", strings.NewReader(form.Encode()))
		req.Header.Set("Content-Type", "application/x-www-form-urlencoded")

		resp, err := app.Test(req)
		assert.NoError(t, err)
		assert.Equal(t, fiber.StatusCreated, resp.StatusCode)

		var response map[string]interface{}
		json.NewDecoder(resp.Body).Decode(&response)

		assert.Equal(t, "User registered successfully", response["message"])

		user := response["user"].(map[string]interface{})
		assert.NotEmpty(t, user["id"])
		assert.Equal(t, "Test User", user["name"])
	})

	t.Run("Signup kosong", func(t *testing.T) {
		req := httptest.NewRequest("POST", "/api/signup", nil)
		req.Header.Set("Content-Type", "application/x-www-form-urlencoded")

		resp, err := app.Test(req)
		assert.NoError(t, err)
		assert.Equal(t, fiber.StatusBadRequest, resp.StatusCode)
	})

	t.Run("Signup email duplikat", func(t *testing.T) {
		form := url.Values{}
		form.Add("name", "Test User")
		form.Add("email", "testuser@example.com")
		form.Add("password", "123456")

		req := httptest.NewRequest("POST", "/api/signup", strings.NewReader(form.Encode()))
		req.Header.Set("Content-Type", "application/x-www-form-urlencoded")

		resp, err := app.Test(req)
		assert.NoError(t, err)
		assert.Equal(t, fiber.StatusConflict, resp.StatusCode)
	})

	t.Run("Login Valid", func(t *testing.T) {
		form := url.Values{}
		form.Add("email", "testuser@example.com")
		form.Add("password", "123456")

		req := httptest.NewRequest("POST", "/api/login", strings.NewReader(form.Encode()))
		req.Header.Set("Content-Type", "application/x-www-form-urlencoded")

		resp, err := app.Test(req)
		assert.NoError(t, err)
		assert.Equal(t, fiber.StatusOK, resp.StatusCode)
	})

	t.Run("Login Invalid", func(t *testing.T) {
		form := url.Values{}
		form.Add("email", "testuser@example.com")
		form.Add("password", "1234567")

		req := httptest.NewRequest("POST", "/api/login", strings.NewReader(form.Encode()))
		req.Header.Set("Content-Type", "application/x-www-form-urlencoded")

		resp, err := app.Test(req)
		assert.NoError(t, err)
		assert.Equal(t, fiber.StatusUnauthorized, resp.StatusCode)
	})

	t.Run("Login Missing Credential", func(t *testing.T) {
		form := url.Values{}
		form.Add("email", "testuser@example.com")
		form.Add("password", "")

		req := httptest.NewRequest("POST", "/api/login", strings.NewReader(form.Encode()))
		req.Header.Set("Content-Type", "application/x-www-form-urlencoded")

		resp, err := app.Test(req)
		assert.NoError(t, err)
		assert.Equal(t, fiber.StatusBadRequest, resp.StatusCode)
	})
}
