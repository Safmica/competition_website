package database

import (
	"back-end-competition/models"
	"fmt"
	"log"
)

func DBMigration() {
	err := DB.AutoMigrate(
		&models.User{},
	)

	if err != nil {
		log.Println(err)
	}
	fmt.Println("Database migrated successfully")
}