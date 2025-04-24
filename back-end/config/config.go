package config

import (
	"log"

	"github.com/joho/godotenv"
)

func ENVInit() {
	if err := godotenv.Load(); err != nil {
		log.Fatal(err)
	}
}