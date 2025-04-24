package routes

import (
	"back-end-competition/controllers"
	"back-end-competition/middlewares"

	"github.com/gofiber/fiber/v2"
)

func RegistrationRoutes(app *fiber.App) {
	app.Post("/registration", middlewares.Auth(), controllers.CreateRegistration)
	app.Patch("/registration/:id", middlewares.Auth(), controllers.UpdateRegistration)
	app.Get("/registration", middlewares.Auth(), controllers.GetRegistration)
	app.Patch("/registration/:id", middlewares.Auth(), controllers.DeleteRegistration)
}