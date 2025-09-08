import {buildApiUrl} from "src/utils/apiBase";

export type AdminGalleryItem = {
  id: string | number;
  publicId: string;
  url: string;
  createdAt: string;
  bytes?: number;
  width?: number;
  height?: number;
  format?: string;
};

export async function adminGetUserGallery(userId: number): Promise<AdminGalleryItem[]> {
  const res = await fetch(buildApiUrl(`/users/${userId}/gallery`));
  if (!res.ok) {
    throw new Error("Failed to load gallery");
  }

  return res.json();
}

export async function adminDeleteImage(userId: number, publicId: string): Promise<void> {
  const res = await fetch(buildApiUrl(`/admin/users/${userId}/gallery/${encodeURIComponent(publicId)}`), {method: "DELETE"});
  if (!res.ok) {
    const msg = await res.text().catch(() => "");
    throw new Error(msg || "Failed to delete image");
  }
}

export async function adminAttachImageToUser(userId: number, payload: {
  publicId: string;
  secureUrl: string;
  bytes?: number;
  width?: number;
  height?: number;
  format?: string;
}): Promise<AdminGalleryItem> {
  const res = await fetch(buildApiUrl(`/admin/users/${userId}/gallery`), {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const msg = await res.text().catch(() => "");
    throw new Error(msg || "Failed to attach image");
  }

  return res.json();
}
