package domain

type LeadZoho struct {
	Company   string `json:"Company"`
	Phone     string `json:"Phone"`
	LastName  string `json:"Last_Name"`
	FirstName string `json:"First_Name"`
	Email     string `json:"Email"`
}

type ContactZoho struct {
	FirstName        string   `json:"First_Name,omitempty"`
	LastName         string   `json:"Last_Name"`
	Email            string   `json:"Email,omitempty"`
	Phone            string   `json:"Phone,omitempty"`
	Mobile           string   `json:"Mobile,omitempty"`
	Language         string   `json:"Language,omitempty"`
	Timezone         string   `json:"Timezone,omitempty"`
	City             string   `json:"City,omitempty"`
	Country          string   `json:"Country,omitempty"`
	LastContactPage  string   `json:"Last_Contact_Page,omitempty"`
	SubscriptionType []string `json:"Subscription_Type,omitempty"`
}

type DealZoho struct {
	DealName             string   `json:"Deal_Name"`
	ClientEmail          string   `json:"Client_Email,omitempty"`
	ClientPhone          string   `json:"Client_Phone,omitempty"`
	TravelDates          string   `json:"Travel_Dates,omitempty"`
	Travelers            int      `json:"Travelers,omitempty"`
	SingleRoomSupplement int      `json:"Single_Room_Supplement,omitempty"`
	Amount               float64  `json:"Amount,omitempty"`
	TourName             string   `json:"Tour_Name,omitempty"`
	Stage                string   `json:"Stage"`
	Pipeline             string   `json:"Pipeline,omitempty"`
	ClosingDate          string   `json:"Closing_Date,omitempty"`         // YYYY-MM-DD
	DepositPaymentDate   string   `json:"Deposit_Payment_Date,omitempty"` // YYYY-MM-DD
	Source               string   `json:"Source,omitempty"`
	Language             string   `json:"Language,omitempty"`
	Timezone             string   `json:"Timezone,omitempty"`
	City                 string   `json:"City,omitempty"`
	Country              string   `json:"Country,omitempty"`
	LastContactPage      string   `json:"Last_Contact_Page,omitempty"`
	SubscriptionType     []string `json:"Subscription_Type,omitempty"`

	// relations
	AccountID string `json:"Account_Name,omitempty"`
	ContactID string `json:"Contact_Name,omitempty"`
	LeadID    string `json:"Lead_Name,omitempty"`
}
