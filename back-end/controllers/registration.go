package controllers

import (
	"back-end-competition/database"
	"back-end-competition/models"
	"back-end-competition/utils"
	"errors"
	"fmt"
	"os"
	"strconv"
	"strings"

	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
	"gopkg.in/gomail.v2"
)

func CreateRegistration(c *fiber.Ctx) error {
	registration := models.Registration{}

	teamName := c.FormValue("team_name")
	leaderID := c.FormValue("leader_id")
	member1ID := c.FormValue("member1_id")
	member2ID := c.FormValue("member2_id")
	competitionID := c.FormValue("competition_id")

	if teamName == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Team_name is required",
		})
	}

	if leaderID == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Leader_id is required",
		})
	}

	if member1ID == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Member1_id is required",
		})
	}

	if member2ID == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Mmeber2_id is required",
		})
	}

	if competitionID == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Competition_id is required",
		})
	}

	path := utils.Upload(c, "payment_prove")
	if len(path) < 2 || path[:2] != "./" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": path,
		})
	}

	registration.TeamName = teamName
	competitionIDs, err := uuid.Parse(competitionID)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid competition ID",
		})
	}
	registration.CompetitionID = competitionIDs
	leaderIDs, err := uuid.Parse(leaderID)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid competition ID",
		})
	}
	registration.LeaderID = leaderIDs
	member1IDs, err := uuid.Parse(member1ID)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid competition ID",
		})
	}
	registration.Member1ID = member1IDs
	member2IDs, err := uuid.Parse(member2ID)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid competition ID",
		})
	}
	registration.Member2ID = member2IDs
	registration.PaymentProff = path
	registration.ID = uuid.New()

	if err := database.DB.Save(&registration).Error; err!=nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Failed to save registration",
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"registration": registration,
	})
}

func GetRegistration(c *fiber.Ctx) error {
	userID := c.Locals("user_id")
	registrations := []models.Registration{}

	if err := database.DB.Preload("Competition").Where("leader_id = ? OR member1_id = ? OR member2_id = ?", userID, userID, userID).Find(&registrations).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"message": "registrations not found",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"registrations": registrations,
	})
}

func UpdateRegistration(c *fiber.Ctx) error {
	registrationID := c.Params("id")
	registration := models.Registration{}

	if err := database.DB.Where("registration_id = ?",registrationID).First(&registration); err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"message": "registrations not found",
		})
	}


	teamName := c.FormValue("team_name")
	leaderID := c.FormValue("leader_id")
	member1ID := c.FormValue("member1_id")
	member2ID := c.FormValue("member2_id")
	competitionID := c.FormValue("competition_id")

	if teamName != "" {
		registration.TeamName = teamName
	}

	if leaderID != "" {
		leaderIDs, err := uuid.Parse(leaderID)
		if err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"error": "Invalid competition ID",
			})
		}
		registration.LeaderID = leaderIDs
	}

	if member1ID != "" {
		member1IDs, err := uuid.Parse(member1ID)
		if err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"error": "Invalid competition ID",
			})
		}
		registration.Member1ID = member1IDs
	}

	if member2ID != "" {
		member2IDs, err := uuid.Parse(member2ID)
		if err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"error": "Invalid competition ID",
			})
		}
		registration.Member2ID = member2IDs
	}

	if competitionID != "" {
		competitionIDs, err := uuid.Parse(competitionID)
		if err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"error": "Invalid competition ID",
			})
		}
		registration.CompetitionID = competitionIDs
	}

	if file, _ := c.FormFile("paymemnt_prove"); file != nil {
		path := utils.Upload(c, "payment_prove")
		if len(path) < 2 || path[:2] != "./" {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": path,
			})
		}

		registration.PaymentProff = path
	}

	if err := database.DB.Save(&registration).Error; err!=nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Failed to save registration",
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"registration": registration,
	})
}

func DeleteRegistration(c *fiber.Ctx) error {
	userID := c.Locals("user_id")
	registration := models.Registration{}
	registrationID := c.Params("id")

	if err := database.DB.Where("registration_id = ?",registrationID).First(&registration); err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"message": "registrations not found",
		})
	}

	if registration.LeaderID != userID {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"message": "You must the leader",
		})
	}

	if err := database.DB.Delete(&registration).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Failed to delete registration",
		})
	}

	return c.SendStatus(fiber.StatusNoContent)
}

func GetAllRegistrer(c *fiber.Ctx) error {
	registers := []models.RegistrationResponse{}
	if err := database.DB.Preload("Competition").Find(&registers).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message":"Internal server error",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"registers":registers,
	})
}


func ApprovedPayment(c *fiber.Ctx) error {
	registrationID := c.Params("id")
	registration := models.Registration{}
	paymentStatus := models.RegistrationAction{}
	leader := models.User{}
	if err := c.BodyParser(&paymentStatus); err != nil {  
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{  
			"error": "Wrong field",  
		})  
	}  

	if err := database.DB.Where("id = ?",registrationID).First(&registration).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"message": "registrations not found",
		})
	}

	if paymentStatus.PaymentStatus == "rejected" {
		registration.PaymentStatus = "rejected"
		htmlBody, err := GenerateHTMLBodyFromTemplate("./assets/rejected.html", registration.TeamName)
		if err != nil {
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"message": "Failed to send email",
			})
		}
		if err := database.DB.Where("id = ?",registration.LeaderID).First(&leader).Error; err != nil {
			return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
				"message": "leader not found",
			})
		}
		SendNotification(leader.Email,"Invalid Payment Proof", htmlBody, "")
	} else if paymentStatus.PaymentStatus == "approved" {
		registration.PaymentStatus = "approved"
		htmlBody, err := GenerateHTMLBodyFromTemplate("./assets/approved.html", registration.TeamName)
		if err != nil {
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"message": "Failed to send email",
			})
		}
		if err := database.DB.Where("id = ?",registration.LeaderID).First(&leader).Error; err != nil {
			return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
				"message": "leader not found",
			})
		}
		SendNotification(leader.Email,"Payment Approved", htmlBody, "")
	} else {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{  
			"error": "Wrong field",  
		})  
	}

	if err := database.DB.Save(&registration).Error; err!=nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Failed to save registration",
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"registration": registration,
	})
}

func SendNotification(to string, subject string, htmlBody string, attachmentPath string) error {
	smtpServer := os.Getenv("SMTP_SERVER")
	smtpPort := os.Getenv("SMTP_PORT")
	smtpEmail := os.Getenv("SMTP_EMAIL")
	smtpPassword := os.Getenv("SMTP_PASSWORD")

	if smtpServer == "" || smtpPort == "" || smtpEmail == "" || smtpPassword == "" {
		return errors.New("SMTP environment variables are not set correctly")
	}

	port, err := strconv.Atoi(smtpPort)
	if err != nil {
		fmt.Println("Invalid SMTP port:", err)
		return err
	}

	m := gomail.NewMessage()
	m.SetHeader("From", smtpEmail)
	m.SetHeader("To", to)
	m.SetHeader("Subject", subject)
	m.SetBody("text/html", htmlBody)
	if attachmentPath != "" {
		m.Attach(attachmentPath)
	}

	d := gomail.NewDialer(smtpServer, port, smtpEmail, smtpPassword)

	if err := d.DialAndSend(m); err != nil {
		fmt.Println("Failed to send email:", err)
	}

	return nil
}

func GenerateHTMLBodyFromTemplate(file string, participantName string) (string, error) {
	fileContent, err := os.ReadFile(file)
	if err != nil {
		return "", fmt.Errorf("failed to read HTML file: %w", err)
	}

	htmlBody := string(fileContent)

	htmlBody = strings.Replace(htmlBody, "[Team]", participantName, -1)

	return htmlBody, nil
}