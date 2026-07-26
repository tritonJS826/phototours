package service

import "context"

type PaymentProvider interface {
	CreateOrder(ctx context.Context, dealID string, amount float64, tourTitle string, customerName string) (redirectURL string, err error)
	VerifyWebhook(ctx context.Context, body []byte, headers map[string]string) (dealID string, err error)
}