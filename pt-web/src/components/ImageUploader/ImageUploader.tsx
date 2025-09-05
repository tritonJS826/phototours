import React, {useCallback, useRef, useState} from "react";
import {cloudinaryService} from "src/services/cloudinaryService";
import {photoService} from "src/services/photoService";
import {Photo, PhotoUploadProgress} from "src/types/photo";
import styles from "src/components/ImageUploader/ImageUploader.module.scss";

type Props = {
  onUploadComplete?: (photos: Photo[]) => void;
  maxFiles?: number;
  className?: string;
};

const DEBOUNCE_DELAY_MS = 2000;
const BYTES_IN_KB = 1024;
const DECIMAL_PLACES = 2;
const DEFAULT_MAX_FILES = 20;
const PROGRESS_MAX = 100;
const EMPTY_STRING = "";

export const ImageUploader: React.FC<Props> = ({
  onUploadComplete,
  maxFiles = DEFAULT_MAX_FILES,
  className = EMPTY_STRING,
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<PhotoUploadProgress[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = useCallback(
    async (files: File[]) => {
      if (files.length === 0) {
        return;
      }

      const validFiles: File[] = [];
      const errors: string[] = [];

      files.forEach((file) => {
        const validation = cloudinaryService.validateFile(file);
        if (validation.isValid) {
          validFiles.push(file);
        } else if (validation.error) {
          errors.push(`${file.name}: ${validation.error}`);
        }
      });

      if (errors.length > 0) {
        window.alert(`Validation errors:\n${errors.join("\n")}`);
      }

      if (validFiles.length === 0) {
        return;
      }

      const filesToUpload = validFiles.slice(0, maxFiles);

      const progressItems: PhotoUploadProgress[] = filesToUpload.map((file) => ({
        file,
        progress: 0,
        status: "pending",
      }));

      setUploadProgress(progressItems);
      setIsUploading(true);

      try {
        const signatureResponse = await photoService.getUploadSignature(false);

        const cloudinaryResults = await cloudinaryService.uploadMultiplePhotos(
          filesToUpload,
          signatureResponse.signature,
          signatureResponse.timestamp,
          signatureResponse.folder,
        );

        const completedProgress = progressItems.map((item, index) => ({
          ...item,
          progress: PROGRESS_MAX,
          status: "completed" as const,
          result: cloudinaryResults[index],
        }));

        setUploadProgress(completedProgress);

        const photosData = cloudinaryResults.map((result, index) => {
          const file = filesToUpload[index];

          return {
            publicId: result.public_id,
            originalUrl: result.secure_url,
            thumbnailUrl: cloudinaryService.generateThumbnailUrl(result.public_id),
            fileName: file.name,
            fileSize: result.bytes,
            width: result.width,
            height: result.height,
            format: result.format,
            isPrivate: false,
          };
        });

        const uploadResponse = await photoService.uploadPhotos(photosData);

        if (onUploadComplete) {
          onUploadComplete(uploadResponse.photos);
        }

        window.setTimeout(() => {
          setUploadProgress([]);
          setIsUploading(false);
        }, DEBOUNCE_DELAY_MS);
      } catch (e) {
        const message =
          e instanceof Error ? e.message : "Upload failed";
        const erroredProgress = progressItems.map((item) => ({
          ...item,
          status: "error" as const,
          error: message,
        }));

        setUploadProgress(erroredProgress);
        setIsUploading(false);
      }
    },
    [maxFiles, onUploadComplete],
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
      const files = Array.from(e.dataTransfer.files);
      handleFiles(files);
    },
    [handleFiles],
  );

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files ?? []);
      handleFiles(files);
    },
    [handleFiles],
  );

  const removeFile = useCallback((index: number) => {
    setUploadProgress((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const retryUpload = useCallback(
    async (index: number) => {
      const item = uploadProgress[index];
      if (!item || item.status !== "error") {
        return;
      }
      removeFile(index);
      await handleFiles([item.file]);
    },
    [uploadProgress, removeFile, handleFiles],
  );

  return (
    <div className={`${styles.imageUploader} ${className}`}>
      <div
        className={`${styles.dropZone} ${isDragOver ? styles.dragOver : EMPTY_STRING}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <div className={styles.dropZoneContent}>
          <div className={styles.uploadIcon}>
            📷
          </div>
          <h3>
            Drag & Drop photos here
          </h3>
          <p>
            or click to select files
          </p>
          <p className={styles.fileTypes}>
            Supports: JPEG, PNG, WebP (max
            {" "}
            {maxFiles}
            {" "}
            files, 10MB each)
          </p>
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileSelect}
        className={styles.hiddenInput}
      />

      {uploadProgress.length > 0 && (
        <div className={styles.progressSection}>
          <h4>
            Upload Progress
          </h4>
          {uploadProgress.map((item, index) => (
            <div
              key={`${item.file.name}-${index}`}
              className={`${styles.progressItem} ${styles[item.status]}`}
            >
              <div className={styles.fileInfo}>
                <span className={styles.fileName}>
                  {item.file.name}
                </span>
                <span className={styles.fileSize}>
                  (
                  {(item.file.size / BYTES_IN_KB / BYTES_IN_KB).toFixed(DECIMAL_PLACES)}
                  {" "}
                  MB
                  )
                </span>
              </div>

              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{width: `${item.progress}%`}}
                />
              </div>

              <div className={styles.status}>
                {item.status === "pending" && "Pending..."}
                {item.status === "uploading" && `${item.progress}%`}
                {item.status === "completed" && "Completed"}
                {item.status === "error" && (
                  <div className={styles.errorActions}>
                    <span className={styles.errorText}>
                      {item.error}
                    </span>
                    <button
                      onClick={() => retryUpload(index)}
                      className={styles.retryButton}
                    >
                      Retry
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => removeFile(index)}
                className={styles.removeButton}
                title="Remove from list"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      {!isUploading && (
        <button
          className={styles.uploadButton}
          onClick={() => fileInputRef.current?.click()}
        >
          Select Photos
        </button>
      )}
    </div>
  );
};
