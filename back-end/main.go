package main

import (
	"back-end-competition/config"
	"back-end-competition/routes"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	config.ENVInit()
	app := fiber.New()
	app.Use(cors.New(cors.Config{
		AllowOrigins: "*", 
		AllowHeaders: "Origin, Content-Type, Accept",
	}))

	routes.SetupRoutes(app)

	port := os.Getenv("SERVER_PORT")
	app.Listen(":"+port)
}