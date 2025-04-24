package database

import (
	"fmt"
	"log"
)

func DBMigration() {
	err := DB.AutoMigrate(

	)

	if err != nil {
		log.Println(err)
	}
	fmt.Println("Database migrated successfully")
}