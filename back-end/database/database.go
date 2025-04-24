package database

import (
	"fmt"
	"log"
	"os"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func DBInit() {
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?parseTime=%s",
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_HOST"),
		os.Getenv("DB_PORT"),
		os.Getenv("DB_NAME"),
		os.Getenv("DB_PARSE_TIME"),
	)

	var err error
	DB, err = gorm.Open(mysql.Open(dsn))
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Connection Success")
}