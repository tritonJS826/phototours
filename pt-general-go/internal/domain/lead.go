package domain

type LeadZoho struct {
	Company   string `json:"Company"`
	Phone     string `json:"Phone"`
	LastName  string `json:"Last_Name"`
	FirstName string `json:"First_Name"`
	Email     string `json:"Email"`
}

type ContactZoho struct {
	FirstName string `json:"First_Name,omitempty"`
	LastName  string `json:"Last_Name"`
	Email     string `json:"Email,omitempty"`
	Phone     string `json:"Phone,omitempty"`
	Mobile    string `json:"Mobile,omitempty"`
}

type DealZoho struct {
	DealName             string  `json:"Deal_Name"`
	ClientEmail          string  `json:"Client_Email,omitempty"`
	ClientPhone          string  `json:"Client_Phone,omitempty"`
	TourDate             string  `json:"Tour_Date,omitempty"`
	Travelers            int     `json:"Travelers,omitempty"`
	SingleRoomSupplement float64 `json:"Single_Room_Supplement,omitempty"`
	Amount               float64 `json:"Amount,omitempty"`
	TourName             string  `json:"Tour_Name,omitempty"`
	Stage                string  `json:"Stage"`
	Pipeline             string  `json:"Pipeline,omitempty"`
	ClosingDate          string  `json:"Closing_Date,omitempty"` // YYYY-MM-DD

	// relations
	AccountID string `json:"Account_Name,omitempty"`
	ContactID string `json:"Contact_Name,omitempty"`
	LeadID    string `json:"Lead_Name,omitempty"`
}
