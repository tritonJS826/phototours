import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Button} from "src/components/Button/Button";
import styles from "src/components/AdminTourContinueForm/AdminTourContinueForm.module.scss";

export const AdminTourContinueForm = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    tags: "",
    dates: "",
    photos: [] as File[],
    videos: [] as File[],
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const REMOVE_COUNT = 1;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, files} = e.target;
    if (!files) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: [...prev[name as "photos" | "videos"], ...Array.from(files)],
    }));
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  };

  const handleRemovePhoto = (index: number) => {
    setFormData((prev) => {
      const updated = [...prev.photos];
      updated.splice(index, REMOVE_COUNT);

      return {...prev, photos: updated};
    });
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    setFormData((prev) => ({
      ...prev,
      photos: [...prev.photos, ...files.filter(file => file.type.startsWith("image/"))],
      videos: [...prev.videos, ...files.filter(file => file.type.startsWith("video/"))],
    }));
  };
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const tags = formData.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
      const dates = formData.dates
        .split(",")
        .map((d) => d.trim())
        .filter(Boolean);

      if (tags.length) {
        await fetch(`${import.meta.env.VITE_API_BASE_URL}/tours/${id}/tags`, {
          method: "PATCH",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({tags}),
        });
      }

      if (dates.length) {
        await fetch(`${import.meta.env.VITE_API_BASE_URL}/tours/${id}/dates`, {
          method: "PATCH",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({dates}),
        });
      }

      if (formData.photos.length) {
        await Promise.all(
          formData.photos.map((file) => {
            const form = new FormData();
            form.append("file", file);

            return fetch(
              `${import.meta.env.VITE_API_BASE_URL}/tours/${id}/photos`,
              {method: "PATCH", body: form},
            );
          }),
        );
      }

      if (formData.videos.length) {
        await Promise.all(
          formData.videos.map((file) => {
            const form = new FormData();
            form.append("file", file);

            return fetch(
              `${import.meta.env.VITE_API_BASE_URL}/tours/${id}/videos`,
              {method: "PATCH", body: form},
            );
          }),
        );
      }

      navigate("/admin");
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message || "Failed to continue tour" : "Failed to continue tour",
      );
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
          value={formData.tags}
          onChange={handleTextChange}
          placeholder="e.g. adventure, hiking, family"
        />
      </label>

      <label className={styles.formLabel}>
        Dates (comma separated):
        <input
          className={styles.formInput}
          name="dates"
          value={formData.dates}
          onChange={handleTextChange}
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
            onChange={handleFileChange}
          />
          <span>
            Drag & Drop photos or click to select
          </span>
        </label>

        <div className={styles.fileUploadPreview}>
          {formData.photos.map((file, i) => (
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
          {formData.videos.length > 0 && (
            <ul className={styles.fileUploadAreaFileList}>
              {formData.videos.map((file, idx) => (
                <li key={idx}>
                  {file.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <input
          className={styles.fileUploadInput}
          name="videos"
          type="file"
          multiple
          accept="video/*"
          onChange={handleFileChange}
        />
      </label>

      {error && <p className={styles.formError}>
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
