import {useEffect, useMemo, useState} from "react";
import {
  confirmUpload,
  deleteMyImage,
  downloadUrl,
  getMyGallery,
  previewUrl,
  uploadToCloudinary,
} from "src/services/galleryService";
import styles from "src/components/UserGallery/UserGallery.module.scss";

const ZERO = 0;
const ONE = 1;
const THREE = 3;
const FOUR = 4;
const THUMB_W = 1200;
const BASE_36 = 36;
const SLICE_FROM = 2;

function rid(): string {
  return Math.random().toString(BASE_36).slice(SLICE_FROM) + Date.now().toString(BASE_36);
}

type Props = { userId: number; canManage?: boolean };

export type GalleryImage = {
  id: string;
  publicId: string;
  url: string;
  createdAt: string;
  userId?: number;
  bytes?: number;
  width?: number;
  height?: number;
  format?: string;
};

type GalleryRow = {
  id: number | string;
  publicId: string;
  url: string;
  createdAt: string | number | Date;
  bytes?: number;
  width?: number;
  height?: number;
  format?: string;
};

type UploadResp = {
  public_id: string;
  secure_url: string;
  bytes: number;
  width: number;
  height: number;
  format: string;
};

export function UserGallery({userId, canManage}: Props) {
  const [items, setItems] = useState<GalleryImage[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [activeId, setActiveId] = useState<string | null>(null);

  const sorted = useMemo(
    () => [...items].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
    [items],
  );

  useEffect(() => {
    const load = async () => {
      try {
        const rows = (await getMyGallery(userId)) as unknown as GalleryRow[];
        const next: GalleryImage[] = rows.map((r) => ({
          id: String(r.id),
          publicId: r.publicId,
          url: r.url,
          createdAt:
            typeof r.createdAt === "string"
              ? r.createdAt
              : typeof r.createdAt === "number"
                ? new Date(r.createdAt).toISOString()
                : new Date(r.createdAt).toISOString(),
          bytes: r.bytes,
          width: r.width,
          height: r.height,
          format: r.format,
          userId,
        }));
        setItems(next);
      } catch {
        setItems([]);
      }
    };
    load();
  }, [userId]);

  const onFiles = async (files: FileList | File[]) => {
    if (!files || busy) {
      return;
    }
    setBusy(true);
    setError("");
    try {
      const list = Array.from(files);
      for (let i = ZERO; i < list.length; i += ONE) {
        const file = list[i];
        const up = (await uploadToCloudinary({file, userId})) as UploadResp;
        const saved = (await confirmUpload({
          publicId: up.public_id,
          bytes: up.bytes,
          width: up.width,
          height: up.height,
          format: up.format,
          userId,
          secureUrl: up.secure_url,
        })) as unknown as GalleryRow;

        const normalized: GalleryImage = {
          id: String(saved.id ?? rid()),
          publicId: saved.publicId ?? up.public_id,
          url: saved.url ?? up.secure_url,
          createdAt:
            typeof saved.createdAt === "string"
              ? saved.createdAt
              : typeof saved.createdAt === "number"
                ? new Date(saved.createdAt).toISOString()
                : saved.createdAt instanceof Date
                  ? saved.createdAt.toISOString()
                  : new Date().toISOString(),
          bytes: saved.bytes ?? up.bytes,
          width: saved.width ?? up.width,
          height: saved.height ?? up.height,
          format: saved.format ?? up.format,
          userId,
        };
        setItems((prev) => [normalized, ...prev]);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Upload failed");
    } finally {
      setBusy(false);
    }
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    onFiles(e.dataTransfer.files);
  };

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onFiles(e.target.files);
    }
  };

  const handleDelete = async (img: GalleryImage) => {
    await deleteMyImage(img.publicId, userId);
    setItems((prev) => prev.filter((x) => x.id !== img.id));
    if (activeId === img.id) {
      setActiveId(null);
    }
  };

  return (
    <div className={styles.wrap}>
      {canManage && (
        <div
          className={`${styles.drop} ${dragOver ? styles.over : ""}`}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={onDrop}
        >
          <input
            id="ug-input"
            type="file"
            accept="image/*,.dng,.cr2,.nef,.raf,.arw,.rw2,.orf"
            multiple
            onChange={onInput}
            disabled={busy}
          />
          <label htmlFor="ug-input">
            {busy ? "Uploading..." : "Drag & drop or click to upload"}
          </label>
        </div>
      )}

      {error && <div className={styles.error}>
        {error}
      </div>}

      <div className={styles.grid}>
        {sorted.map((img) => {
          const hasDims = typeof img.width === "number" && typeof img.height === "number" && (img.width as number) > ZERO;
          const scaledH = hasDims
            ? Math.max(ONE, Math.round(((img.height as number) / Math.max(ONE, img.width as number)) * THUMB_W))
            : Math.round((THREE / FOUR) * THUMB_W);

          return (
            <figure
              key={img.id}
              className={styles.card}
              onClick={() => setActiveId((prev) => (prev === img.id ? null : img.id))}
            >
              <img
                src={previewUrl(img.url, THUMB_W)}
                alt={img.publicId}
                loading="lazy"
                width={THUMB_W}
                height={scaledH}
              />
              {canManage && activeId === img.id && (
                <figcaption className={styles.tools}>
                  <a
                    href={downloadUrl(img.url)}
                    className={styles.btn}
                    download
                  >
                    Download
                  </a>
                  <button
                    className={styles.btn}
                    onClick={() => handleDelete(img)}
                  >
                    Delete
                  </button>
                </figcaption>
              )}
            </figure>
          );
        })}
      </div>
    </div>
  );
}
