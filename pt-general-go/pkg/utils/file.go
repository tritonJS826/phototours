package utils

import (
	"fmt"
	"mime/multipart"
	"os"
	"path/filepath"
	"time"

	"github.com/gin-gonic/gin"
)

func SaveUploadedFile(ctx *gin.Context, fileHeader *multipart.FileHeader) (string, error) {
	// TODO: move to const
	uploadDir := "./uploads"
	if err := os.MkdirAll(uploadDir, os.ModePerm); err != nil {
		return "", err
	}

	ext := filepath.Ext(fileHeader.Filename)
	filename := fmt.Sprintf("%d%s", time.Now().UnixNano(), ext)
	destPath := filepath.Join(uploadDir, filename)

	if err := ctx.SaveUploadedFile(fileHeader, destPath); err != nil {
		return "", err
	}

	return destPath, nil
}
