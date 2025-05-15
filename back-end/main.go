package main

import (
	"back-end-competition/config"
	"back-end-competition/database"
	"back-end-competition/routes"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	config.ENVInit()
	database.DBInit()
	database.DBMigration()
	app := fiber.New()
	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:5173/",
		AllowMethods: "GET,POST,PUT,DELETE,OPTIONS",
		AllowHeaders: "Origin, Content-Type, Accept, Authorization",
		AllowCredentials: true,
	}))

	app.Static("/assets", "./assets")
	routes.SetupRoutes(app)

	port := os.Getenv("SERVER_PORT")
	app.Listen(":" + port)
}
