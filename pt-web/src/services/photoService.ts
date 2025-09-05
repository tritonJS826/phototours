import axios from "axios";
import {
  Photo,
  PhotoBulkAction,
  PhotoDeleteResponse,
  PhotoFilter,
  PhotoListResponse,
  PhotoUploadResponse,
  UploadSignatureResponse,
} from "src/types/photo";

const FIRST_PAGE = 1;
const DEFAULT_PAGE_SIZE = 20;
const HEADER_CT = "Content-Type";
const CT_JSON = "application/json";
const HEADER_AUTH = "Authorization";
const TOKEN_KEY = "token";
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

type UploadedPhotoMeta = {
  publicId: string;
  originalUrl: string;
  thumbnailUrl: string;
  fileName: string;
  fileSize: number;
  width: number;
  height: number;
  format: string;
  isPrivate: boolean;
};

function authHeaders() {
  const token = localStorage.getItem(TOKEN_KEY) || "";

  return {
    [HEADER_CT]: CT_JSON,
    [HEADER_AUTH]: `Bearer ${token}`,
  };
}

class PhotoService {

  public async getUploadSignature(isPrivate = false): Promise<UploadSignatureResponse> {
    const r = await axios.post(
      `${API_BASE_URL}/photos/upload-signature`,
      {isPrivate},
      {headers: authHeaders()},
    );

    return r.data as UploadSignatureResponse;
  }

  public async uploadPhotos(photos: UploadedPhotoMeta[]): Promise<PhotoUploadResponse> {
    const r = await axios.post(
      `${API_BASE_URL}/photos/upload`,
      {photos},
      {headers: authHeaders()},
    );

    return r.data as PhotoUploadResponse;
  }

  public async getUserPhotos(
    userId: number,
    options: { page?: number; limit?: number; filter?: PhotoFilter; search?: string } = {},
  ): Promise<PhotoListResponse> {
    const {page = FIRST_PAGE, limit = DEFAULT_PAGE_SIZE, filter = "all", search = ""} = options;
    const params = new URLSearchParams({
      page: String(page),
      limit: String(limit),
      ...(filter !== "all" ? {isPrivate: (filter === "private").toString()} : {}),
      ...(search ? {search} : {}),
    });
    const r = await axios.get(
      `${API_BASE_URL}/photos/user/${userId}?${params.toString()}`,
      {headers: authHeaders()},
    );

    return r.data as PhotoListResponse;
  }

  public async downloadPhoto(photoId: string): Promise<{ downloadUrl: string }> {
    const r = await axios.get(`${API_BASE_URL}/photos/${photoId}/download`, {headers: authHeaders()});

    return r.data as { downloadUrl: string };
  }

  public async updatePhotoPrivacy(photoId: string, isPrivate: boolean): Promise<Photo> {
    const r = await axios.patch(
      `${API_BASE_URL}/photos/${photoId}/privacy`,
      {isPrivate},
      {headers: authHeaders()},
    );

    return (r.data as { photo: Photo }).photo;
  }

  public async deletePhoto(photoId: string): Promise<PhotoDeleteResponse> {
    const r = await axios.delete(`${API_BASE_URL}/photos/${photoId}`, {headers: authHeaders()});

    return r.data as PhotoDeleteResponse;
  }

  public async bulkAction(payload: PhotoBulkAction): Promise<{ success: boolean; message: string }> {
    const r = await axios.post(`${API_BASE_URL}/photos/bulk-action`, payload, {headers: authHeaders()});

    return r.data as { success: boolean; message: string };
  }

}

export const photoService = new PhotoService();
