package controllers  

import (  
	"github.com/gofiber/fiber/v2"  
	"github.com/google/uuid"  
	"back-end-competition/models"  
	"back-end-competition/database"  
	"time"  
)  
 
func CreateCompetition(c *fiber.Ctx) error {  
	var competition models.Competition  

	if err := c.BodyParser(&competition); err != nil {  
		return c.status(fiber.StatusBadRequest).JSON(fiber.Map{  
			"error": "Gagal memproses data",  
		})  
	}  

	if competition.Title == "" {  
		return c.status(fiber.StatusBadRequest).JSON(fiber.Map{  
			"error": "Judul kompetisi wajib diisi",  
		})  
	}  

	// Generate UUID untuk ID  
	competition.ID = uuid.New().String()  

	// Set waktu saat ini jika deadline kosong  
	if competition.Deadline.IsZero() {  
		competition.Deadline = time.Now()  
	}  

	// Simpan ke database  
	result := database.DB.Create(&competition)  
	if result.Error != nil {  
		return c.status(fiber.StatusInternalServerError).JSON(fiber.Map{  
			"error": "Gagal membuat kompetisi",  
			"details": result.Error.Error(),  
		})  
	}  

	return c.status(fiber.StatusCreated).JSON(competition)  
}  

// GetCompetitions mengambil semua kompetisi  
func GetCompetitions(c *fiber.Ctx) error {  
	var competitions []models.Competition  

	// Ambil semua kompetisi dari database  
	result := database.DB.Find(&competitions)  
	if result.Error != nil {  
		return c.status(fiber.StatusInternalServerError).JSON(fiber.Map{  
			"error": "Gagal mengambil daftar kompetisi",  
		})  
	}  

	return c.status(fiber.StatusOK).JSON(competitions)  
}  

// GetCompetitionByID mengambil kompetisi berdasarkan ID  
func GetCompetitionByID(c *fiber.Ctx) error {  
	var competition models.Competition  
	id := c.Params("id")  

	// Cari kompetisi berdasarkan ID  
	result := database.DB.First(&competition, "id = ?", id)  
	if result.Error != nil {  
		return c.status(fiber.StatusNotFound).JSON(fiber.Map{  
			"error": "Kompetisi tidak ditemukan",  
		})  
	}  

	return c.status(fiber.StatusOK).JSON(competition)  
}  

// UpdateCompetition memperbarui kompetisi  
func UpdateCompetition(c *fiber.Ctx) error {  
	id := c.Params("id")  
	var competition models.Competition  

	// Temukan kompetisi yang ada  
	result := database.DB.First(&competition, "id = ?", id)  
	if result.Error != nil {  
		return c.status(fiber.StatusNotFound).JSON(fiber.Map{  
			"error": "Kompetisi tidak ditemukan",  
		})  
	}  

	// Parse body dan update  
	if err := c.BodyParser(&competition); err != nil {  
		return c.status(fiber.StatusBadRequest).JSON(fiber.Map{  
			"error": "Gagal memproses data",  
		})  
	}  

	// Simpan perubahan  
	updateResult := database.DB.Save(&competition)  
	if updateResult.Error != nil {  
		return c.status(fiber.StatusInternalServerError).JSON(fiber.Map{  
			"error": "Gagal memperbarui kompetisi",  
		})  
	}  

	return c.status(fiber.StatusOK).JSON(competition)  
}  

// DeleteCompetition menghapus kompetisi  
func DeleteCompetition(c *fiber.Ctx) error {  
	id := c.Params("id")  

	// Hapus kompetisi  
	result := database.DB.Delete(&models.Competition{}, "id = ?", id)  
	if result.Error != nil {  
		return c.status(fiber.StatusInternalServerError).JSON(fiber.Map{  
			"error": "Gagal menghapus kompetisi",  
		})  
	}  

	// Cek apakah ada baris yang dihapus  
	if result.RowsAffected == 0 {  
		return c.status(fiber.StatusNotFound).JSON(fiber.Map{  
			"error": "Kompetisi tidak ditemukan",  
		})  
	}  

	return c.status(fiber.StatusOK).JSON(fiber.Map{  
		"message": "Kompetisi berhasil dihapus",  
	})  
}  

func SetupCompetitionRoutes(app *fiber.App) {  
	competition := app.Group("/competitions")  
	  
	competition.Post("", CreateCompetition)  
	competition.Get("", GetCompetitions)  
	competition.Get("/:id", GetCompetitionByID)  
	competition.Put("/:id", UpdateCompetition)  
	competition.Delete("/:id", DeleteCompetition)  
}  