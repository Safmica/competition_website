package routes

import (
	"back-end-competition/controllers"
	"back-end-competition/middlewares"

	"github.com/gofiber/fiber/v2"
)

func UserRoutes(route fiber.Router) {
	route.Post("/signup", controllers.Signup)
	route.Post("/login", controllers.Login)
	route.Post("/logout", controllers.Logout)
	route.Get("/users", middlewares.Auth(), controllers.GetAllUser)
	route.Get("/me", middlewares.Auth(), controllers.Me)
}