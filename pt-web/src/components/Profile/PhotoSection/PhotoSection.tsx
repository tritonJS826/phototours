import React, {useCallback, useEffect, useState} from "react";
import {ImageGallery} from "src/components/ImageGallery/ImageGallery";
import {ImageUploader} from "src/components/ImageUploader/ImageUploader";
import {useAuth} from "src/hooks/useAuth";
import {photoService} from "src/services/photoService";
import {Photo, PhotoFilter} from "src/types/photo";
import styles from "src/components/Profile/PhotoSection/PhotoSection.module.scss";

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 20;
const ZERO = 0;

type RespWithTotal = { photos: Photo[]; total?: number };
type RespWithPagination = { photos: Photo[]; pagination?: { total?: number; pages?: number } };

export const PhotoSection: React.FC = () => {
  const {user} = useAuth();

  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<PhotoFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPhotos, setSelectedPhotos] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
  const [totalPages, setTotalPages] = useState(DEFAULT_PAGE);
  const [showUploader, setShowUploader] = useState(false);

  const loadUserPhotos = useCallback(async () => {
    if (!user) {
      return;
    }
    setLoading(true);
    try {
      const response = await photoService.getUserPhotos(user.id, {
        page: currentPage,
        limit: DEFAULT_LIMIT,
        filter,
        search: searchQuery,
      });
      const r = response as unknown as RespWithTotal & RespWithPagination;
      const pagesFromResp =
        typeof r.pagination?.pages === "number" && r.pagination.pages > ZERO
          ? r.pagination.pages
          : typeof r.pagination?.total === "number"
            ? Math.ceil(r.pagination.total / DEFAULT_LIMIT)
            : typeof r.total === "number"
              ? Math.ceil(r.total / DEFAULT_LIMIT)
              : DEFAULT_PAGE;
      setPhotos(r.photos);
      setTotalPages(pagesFromResp);
    } finally {
      setLoading(false);
    }
  }, [user, currentPage, filter, searchQuery]);

  const handlePhotosUploaded = useCallback((newPhotos: Photo[]) => {
    setPhotos((prev) => [...newPhotos, ...prev]);
    setShowUploader(false);
  }, []);

  const handlePhotoDelete = useCallback(async (photoId: string) => {
    await photoService.deletePhoto(photoId);
    setPhotos((prev) => prev.filter((p) => p.id !== photoId));
  }, []);

  const handlePrivacyUpdate = useCallback(async (photoId: string, isPrivate: boolean) => {
    await photoService.updatePhotoPrivacy(photoId, isPrivate);
    setPhotos((prev) => prev.map((p) => (p.id === photoId ? {...p, isPrivate} : p)));
  }, []);

  const handleBulkAction = useCallback(async (action: "delete" | "download" | "move", photoIds: string[]) => {
    if (action === "delete") {
      await photoService.bulkAction({action: "delete", photoIds});
      setPhotos((prev) => prev.filter((p) => !photoIds.includes(p.id)));
      setSelectedPhotos([]);
    } else if (action === "download") {
      for (const id of photoIds) {
        await photoService.downloadPhoto(id);
      }
    } else if (action === "move") {
      return;
    }
  }, []);

  const handleFilterChange = useCallback((newFilter: PhotoFilter) => {
    setFilter(newFilter);
    setCurrentPage(DEFAULT_PAGE);
  }, []);

  const handleSearchChange = useCallback((query: string) => {
    setSearchQuery(query);
    setCurrentPage(DEFAULT_PAGE);
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  useEffect(() => {
    loadUserPhotos();
  }, [loadUserPhotos]);

  if (!user) {
    return null;
  }

  return (
    <div className={styles.photoSection}>
      <div className={styles.sectionHeader}>
        <h3>
          My photos
        </h3>
        <button
          className={styles.uploadButton}
          onClick={() => setShowUploader(!showUploader)}
          type="button"
        >
          {showUploader ? "Hide uploader" : "Upload photos"}
        </button>
      </div>

      {showUploader && (
        <div className={styles.uploaderContainer}>
          <ImageUploader
            onUploadComplete={handlePhotosUploaded}
            maxFiles={DEFAULT_LIMIT}
          />
        </div>
      )}

      <div className={styles.galleryContainer}>
        <ImageGallery
          photos={photos}
          loading={loading}
          selectedPhotos={selectedPhotos}
          onPhotoSelect={(photoId) => {
            setSelectedPhotos((prev) =>
              prev.includes(photoId) ? prev.filter((id) => id !== photoId) : [...prev, photoId],
            );
          }}
          onPhotoDelete={handlePhotoDelete}
          onPrivacyUpdate={handlePrivacyUpdate}
          onBulkAction={handleBulkAction}
          onFilterChange={handleFilterChange}
          onSearchChange={handleSearchChange}
          onPageChange={handlePageChange}
          currentPage={currentPage}
          totalPages={totalPages}
          filter={filter}
          searchQuery={searchQuery}
          showBulkActions={selectedPhotos.length > ZERO}
        />
      </div>
    </div>
  );
};
