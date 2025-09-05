export interface Photo {
  id: string;
  publicId: string;
  originalUrl: string;
  thumbnailUrl: string;
  fileName: string;
  fileSize: number;
  width: number;
  height: number;
  format: string;
  isPrivate: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export type PhotoFilter = "all" | "private" | "public";

export interface PhotoListResponse {
  photos: Photo[];
  total: number;
  page: number;
  limit: number;
  pages: number;
}

export interface PhotoUploadResponse {
  success: boolean;
  photos: Photo[];
}

export interface PhotoDeleteResponse {
  success: boolean;
  message: string;
  deletedPhotoId: string;
}

export interface UploadSignatureResponse {
  signature: string;
  timestamp: number;
  folder: string;
}

export interface PhotoBulkAction {
  action: "delete" | "download" | "move";
  photoIds: string[];
}

export interface PhotoUploadProgress {
  file: File;
  progress: number;
  status: "pending" | "uploading" | "completed" | "error";
  result?: {
    public_id: string;
    secure_url: string;
    width: number;
    height: number;
    format: string;
    bytes: number;
  };
  error?: string;
}
