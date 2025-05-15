package utils

import (
	"fmt"
	"time"
)

func TimeNow() time.Time {
	loc, err := time.LoadLocation("Asia/Jakarta")
	if err != nil {
		fmt.Println("Error loading location:", err)
		return time.Now()
	}

	now := time.Now().In(loc)

	return now
}

func YearNow() int {
	loc, err := time.LoadLocation("Asia/Jakarta")
	if err != nil {
		fmt.Println("Error loading location:", err)
		return time.Now().Year()
	}

	now := time.Now().In(loc).Year()

	return now
}