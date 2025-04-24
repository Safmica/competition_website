package utils

import (
	"fmt"
	"path/filepath"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
)

func Upload(ctx *fiber.Ctx, fileInputName string) string {
	file, err := ctx.FormFile(fileInputName)
	if err != nil {
		return "Failed to upload file"
	}

	const maxFileSize = 50 * 1024 * 1024

	if file.Size > maxFileSize {
		return "File size exceeds the 50MB limit"
	}

	allowedExtensions := []string{".png", ".jpg", ".jpeg", ".pdf"}
	extension := filepath.Ext(file.Filename)
	valid := false
	for _, ext := range allowedExtensions {
		if ext == extension {
			valid = true
			break
		}
	}

	if !valid {
		return "Invalid file type"
	}

	randomUUID := uuid.New()
	timestamp := time.Now().Unix()
	fileName := fmt.Sprintf("%s-%d%s", randomUUID, timestamp, extension)
	filePath := fmt.Sprintf("./assets/%s", fileName)

	if err := ctx.SaveFile(file, filePath); err != nil {
		return "Failed to save file"
	}

	return filePath
}