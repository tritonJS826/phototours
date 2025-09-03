import {buildApiUrl} from "src/utils/apiBase";

export type GalleryImage = {
  id: number;
  url: string;
  bytes: number;
  width: number;
  height: number;
  format: string;
  createdAt: string;
};

const PATH = "/gallery";
const FIELD = "files";
const MAX_FILES = 10;
const ZERO = 0;
const ONE = 1;

type IdsPayload = { ids: number[] };

function authHeader(): HeadersInit {
  const token = localStorage.getItem("token") ?? "";

  return token ? {Authorization: `Bearer ${token}`} : {};
}

export async function galleryList(): Promise<GalleryImage[]> {
  const res = await fetch(buildApiUrl(PATH), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...authHeader(),
    },
  });

  if (!res.ok) {
    throw new Error("Load failed");
  }

  return res.json();
}

export async function galleryUpload(files: File[]): Promise<number[]> {
  const fd = new FormData();
  const limit = Math.min(files.length, MAX_FILES);

  for (let i = ZERO; i < limit; i += ONE) {
    fd.append(FIELD, files[i]);
  }

  const res = await fetch(buildApiUrl(PATH), {
    method: "POST",
    headers: {...authHeader()},
    body: fd,
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  const data: IdsPayload = await res.json();

  return data.ids;
}

export async function galleryRemove(id: number): Promise<void> {
  const res = await fetch(buildApiUrl(`${PATH}/${encodeURIComponent(String(id))}`), {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      ...authHeader(),
    },
  });

  if (!res.ok) {
    throw new Error("Failed");
  }
}
