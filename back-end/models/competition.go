package models

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Competition struct {
	ID          uuid.UUID      `gorm:"type:char(36);primaryKey" json:"id"`
	Title       string         `gorm:"type:varchar(255)" json:"title"`
	Description string         `gorm:"type:text" json:"description"`
	Deadline    time.Time      `gorm:"type:datetime" json:"deadline"`
	HTM         float64        `gorm:"type:float" json:"htm"`
	CreatedAt   time.Time      `json:"-" gorm:"autoCreateTime"`
	UpdatedAt   time.Time      `json:"-" gorm:"autoUpdateTime"`
	DeletedAt   gorm.DeletedAt `json:"-" gorm:"index"`
}
