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
	DealName    string  `json:"Deal_Name"`
	Stage       string  `json:"Stage"`
	ClosingDate string  `json:"Closing_Date"` // YYYY-MM-DD
	Amount      float64 `json:"Amount,omitempty"`
	Pipeline    string  `json:"Pipeline,omitempty"`
	ClientPhone string  `json:"Client Phone,omitempty"`

	// relations
	AccountID string `json:"Account_Name,omitempty"`
	ContactID string `json:"Contact_Name,omitempty"`
	LeadID    string `json:"Lead_Name,omitempty"`
}
