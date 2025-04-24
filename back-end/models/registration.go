package models

import "github.com/google/uuid"

type Registration struct {
	ID              uuid.UUID `gorm:"type:char(36);primaryKey" json:"id"`
	TeamName        string    `gorm:"type:varchar(255)" json:"team_name"`
	LeaderID        uuid.UUID `gorm:"type:char(36);column:leader_id" json:"leader_id"`
	Member1ID       uuid.UUID `gorm:"type:char(36);column:member1_id" json:"member1_id"`
	Member2ID       uuid.UUID `gorm:"type:char(36);column:member2_id" json:"member2_id"`
	CompetitionID   uuid.UUID `gorm:"type:char(36);column:competition_id" json:"competition_id"`
	CompetitionName string    `gorm:"type:varchar(255)" json:"competition_name"`
	PaymentProff    string    `gorm:"type:varchar(255)" json:"payment_proof"`
	PaymentStatus   bool      `gorm:"type:boolean;default:false" json:"payment_status"`
}
