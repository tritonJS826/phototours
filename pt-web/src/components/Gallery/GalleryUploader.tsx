import {useEffect, useRef, useState} from "react";
import {GalleryImage, galleryList, galleryRemove, galleryUpload} from "src/api/gallery";
import styles from "src/components/Gallery/Gallery.module.scss";

const ZERO = 0;
const TEN = 10;
const KB = 1024;
const MB = KB * KB;
const TWO = 2;

function formatSize(bytes: number): string {
  if (bytes >= MB) {
    return `${(bytes / MB).toFixed(TWO)} MB`;
  }

  return `${Math.round(bytes / KB)} KB`;
}

export function GalleryUploader() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [items, setItems] = useState<GalleryImage[]>([]);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  async function refresh() {
    try {
      const data = await galleryList();
      setItems(data);
      setErr("");
    } catch {
      setErr("Load failed");
    }
  }

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const data = await galleryList();
        if (mounted) {
          setItems(data);
        }
      } catch {
        if (mounted) {
          setErr("Load failed");
        }
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  function openPicker() {
    inputRef.current?.click();
  }

  async function onPick(e: React.ChangeEvent<HTMLInputElement>) {
    const list = e.currentTarget.files;
    if (!list || list.length === ZERO) {
      return;
    }
    const arr = Array.from(list).slice(ZERO, TEN);
    setBusy(true);
    setErr("");
    try {
      await galleryUpload(arr);
      await refresh();
    } catch {
      setErr("Upload failed");
    } finally {
      setBusy(false);
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  }

  async function onDelete(id: number) {
    setBusy(true);
    setErr("");
    try {
      await galleryRemove(id);
      await refresh();
    } catch {
      setErr("Delete failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.actions}>
        <button
          onClick={openPicker}
          disabled={busy}
          aria-busy={busy}
          className={styles.primary}
        >
          Upload
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={onPick}
          className={styles.hidden}
        />
      </div>

      {err
        ? <div className={styles.error}>
          {err}
        </div>
        : null}

      <div className={styles.grid}>
        {items.map((it) => (
          <div
            key={it.id}
            className={styles.card}
          >
            <img
              src={it.url}
              alt={`img_${it.id}`}
            />
            <div className={styles.cardBar}>
              <span>
                {formatSize(it.bytes)}
              </span>
              <button
                onClick={() => onDelete(it.id)}
                disabled={busy}
                className={styles.danger}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
