package models

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Registration struct {
	ID            uuid.UUID      `gorm:"type:char(36);primaryKey" json:"id"`
	TeamName      string         `gorm:"type:varchar(255)" json:"team_name"`
	LeaderID      uuid.UUID      `gorm:"type:char(36);column:leader_id" json:"-"`
	Leader        UserResponse   `gorm:"foreignKey:LeaderID" json:"leader"`
	Member1ID     uuid.UUID      `gorm:"type:char(36);column:member1_id" json:"-"`
	Member1       UserResponse   `gorm:"foreignKey:Member1ID" json:"member_1"`
	Member2ID     uuid.UUID      `gorm:"type:char(36);column:member2_id" json:"-"`
	Member2       UserResponse   `gorm:"foreignKey:Member2ID" json:"member_2"`
	CompetitionID uuid.UUID      `gorm:"type:char(36);column:competition_id" json:"-"`
	Competition   Competition    `json:"competition" gorm:"foreignKey:CompetitionID"`
	PaymentProff  string         `gorm:"type:varchar(255)" json:"payment_proof"`
	PaymentStatus string         `gorm:"type:enum('waiting', 'approved', 'rejected');default:'waiting" json:"payment_status"`
	CreatedAt     time.Time      `json:"-" gorm:"autoCreateTime"`
	UpdatedAt     time.Time      `json:"-" gorm:"autoUpdateTime"`
	DeletedAt     gorm.DeletedAt `json:"-" gorm:"index"`
}

type RegistrationResponse struct {
	ID            uuid.UUID `gorm:"type:char(36);primaryKey" json:"id"`
	TeamName      string    `gorm:"type:varchar(255)" json:"team_name"`
	LeaderID      uuid.UUID      `gorm:"type:char(36);column:leader_id" json:"-"`
	Leader        UserResponse   `gorm:"foreignKey:LeaderID" json:"leader"`
	Member1ID     uuid.UUID      `gorm:"type:char(36);column:member1_id" json:"-"`
	Member1       UserResponse   `gorm:"foreignKey:Member1ID" json:"member_1"`
	Member2ID     uuid.UUID      `gorm:"type:char(36);column:member2_id" json:"-"`
	Member2       UserResponse   `gorm:"foreignKey:Member2ID" json:"member_2"`
	CompetitionID uuid.UUID   `gorm:"type:char(36);column:competition_id" json:"competition_id"`
	Competition   Competition `json:"competition" gorm:"foreignKey:CompetitionID"`
	PaymentProff  string      `gorm:"type:varchar(255)" json:"payment_proof"`
	PaymentStatus string      `gorm:"type:enum('waiting', 'approved', 'rejected');default:'waiting" json:"payment_status"`
}

func (RegistrationResponse) TableName() string {
	return "registrations"
}

type RegistrationAction struct {
	PaymentStatus string `gorm:"type:enum('waiting', 'approved', 'rejected');default:'waiting" json:"payment_status"`
}

func (RegistrationAction) TableName() string {
	return "registrations"
}
