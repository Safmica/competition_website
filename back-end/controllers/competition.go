package controllers

import (
	"back-end-competition/database"
	"back-end-competition/models"
	"back-end-competition/utils"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
)  
 
func CreateCompetition(c *fiber.Ctx) error {  
	var competition models.Competition  

	if err := c.BodyParser(&competition); err != nil {  
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{  
			"error": "Gagal memproses data",  
		})  
	}  

	if competition.Title == "" {  
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{  
			"error": "Judul kompetisi wajib diisi",  
		})  
	}  
  
	competition.ID = uuid.New()

	if competition.Deadline.IsZero() {  
		competition.Deadline = time.Now()  
	}  

	result := database.DB.Create(&competition)  
	if result.Error != nil {  
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{  
			"error": "Gagal membuat kompetisi",  
			"details": result.Error.Error(),  
		})  
	}  

	return c.Status(fiber.StatusCreated).JSON(competition)  
}  

func GetCompetitions(c *fiber.Ctx) error {  
	params := make(map[string]interface{})
	query := c.Queries()
	for key, value := range query {
		if key != "page" && key != "size" {
			params[key] = value
		}
	}

	pagination := utils.NewPagination()
	stmt := database.DB.Model(&models.Competition{})

	for key, value := range params {
		stmt = stmt.Where(key+" LIKE ?", "%"+value.(string)+"%")
	}

	var competition []models.Competition
	paginatedResponse := pagination.With(stmt).Request(c.Request()).Response(&competition)

	if paginatedResponse.Error {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": paginatedResponse.ErrorMessage,
		})
	}

	return c.JSON(paginatedResponse)
}  

func GetCompetitionByID(c *fiber.Ctx) error {  
	var competition models.Competition  
	id := c.Params("id")  
  
	result := database.DB.First(&competition, "id = ?", id)  
	if result.Error != nil {  
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{  
			"error": "Kompetisi tidak ditemukan",  
		})  
	}  

	return c.Status(fiber.StatusOK).JSON(competition)  
}  
  
func UpdateCompetition(c *fiber.Ctx) error {  
	id := c.Params("id")  
	var competition models.Competition  

	result := database.DB.First(&competition, "id = ?", id)  
	if result.Error != nil {  
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{  
			"error": "Kompetisi tidak ditemukan",  
		})  
	}  

	if err := c.BodyParser(&competition); err != nil {  
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{  
			"error": "Gagal memproses data",  
		})  
	}  

	updateResult := database.DB.Save(&competition)  
	if updateResult.Error != nil {  
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{  
			"error": "Gagal memperbarui kompetisi",  
		})  
	}  

	return c.Status(fiber.StatusOK).JSON(competition)  
}  

func DeleteCompetition(c *fiber.Ctx) error {  
	id := c.Params("id")  
 
	result := database.DB.Delete(&models.Competition{}, "id = ?", id)  
	if result.Error != nil {  
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{  
			"error": "Gagal menghapus kompetisi",  
		})  
	}  

	if result.RowsAffected == 0 {  
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{  
			"error": "Kompetisi tidak ditemukan",  
		})  
	}  

	return c.Status(fiber.StatusOK).JSON(fiber.Map{  
		"message": "Kompetisi berhasil dihapus",  
	})  
}  
