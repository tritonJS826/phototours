import React, {useEffect, useMemo, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {Button} from "src/components/Button/Button";
import {buildPath, PATHS} from "src/routes/routes";
import {
  confirmUpload,
  deleteMyImage,
  downloadUrl,
  getPublicGallery,
  previewUrl,
  uploadToCloudinary,
} from "src/services/galleryService";
import styles from "src/pages/adminUserGallery/AdminUserGallery.module.scss";

type RowIn = {
  id: number | string;
  publicId: string;
  url: string;
  createdAt: string | number | Date;
  bytes?: number | null;
  width?: number | null;
  height?: number | null;
  format?: string | null;
};

type Img = {
  id: string;
  publicId: string;
  url: string;
  createdAt: string;
  bytes?: number;
  width?: number;
  height?: number;
  format?: string;
};

const ZERO = 0;
const ONE = 1;
const THUMB_W = 1200;
const TOAST_MS = 1000;

export function AdminUserGallery() {
  const navigate = useNavigate();
  const params = useParams<{id: string}>();
  const userId = params.id ? Number.parseInt(params.id, 10) : NaN;

  const [items, setItems] = useState<Img[]>([]);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string>("");
  const [info, setInfo] = useState<string>("");

  const sorted = useMemo(
    () =>
      [...items].sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      ),
    [items],
  );

  useEffect(() => {
    const load = async () => {
      if (!Number.isFinite(userId)) {
        setErr("Invalid user id");

        return;
      }
      try {
        setErr("");
        const rows = (await getPublicGallery(userId)) as RowIn[];
        const next: Img[] = rows.map((r) => ({
          id: String(r.id),
          publicId: r.publicId,
          url: r.url,
          createdAt:
            typeof r.createdAt === "string"
              ? r.createdAt
              : typeof r.createdAt === "number"
                ? new Date(r.createdAt).toISOString()
                : new Date(r.createdAt).toISOString(),
          bytes: r.bytes ?? undefined,
          width: r.width ?? undefined,
          height: r.height ?? undefined,
          format: r.format ?? undefined,
        }));
        setItems(next);
      } catch (e) {
        const msg = e instanceof Error ? e.message : "Failed to load gallery";
        setErr(msg);
      }
    };
    load();
  }, [userId]);

  const showInfo = (m: string) => {
    setInfo(m);
    window.setTimeout(() => setInfo(""), TOAST_MS);
  };

  const onFiles = async (files: FileList | File[]) => {
    if (!files || busy || !Number.isFinite(userId)) {
      return;
    }
    setBusy(true);
    setErr("");
    try {
      const list = Array.from(files);
      for (let i = ZERO; i < list.length; i += ONE) {
        const file = list[i];
        const up = await uploadToCloudinary({file, userId});
        const saved = await confirmUpload({
          publicId: up.public_id,
          bytes: up.bytes,
          width: up.width,
          height: up.height,
          format: up.format,
          userId,
          secureUrl: up.secure_url,
        });

        const normalized: Img = {
          id: String((saved as {id?: number | string}).id ?? up.public_id),
          publicId: (saved as {publicId?: string}).publicId ?? up.public_id,
          url: (saved as {url?: string}).url ?? up.secure_url,
          createdAt:
            (saved as {createdAt?: string}).createdAt ??
            new Date().toISOString(),
          bytes: (saved as {bytes?: number}).bytes ?? up.bytes,
          width: (saved as {width?: number}).width ?? up.width,
          height: (saved as {height?: number}).height ?? up.height,
          format: (saved as {format?: string}).format ?? up.format,
        };

        setItems(prev => [normalized, ...prev]);
      }
      showInfo("Uploaded");
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Upload failed";
      setErr(msg);
    } finally {
      setBusy(false);
    }
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    onFiles(e.dataTransfer.files);
  };

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onFiles(e.target.files);
    }
  };

  const onDelete = async (img: Img) => {
    if (!Number.isFinite(userId)) {
      return;
    }
    try {
      await deleteMyImage(img.publicId, userId);
      setItems(prev => prev.filter(x => x.id !== img.id));
      showInfo("Deleted");
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Delete failed";
      setErr(msg);
    }
  };

  if (!Number.isFinite(userId)) {
    return (
      <div className={styles.wrap}>
        <div className={styles.bar}>
          <Button
            variant="outline"
            onClick={() => navigate(PATHS.ADMIN)}
          >
            ← Back
          </Button>
        </div>
        <div className={styles.state}>
          Invalid user id
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.bar}>
        <Button
          variant="outline"
          onClick={() => navigate(PATHS.ADMIN)}
        >
          ← Back
        </Button>
        <div className={styles.title}>
          User #
          {userId}
          {" "}
          — Gallery
        </div>
        <div className={styles.actions}>
          <label className={styles.uploader}>
            <input
              type="file"
              multiple
              accept="image/*,.dng,.cr2,.nef,.raf,.arw,.rw2,.orf"
              onChange={onInput}
              disabled={busy}
            />
            <span>
              {busy ? "Uploading..." : "Upload"}
            </span>
          </label>
          <Link
            className={styles.link}
            to={buildPath.adminUsers()}
          >
            Users list
          </Link>
        </div>
      </div>

      <div
        className={styles.drop}
        onDrop={onDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        Drag & drop images here
      </div>

      {err
        ? <div className={styles.error}>
          {err}
        </div>
        : null}
      {info
        ? <div className={styles.info}>
          {info}
        </div>
        : null}

      {sorted.length === ZERO
        ? (
          <div className={styles.state}>
            No photos yet
          </div>
        )
        : (
          <div className={styles.grid}>
            {sorted.map((img) => (
              <figure
                key={img.id}
                className={styles.card}
              >
                <a
                  href={img.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={previewUrl(img.url, THUMB_W)}
                    alt={img.publicId}
                    className={styles.thumb}
                    loading="lazy"
                  />
                </a>
                <figcaption className={styles.tools}>
                  <a
                    className={styles.btn}
                    href={downloadUrl(img.url)}
                  >
                    Download
                  </a>
                  <button
                    className={styles.btn}
                    onClick={() => onDelete(img)}
                  >
                    Delete
                  </button>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
    </div>
  );
}
