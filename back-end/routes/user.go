package routes

import (
	"back-end-competition/controllers"
	"back-end-competition/middlewares"

	"github.com/gofiber/fiber/v2"
)

func UserRoutes(app *fiber.App) {
	app.Post("/signup", controllers.Signup)
	app.Post("/login", controllers.Login)
	app.Get("/user", middlewares.Auth(), controllers.GetAllUser)
}