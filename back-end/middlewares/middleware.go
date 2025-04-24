package middlewares

import (
	"os"

	"github.com/gofiber/fiber/v2"
	jwtware "github.com/gofiber/jwt/v3"
	jwt "github.com/golang-jwt/jwt/v4"
)

func Auth() fiber.Handler {
	return jwtware.New(jwtware.Config{
		SigningKey:  []byte(os.Getenv("SECRET_KEY")),
		TokenLookup: "cookie:token",
		SuccessHandler: func(c *fiber.Ctx) error {
			user := c.Locals("user").(*jwt.Token)
			claims := user.Claims.(jwt.MapClaims)

			if uid, ok := claims["user_id"].(float64); ok {
				c.Locals("user_id", uint(uid))
			}

			return c.Next()
		},
		ErrorHandler: func(c *fiber.Ctx, err error) error {
			return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
				"message": "Unauthorized",
			})
		},
	})
}

func AuthAdmin() fiber.Handler {
	return jwtware.New(jwtware.Config{
		SigningKey:  []byte(os.Getenv("SECRET_KEY")),
		TokenLookup: "cookie:token",
		SuccessHandler: func(c *fiber.Ctx) error {
			user := c.Locals("user").(*jwt.Token)
			claims := user.Claims.(jwt.MapClaims)

			if uid, ok := claims["user_id"].(float64); ok {
				c.Locals("user_id", uint(uid))
			}

			if role, ok := claims["role"].(string); ok && role == "admin" {
				c.Locals("role", role)
				return c.Next()
			}

			return c.Status(fiber.StatusForbidden).JSON(fiber.Map{
				"message": "You're not able to use this endpoint",
			})
		},
		ErrorHandler: func(c *fiber.Ctx, err error) error {
			return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
				"message": "Unauthorized",
			})
		},
	})
}
