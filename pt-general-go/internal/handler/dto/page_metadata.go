package dto

import "pt-general-go/internal/domain"

type PageMetadataDTO struct {
	URL  string `json:"url" example:"/tours"`
	Tags string `json:"tags" example:"title:Tours | description:Browse our tours | keywords:tours,travel"`
}

func MapToPageMetadataDTO(pm *domain.PageMetadata) PageMetadataDTO {
	return PageMetadataDTO{
		URL:  pm.URL,
		Tags: pm.Tags,
	}
}

type CreatePageMetadataRequest struct {
	URL  string `json:"url" binding:"required" example:"/tours"`
	Tags string `json:"tags" binding:"required" example:"title:Tours | description:Browse our tours | keywords:tours,travel"`
}

type UpdatePageMetadataRequest struct {
	NewURL *string `json:"newUrl" example:"/new-tours"`
	Tags   *string `json:"tags" example:"title:New Tours | description:Browse new tours"`
	URL    string  `json:"url" binding:"required" example:"/tours"`
}

func (r *UpdatePageMetadataRequest) ToDomain() *domain.UpdatePageMetadataParams {
	return &domain.UpdatePageMetadataParams{
		URL:    r.URL,
		NewURL: r.NewURL,
		Tags:   r.Tags,
	}
}
