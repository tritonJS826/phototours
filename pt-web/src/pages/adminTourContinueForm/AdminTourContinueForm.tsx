import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Button} from "src/components/Button/Button";
import styles from "src/pages/adminTourContinueForm/AdminTourContinueForm.module.scss";

const ZERO = 0;
const ONE = 1;

export const AdminTourContinueForm = () => {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  const [tags, setTags] = useState("");
  const [dates, setDates] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);
  const [videos, setVideos] = useState<File[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePhotoInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      return;
    }
    setPhotos(prev => [...prev, ...Array.from(files)]);
  };
  const handleVideoInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      return;
    }
    setVideos(prev => [...prev, ...Array.from(files)]);
  };
  const handleRemovePhoto = (index: number) => {
    setPhotos(prev => {
      const updated = [...prev];
      updated.splice(index, ONE);

      return updated;
    });
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    const images = files.filter(f => f.type.startsWith("image/"));
    const vids = files.filter(f => f.type.startsWith("video/"));
    setPhotos(prev => [...prev, ...images]);
    setVideos(prev => [...prev, ...vids]);
  };
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const tagsList = tags.split(",").map(t => t.trim()).filter(t => t.length > ZERO);
      const datesList = dates.split(",").map(d => d.trim()).filter(d => d.length > ZERO);

      if (id && tagsList.length > ZERO) {
        await fetch(`${import.meta.env.VITE_API_BASE_URL}/tours/${id}/tags`, {
          method: "PATCH",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({tags: tagsList}),
        });
      }
      if (id && datesList.length > ZERO) {
        await fetch(`${import.meta.env.VITE_API_BASE_URL}/tours/${id}/dates`, {
          method: "PATCH",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({dates: datesList}),
        });
      }
      if (id && photos.length > ZERO) {
        const uploads = photos.map(file => {
          const form = new FormData();
          form.append("file", file);

          return fetch(`${import.meta.env.VITE_API_BASE_URL}/tours/${id}/photos`,
            {method: "PATCH", body: form});
        });
        await Promise.all(uploads);
      }
      if (id && videos.length > ZERO) {
        const uploads = videos.map(file => {
          const form = new FormData();
          form.append("file", file);

          return fetch(`${import.meta.env.VITE_API_BASE_URL}/tours/${id}/videos`,
            {method: "PATCH", body: form});
        });
        await Promise.all(uploads);
      }

      navigate("/admin");
    } catch {
      setError("Failed to continue tour");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <h2 className={styles.formTitle}>
        More Tour Details
      </h2>

      <label className={styles.formLabel}>
        Tags (comma separated):
        <input
          className={styles.formInput}
          name="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="e.g. adventure, hiking, family"
        />
      </label>

      <label className={styles.formLabel}>
        Dates (comma separated):
        <input
          className={styles.formInput}
          name="dates"
          value={dates}
          onChange={(e) => setDates(e.target.value)}
          placeholder="e.g. 2025-10-01, 2025-10-15"
        />
      </label>

      <div className={styles.fileUpload}>
        <label
          className={styles.fileUploadDropzone}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <input
            className={styles.fileUploadInput}
            name="photos"
            type="file"
            multiple
            accept="image/*"
            onChange={handlePhotoInput}
          />
          <span>
            Drag & Drop photos or click to select
          </span>
        </label>

        <div className={styles.fileUploadPreview}>
          {photos.map((file, i) => (
            <div
              key={i}
              className={styles.fileUploadItem}
            >
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                className={styles.fileUploadItemImage}
              />
              <button
                type="button"
                className={styles.fileUploadItemRemove}
                onClick={() => handleRemovePhoto(i)}
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      </div>

      <label
        className={styles.fileUpload}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className={styles.fileUploadArea}>
          <p className={styles.fileUploadAreaText}>
            Drag & drop videos here, or click to select
          </p>
          {videos.length > ZERO && (
            <ul className={styles.fileUploadAreaFileList}>
              {videos.map((file, idx) => (<li key={idx}>
                {file.name}
              </li>))}
            </ul>
          )}
        </div>
        <input
          className={styles.fileUploadInput}
          name="videos"
          type="file"
          multiple
          accept="video/*"
          onChange={handleVideoInput}
        />
      </label>

      {error.length > ZERO && <p className={styles.formError}>
        {error}
      </p>}

      <div className={styles.formActions}>
        <Button
          className={`${styles.button} ${styles.buttonSubmit}`}
          type="submit"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save and Continue"}
        </Button>
        <Button
          className={`${styles.button} ${styles.buttonCancel}`}
          type="button"
          onClick={() => navigate("/")}
          disabled={loading}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};
