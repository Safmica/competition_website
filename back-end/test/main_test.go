package test

import (
	"back-end-competition/config"
	"back-end-competition/database"
	"os"
	"testing"
)

func TestMain(m *testing.M) {
	config.ENVInit()
	database.DBInit()

	code := m.Run()

	os.Exit(code)
}