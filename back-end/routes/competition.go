package routes

import (
	"back-end-competition/controllers"

	"github.com/gofiber/fiber/v2"
)

func CompetitionRoutes(route fiber.Router) {
	route.Post("/competition", controllers.CreateCompetition)
	route.Get("/competition", controllers.GetCompetitions)
	route.Get("/competition/:id", controllers.GetCompetitionByID)
	route.Put("/competition/:id", controllers.UpdateCompetition)
	route.Delete("/competition/:id", controllers.DeleteCompetition)
	
}