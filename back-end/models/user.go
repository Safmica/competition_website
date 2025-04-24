package models

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type User struct {
	ID       uuid.UUID `gorm:"type:char(36);primaryKey;column:id_user" json:"id_user"`
	Name     string    `gorm:"type:varchar(255)" json:"name"`
	Email    string    `gorm:"type:varchar(255);unique" json:"email"`
	Password string    `gorm:"type:varchar(60)" json:"-"`
	Role string `gorm:"type:enum('user', 'admin');default:'user" json:"role"`
	CreatedAt           time.Time      `json:"-" gorm:"autoCreateTime"`
	UpdatedAt           time.Time      `json:"-" gorm:"autoUpdateTime"`
	DeletedAt           gorm.DeletedAt `json:"-" gorm:"index"`
}
