package domain

type Lead struct {
	Company   string `json:"Company"`
	Phone     string `json:"Phone"`
	LastName  string `json:"Last_Name"`
	FirstName string `json:"First_Name"`
	Email     string `json:"Email"`
}
