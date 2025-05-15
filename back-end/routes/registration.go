package routes

import (
	"back-end-competition/controllers"
	"back-end-competition/middlewares"

	"github.com/gofiber/fiber/v2"
)

func RegistrationRoutes(route fiber.Router) {
	route.Post("/registration", middlewares.Auth(), controllers.CreateRegistration)
	route.Patch("/registration/:id", middlewares.Auth(), controllers.UpdateRegistration)
	route.Get("/registration", middlewares.Auth(), controllers.GetRegistration)
	route.Patch("/registration/:id", middlewares.Auth(), controllers.DeleteRegistration)
	route.Patch("/registration/payment/:id", middlewares.AuthAdmin(), controllers.ApprovedPayment)
	route.Get("/registration/registered", middlewares.AuthAdmin(), controllers.GetAllRegistrer)
}