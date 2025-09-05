
import React, {useCallback, useState} from "react";
import {Photo, PhotoFilter} from "src/types/photo";
import styles from "src/components/ImageGallery/ImageGallery.module.scss";

interface ImageGalleryProps {
  photos: Photo[];
  loading?: boolean;
  selectedPhotos?: string[];
  onPhotoSelect?: (photoId: string) => void;
  onPhotoDelete?: (photoId: string) => void;
  onPrivacyUpdate?: (photoId: string, isPrivate: boolean) => void;
  onBulkAction?: (action: "delete" | "download" | "move", photoIds: string[]) => void;
  onFilterChange?: (filter: PhotoFilter) => void;
  onSearchChange?: (query: string) => void;
  onPageChange?: (page: number) => void;
  currentPage?: number;
  totalPages?: number;
  filter?: PhotoFilter;
  searchQuery?: string;
  showBulkActions?: boolean;
  className?: string;
}

const DECIMALS = 2;
const KIB = 1024;
const PAGE_STEP = 1;
const FIRST_PAGE = 1;
const FIRST_INDEX = 0;
const LAST_INDEX_OFFSET = 1;

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  photos,
  loading = false,
  selectedPhotos = [],
  onPhotoSelect,
  onPhotoDelete,
  onPrivacyUpdate,
  onBulkAction,
  onFilterChange,
  onSearchChange,
  onPageChange,
  currentPage = FIRST_PAGE,
  totalPages = FIRST_PAGE,
  filter = "all",
  searchQuery = "",
  showBulkActions = false,
  className = "",
}) => {
  const [lightboxPhoto, setLightboxPhoto] = useState<Photo | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(FIRST_INDEX);

  const togglePhotoSelection = useCallback((photoId: string) => {
    if (onPhotoSelect) {
      onPhotoSelect(photoId);
    }
  }, [onPhotoSelect]);

  const handleBulkAction = useCallback((action: "delete" | "download" | "move") => {
    if (selectedPhotos.length === 0) {
      return;
    }
    if (onBulkAction) {
      onBulkAction(action, selectedPhotos);
    }
  }, [selectedPhotos, onBulkAction]);

  const handleFilterChange = useCallback((newFilter: PhotoFilter) => {
    if (onFilterChange) {
      onFilterChange(newFilter);
    }
  }, [onFilterChange]);

  const handleSearchChange = useCallback((query: string) => {
    if (onSearchChange) {
      onSearchChange(query);
    }
  }, [onSearchChange]);

  const handlePageChange = useCallback((page: number) => {
    if (onPageChange) {
      onPageChange(page);
    }
  }, [onPageChange]);

  const handlePhotoClick = useCallback((photo: Photo, index: number) => {
    setLightboxPhoto(photo);
    setLightboxIndex(index);
  }, []);

  const handlePhotoDelete = useCallback((photoId: string) => {
    if (onPhotoDelete) {
      onPhotoDelete(photoId);
    }
  }, [onPhotoDelete]);

  const handlePrivacyChange = useCallback((photoId: string, isPrivate: boolean) => {
    if (onPrivacyUpdate) {
      onPrivacyUpdate(photoId, isPrivate);
    }
  }, [onPrivacyUpdate]);

  const handlePrevPhoto = useCallback(() => {
    if (lightboxIndex > FIRST_INDEX) {
      const newIndex = lightboxIndex - PAGE_STEP;
      setLightboxPhoto(photos[newIndex]);
      setLightboxIndex(newIndex);
    }
  }, [lightboxIndex, photos]);

  const handleNextPhoto = useCallback(() => {
    if (lightboxIndex < photos.length - PAGE_STEP) {
      const newIndex = lightboxIndex + PAGE_STEP;
      setLightboxPhoto(photos[newIndex]);
      setLightboxIndex(newIndex);
    }
  }, [lightboxIndex, photos]);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.min(
      Math.floor(Math.log(bytes) / Math.log(KIB)),
      sizes.length - LAST_INDEX_OFFSET,
    );

    return `${parseFloat((bytes / Math.pow(KIB, i)).toFixed(DECIMALS))} ${sizes[i]}`;
  };

  const closeLightbox = useCallback(() => {
    setLightboxPhoto(null);
    setLightboxIndex(FIRST_INDEX);
  }, []);

  if (loading) {
    return (
      <div className={`${styles.imageGallery} ${className}`}>
        <div className={styles.loading}>
          <div className={styles.spinner} />
          <p>
            Loading photos...
          </p>
        </div>
      </div>
    );
  }

  if (photos.length === 0) {
    return (
      <div className={`${styles.imageGallery} ${className}`}>
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon} />
          <h3 className={styles.emptyTitle}>
            No photos
          </h3>
          <p className={styles.emptyDescription}>
            Upload your first photos to start building your gallery
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.imageGallery} ${className}`}>
      <div className={styles.header}>
        <h3 className={styles.title}>
          Photo Gallery
        </h3>

        <div className={styles.controls}>
          <div className={styles.searchBox}>
            <span className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search photos..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
          </div>

          <select
            className={styles.filterSelect}
            value={filter as string}
            onChange={(e) => handleFilterChange(e.target.value as unknown as PhotoFilter)}
          >
            <option value="all">
              All photos
            </option>
            <option value="public">
              Public
            </option>
            <option value="private">
              Private
            </option>
          </select>

          {showBulkActions && (
            <div className={styles.bulkActions}>
              <button
                className={`${styles.bulkButton} ${styles.delete}`}
                onClick={() => handleBulkAction("delete")}
              >
                Delete (
                {selectedPhotos.length}
                )
              </button>
              <button
                className={`${styles.bulkButton} ${styles.download}`}
                onClick={() => handleBulkAction("download")}
              >
                Download (
                {selectedPhotos.length}
                )
              </button>
            </div>
          )}
        </div>
      </div>

      <div className={styles.grid}>
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className={`${styles.photoItem} ${selectedPhotos.includes(photo.id) ? styles.selected : ""}`}
            onClick={() => handlePhotoClick(photo, index)}
          >
            <img
              src={photo.thumbnailUrl}
              alt={photo.fileName}
              className={styles.photo}
            />

            <div className={styles.overlay}>
              <div className={styles.topControls}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={selectedPhotos.includes(photo.id)}
                  onChange={(e) => {
                    e.stopPropagation();
                    togglePhotoSelection(photo.id);
                  }}
                />
                {photo.isPrivate && <span className={styles.privateBadge}>
                  Private
                </span>}
              </div>

              <div className={styles.bottomControls}>
                <button
                  className={styles.actionButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrivacyChange(photo.id, !photo.isPrivate);
                  }}
                  title={photo.isPrivate ? "Make public" : "Make private"}
                >
                  {photo.isPrivate ? "Show" : "Hide"}
                </button>
                <button
                  className={styles.actionButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePhotoDelete(photo.id);
                  }}
                  title="Delete"
                >
                  Delete
                </button>
              </div>
            </div>

            <div className={styles.info}>
              <p className={styles.fileName}>
                {photo.fileName}
              </p>
              <div className={styles.meta}>
                <span className={styles.size}>
                  {formatFileSize(photo.fileSize)}
                </span>
                <span className={styles.dimensions}>
                  {photo.width}
                  ×
                  {photo.height}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {totalPages > FIRST_PAGE && (
        <div className={styles.pagination}>
          <button
            className={styles.pageButton}
            disabled={currentPage === FIRST_PAGE}
            onClick={() => handlePageChange(currentPage - PAGE_STEP)}
          >
            Previous
          </button>

          <span className={styles.pageInfo}>
            Page
            {currentPage}
            {" "}
            of
            {totalPages}
          </span>

          <button
            className={styles.pageButton}
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + PAGE_STEP)}
          >
            Next
          </button>
        </div>
      )}

      {lightboxPhoto && (
        <div
          className={styles.lightbox}
          onClick={closeLightbox}
        >
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxPhoto.originalUrl}
              alt={lightboxPhoto.fileName}
              className={styles.lightboxImage}
            />

            <div className={styles.lightboxControls}>
              <button
                className={styles.lightboxButton}
                onClick={() => handlePrivacyChange(lightboxPhoto.id, !lightboxPhoto.isPrivate)}
                title={lightboxPhoto.isPrivate ? "Make public" : "Make private"}
              >
                {lightboxPhoto.isPrivate ? "Show" : "Hide"}
              </button>
              <button
                className={styles.lightboxButton}
                onClick={() => handlePhotoDelete(lightboxPhoto.id)}
                title="Delete"
              >
                Delete
              </button>
              <button
                className={styles.lightboxButton}
                onClick={closeLightbox}
                title="Close"
              >
                Close
              </button>
            </div>

            <div className={styles.lightboxInfo}>
              <h4 className={styles.lightboxFileName}>
                {lightboxPhoto.fileName}
              </h4>
              <div className={styles.lightboxMeta}>
                <span>
                  Size:
                  {formatFileSize(lightboxPhoto.fileSize)}
                </span>
                <span>
                  Dimensions:
                  {lightboxPhoto.width}
                  ×
                  {lightboxPhoto.height}
                </span>
                <span>
                  Format:
                  {lightboxPhoto.format}
                </span>
                <span>
                  Status:
                  {lightboxPhoto.isPrivate ? "Private" : "Public"}
                </span>
              </div>
            </div>
          </div>

          {lightboxIndex > FIRST_INDEX && (
            <button
              className={`${styles.lightboxNav} ${styles.prev}`}
              onClick={handlePrevPhoto}
            >
              Prev
            </button>
          )}

          {lightboxIndex < photos.length - PAGE_STEP && (
            <button
              className={`${styles.lightboxNav} ${styles.next}`}
              onClick={handleNextPhoto}
            >
              Next
            </button>
          )}
        </div>
      )}
    </div>
  );
};
