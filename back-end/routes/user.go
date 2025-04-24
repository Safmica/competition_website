package routes

import (
	"back-end-competition/controllers"

	"github.com/gofiber/fiber/v2"
)

func UserRoutes(app *fiber.App) {
	app.Post("/signup", controllers.Signup)
	app.Post("/login", controllers.Login)
}