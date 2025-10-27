package repository

import (
	"context"
	"fmt"
	"mime/multipart"
	"time"

	"github.com/cloudinary/cloudinary-go/v2"
	"github.com/cloudinary/cloudinary-go/v2/api/uploader"
	"github.com/google/uuid"
)

type UploadRepository struct {
	cld                    *cloudinary.Cloudinary
	cloudinaryUploadFolder string
}

func NewUploadRepository(cld *cloudinary.Cloudinary, cloudinaryUploadFolder string) *UploadRepository {
	return &UploadRepository{
		cld:                    cld,
		cloudinaryUploadFolder: cloudinaryUploadFolder,
	}
}

func (r *UploadRepository) UploadAvatar(ctx context.Context, file *multipart.FileHeader) (string, error) {
	f, err := file.Open()
	if err != nil {
		return "", err
	}
	defer f.Close()

	uploadParams := uploader.UploadParams{
		Folder:         r.cloudinaryUploadFolder,
		PublicID:       fmt.Sprintf("%d_%s", time.Now().UnixNano(), uuid.New().String()),
		ResourceType:   "auto",
		Transformation: "c_limit,w_1920,h_1080/q_auto:good",
	}

	uploadResult, err := r.cld.Upload.Upload(ctx, f, uploadParams)
	if err != nil {
		return "", err
	}

	return uploadResult.SecureURL, nil
}
