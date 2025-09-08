import {fetchData} from "src/api/http";

const WIDTH_DEFAULT = 1200;
const UPLOAD_SEGMENT = "upload/";
const UPLOAD_LEN = UPLOAD_SEGMENT.length;

export type GalleryImage = {
  id: number;
  publicId: string;
  url: string;
  createdAt: string;
  bytes?: number | null;
  width?: number | null;
  height?: number | null;
  format?: string | null;
};

export type UploadSignature = {
  cloudName: string;
  apiKey: string;
  folder: string;
  timestamp: number;
  signature: string;
};

export type CloudinaryUploadResponse = {
  asset_id: string;
  public_id: string;
  secure_url: string;
  bytes: number;
  width: number;
  height: number;
  format: string;
};

function splitAtUploadSegment(src: string) {
  const i = src.indexOf(UPLOAD_SEGMENT);
  if (i < 0) {
    return {head: "", tail: src, hasUpload: false};
  }
  const head = src.slice(0, i + UPLOAD_LEN);
  const tail = src.slice(i + UPLOAD_LEN);

  return {head, tail, hasUpload: true};
}

export function previewUrl(publicIdOrUrl: string, width = WIDTH_DEFAULT): string {
  const cdn = splitAtUploadSegment(publicIdOrUrl);
  if (!cdn.hasUpload) {
    return publicIdOrUrl;
  }
  const transform = `f_auto,q_auto,w_${width}`;

  return `${cdn.head}${transform}/${cdn.tail}`;
}

export function downloadUrl(publicIdOrUrl: string): string {
  const cdn = splitAtUploadSegment(publicIdOrUrl);

  return cdn.hasUpload ? `${cdn.head}fl_attachment/${cdn.tail}` : publicIdOrUrl;
}

export async function getUploadSignature() {
  return fetchData<UploadSignature>("general/gallery/signature", {method: "GET"});
}

export async function uploadToCloudinary(args: {file: File; userId: number}) {
  const sig = await getUploadSignature();
  const form = new FormData();
  form.append("file", args.file);
  form.append("folder", sig.folder);
  form.append("api_key", sig.apiKey);
  form.append("timestamp", String(sig.timestamp));
  form.append("signature", sig.signature);
  const url = `https://api.cloudinary.com/v1_1/${sig.cloudName}/auto/upload`;
  const res = await fetch(url, {method: "POST", body: form, credentials: "omit"});
  if (!res.ok) {
    const text = await res.text();
    const fallback = "Cloudinary upload failed";
    throw new Error(text === "" ? fallback : text);
  }

  return (await res.json()) as CloudinaryUploadResponse;
}

export async function confirmUpload(payload: {
  userId: number;
  publicId: string;
  secureUrl: string;
  bytes: number;
  width: number;
  height: number;
  format: string;
}) {
  return fetchData<GalleryImage>("general/gallery/confirm", {
    method: "POST",
    headers: {"Content-Type": "application/json", "x-user-id": String(payload.userId)},
    body: JSON.stringify({
      userId: payload.userId,
      publicId: payload.publicId,
      secureUrl: payload.secureUrl,
      bytes: payload.bytes,
      width: payload.width,
      height: payload.height,
      format: payload.format,
    }),
  });
}

export async function getMyGallery(userId: number) {
  const rows = await fetchData<Array<GalleryImage>>("general/gallery/my", {
    method: "GET",
    headers: {"x-user-id": String(userId)},
  });

  return rows.map((r) => ({
    id: r.id,
    publicId: r.publicId,
    url: r.url,
    createdAt: String(r.createdAt),
    bytes: r.bytes ?? null,
    width: r.width ?? null,
    height: r.height ?? null,
    format: r.format ?? null,
  }));
}

export async function getPublicGallery(userId: number) {
  const rows = await fetchData<Array<GalleryImage>>(`general/gallery/public/${userId}`);

  return rows.map((r) => ({
    id: r.id,
    publicId: r.publicId,
    url: r.url,
    createdAt: String(r.createdAt),
    bytes: r.bytes ?? null,
    width: r.width ?? null,
    height: r.height ?? null,
    format: r.format ?? null,
  }));
}

export async function deleteMyImage(publicId: string, userId: number) {
  const url = `general/gallery/my?publicId=${encodeURIComponent(publicId)}`;

  return fetchData<{deleted: boolean}>(url, {
    method: "DELETE",
    headers: {"x-user-id": String(userId)},
  });
}
