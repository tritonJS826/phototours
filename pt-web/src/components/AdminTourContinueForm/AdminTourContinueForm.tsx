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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, files} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: Array.from(files ?? []),
    }));
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const tags = formData.tags
        .split(",")
        .map(tag => tag.trim())
        .filter(Boolean);

      if (tags.length) {
        await fetch(`${import.meta.env.VITE_API_BASE_URL}/tours/${id}/tags`, {
          method: "PATCH",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({tags}),
        });
      }

      // Dates
      const dates = formData.dates
        .split(",")
        .map(date => date.trim())
        .filter(Boolean)
        .map(date => ({date}));

      if (dates.length) {
        await fetch(`${import.meta.env.VITE_API_BASE_URL}/tours/${id}/dates`, {
          method: "PATCH",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({dates}),
        });
      }

      // Photos
      if (formData.photos.length) {
        await Promise.all(formData.photos.map(file => {
          const form = new FormData();
          form.append("file", file);

          return fetch(`${import.meta.env.VITE_API_BASE_URL}/tours/${id}/photos`, {
            method: "PATCH",
            body: form,
          });
        }));
      }

      // Videos
      if (formData.videos.length) {
        await Promise.all(formData.videos.map(file => {
          const form = new FormData();
          form.append("file", file);

          return fetch(`${import.meta.env.VITE_API_BASE_URL}/tours/${id}/videos`, {
            method: "PATCH",
            body: form,
          });
        }));
      }

      navigate("/");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message || "Failed to continue tour" : "Failed to continue tour");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <h2>
        More Tour Details
      </h2>

      <label>
        Tags (comma separated):
        <input
          name="tags"
          value={formData.tags}
          onChange={handleTextChange}
          placeholder="e.g. adventure, hiking, family"
        />
      </label>

      <label>
        Dates (comma separated, e.g. "2025-10-01, 2025-10-15"):
        <input
          name="dates"
          value={formData.dates}
          onChange={handleTextChange}
          placeholder="e.g. 2025-10-01, 2025-10-15"
        />
      </label>

      <label>
        Photo:
        <input
          name="photo"
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileChange}
        />
      </label>

      <label>
        Video:
        <input
          name="video"
          type="file"
          multiple
          accept="video/*"
          onChange={handleFileChange}
        />
      </label>

      {error && <p className={styles.error}>
        {error}
      </p>}

      <div className={styles.actions}>
        <Button
          type="submit"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save and Continue"}
        </Button>
        <Button
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
