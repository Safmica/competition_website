package controllers

import (
	"back-end-competition/database"
	"back-end-competition/models"
	"back-end-competition/utils"
	"os"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt"
	"github.com/google/uuid"
	"golang.org/x/crypto/bcrypt"
)

func Signup(c *fiber.Ctx) error {
	user := models.User{}
	name := c.FormValue("name")
	email := c.FormValue("email")
	password := c.FormValue("password")

	if name == "" || password == "" || email == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Username and password are required",
		})
	}

	var exists bool
	if err := database.DB.Model(&models.User{}).Where("email = ?", email).Select("count(*) > 0").Scan(&exists).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Database error",
		})
	}

	if exists {
		return c.Status(fiber.StatusConflict).JSON(fiber.Map{
			"message": "Email already used",
		})
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Error hashing password",
		})
	}

	user.ID = uuid.New()
	user.Name = name
	user.Email = email
	user.Password = string(hashedPassword)
	if err := database.DB.Create(&user).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Error saving user",
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"message": "User registered successfully",
		"user":    user,
	})
}

func Login(c *fiber.Ctx) error {
	email := c.FormValue("email")
	password := c.FormValue("password")

	if password == "" || email == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Email and password are required",
		})
	}

	user := models.User{}
	if err := database.DB.Where("email = ?", email).First(&user).Error; err != nil {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"message": "Invalid credentials",
		})
	}

	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password)); err != nil {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"message": "Invalid credentials",
		})
	}

	claims := jwt.MapClaims{
		"user_id": user.ID,
		"role":    user.Role,
		"exp":     time.Now().Add(time.Hour * 24).Unix(),
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	signedToken, err := token.SignedString([]byte(os.Getenv("SECRET_KEY")))
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Failed to generate token",
		})
	}

	c.Cookie(&fiber.Cookie{
		Name:     "token",
		Value:    signedToken,
		Expires:  time.Now().Add(24 * time.Hour),
		HTTPOnly: true,
	})

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"user":  user,
		"token": signedToken,
	})
}

func GetAllUser(c *fiber.Ctx) error {
	params := make(map[string]interface{})
	query := c.Queries()
	for key, value := range query {
		if key != "page" && key != "size" {
			params[key] = value
		}
	}

	pagination := utils.NewPagination()
	stmt := database.DB.Model(&models.UserResponse{})

	for key, value := range params {
		stmt = stmt.Where(key+" LIKE ?", "%"+value.(string)+"%")
	}

	stmt = stmt.Where("role != ?", "admin")

	var user []models.UserResponse
	paginatedResponse := pagination.With(stmt).Request(c.Request()).Response(&user)

	if paginatedResponse.Error {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": paginatedResponse.ErrorMessage,
		})
	}

	return c.JSON(paginatedResponse)
}

func Logout(c *fiber.Ctx) error {
	c.Cookie(&fiber.Cookie{
		Name:     "token",
		Value:    "",
		Expires:  time.Now().Add(-time.Hour),
		HTTPOnly: true,
	})

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Logout Success",
	})
}

func Me(c *fiber.Ctx) error {
	userId := c.Locals("user_id")
	user := models.User{}
	if err := database.DB.Where("id = ?", userId).First(&user).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"message": "User not found",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"user": user,
	})
}