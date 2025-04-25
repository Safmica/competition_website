package models

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Registration struct {
	ID            uuid.UUID      `gorm:"type:char(36);primaryKey" json:"id"`
	TeamName      string         `gorm:"type:varchar(255)" json:"team_name"`
	LeaderID      uuid.UUID      `gorm:"type:char(36);column:leader_id" json:"leader_id"`
	Member1ID     uuid.UUID      `gorm:"type:char(36);column:member1_id" json:"member1_id"`
	Member2ID     uuid.UUID      `gorm:"type:char(36);column:member2_id" json:"member2_id"`
	CompetitionID uuid.UUID      `gorm:"type:char(36);column:competition_id" json:"competition_id"`
	Competition   Competition    `json:"competition" gorm:"foreignKey:CompetitionID"`
	PaymentProff  string         `gorm:"type:varchar(255)" json:"payment_proof"`
	PaymentStatus string           `gorm:"type:enum('waiting', 'approved', 'rejected');default:'waiting" json:"payment_status"`
	CreatedAt     time.Time      `json:"-" gorm:"autoCreateTime"`
	UpdatedAt     time.Time      `json:"-" gorm:"autoUpdateTime"`
	DeletedAt     gorm.DeletedAt `json:"-" gorm:"index"`
}


type RegistrationResponse struct {
	ID            uuid.UUID      `gorm:"type:char(36);primaryKey" json:"id"`
	TeamName      string         `gorm:"type:varchar(255)" json:"team_name"`
	LeaderID      uuid.UUID      `gorm:"type:char(36);column:leader_id" json:"leader_id"`
	Member1ID     uuid.UUID      `gorm:"type:char(36);column:member1_id" json:"member1_id"`
	Member2ID     uuid.UUID      `gorm:"type:char(36);column:member2_id" json:"member2_id"`
	CompetitionID uuid.UUID      `gorm:"type:char(36);column:competition_id" json:"competition_id"`
	Competition   Competition    `json:"competition" gorm:"foreignKey:CompetitionID"`
	PaymentProff  string         `gorm:"type:varchar(255)" json:"payment_proof"`
	PaymentStatus string           `gorm:"type:enum('waiting', 'approved', 'rejected');default:'waiting" json:"payment_status"`
}

func (RegistrationResponse) TableName() string {
	return "registrations"
}

type RegistrationAction struct {
	PaymentStatus string           `gorm:"type:enum('waiting', 'approved', 'rejected');default:'waiting" json:"payment_status"`
}

func (RegistrationAction) TableName() string {
	return "registrations"
}