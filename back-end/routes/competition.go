package routes

import (
	"back-end-competition/controllers"

	"github.com/gofiber/fiber/v2"
)

func CompetitionRoutes(app *fiber.App) {
	app.Post("/competition", controllers.CreateCompetition)
	app.Get("/competition", controllers.GetCompetitions)
	app.Get("/competition/:id", controllers.GetCompetitionByID)
	app.Put("/competition/:id", controllers.UpdateCompetition)
	app.Delete("/competition/:id", controllers.DeleteCompetition)
	
}