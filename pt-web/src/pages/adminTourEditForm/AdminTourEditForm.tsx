import {useEffect, useRef, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Button} from "src/components/Button/Button";
import {fetchData} from "src/services/httpHelper";
import {DifficultyLevel, TourData, TourDataFromApi} from "src/types/tour";
import styles from "src/pages/adminTourEditForm/AdminTourEditForm.module.scss";

export const AdminTourEdit = () => {
  const {id} = useParams<{ id: string }>();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<TourData>({
    title: "",
    description: "",
    region: "",
    difficulty: DifficultyLevel.BEGINNER,
    price: "",
    program: "",
    dates: "",
    photos: [],
    videos: [],
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const REMOVE_COUNT = 1;

  useEffect(() => {
    if (!id) {
      return;
    }
    const fetchTour = async () => {
      try {
        const data = await fetchData<TourDataFromApi>(`/tours/${id}`);

        const normalizedDates = Array.isArray(data.dates)
          ? data.dates.map((d: string | { date?: string }) =>
            typeof d === "string" ? d : d.date?.split("T")[0] || "",
          ).join(", ")
          : data.dates || "";

        const normalizedProgram = typeof data.program === "string"
          ? data.program
          : "text" in data.program
            ? data.program.text
            : "";

        setFormData({
          title: data.title || "",
          description: data.description || "",
          region: data.region || "",
          difficulty: data.difficulty || "BEGINNER",
          price: data.price || "",
          program: normalizedProgram,
          dates: normalizedDates,
          photos: [],
          videos: [],
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch tour");
      } finally {
        setLoading(false);
      }
    };

    fetchTour();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "price"
        ? (value === "" ? "" : Number(value))
        : value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const files = Array.from(e.target.files);
    const {name} = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: [...prev[name as "photos" | "videos"], ...files],
    }));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);

    setFormData(prev => ({
      ...prev,
      photos: [...prev.photos, ...files.filter(f => f.type.startsWith("image/"))],
      videos: [...prev.videos, ...files.filter(f => f.type.startsWith("video/"))],
    }));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {

      await fetchData(`/tours/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          region: formData.region,
          difficulty: formData.difficulty,
          price: Number(formData.price),
          program: {text: formData.program},
        }),
      });

      const dates = formData.dates.split(",").map(d => d.trim()).filter(Boolean);
      if (dates.length) {
        await fetchData(`/tours/${id}/dates`, {
          method: "PATCH",
          body: JSON.stringify({dates}),
        });
      }

      await Promise.all(
        formData.photos.map(file => {
          const form = new FormData();
          form.append("file", file);

          return fetch(`${import.meta.env.VITE_API_BASE_URL}/tours/${id}/photos`, {
            method: "PATCH",
            body: form,
          });
        }),
      );

      await Promise.all(
        formData.videos.map(file => {
          const form = new FormData();
          form.append("file", file);

          return fetch(`${import.meta.env.VITE_API_BASE_URL}/tours/${id}/videos`, {
            method: "PATCH",
            body: form,
          });
        }),
      );

      navigate("/admin");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save tour data");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <p>
        Loading...
      </p>
    );
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <h2>
        Edit tour #
        {id}
      </h2>

      <label className={styles.label}>
        Title
      </label>
      <input
        className={styles.inputSelectText}
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <label className={styles.label}>
        Description
      </label>
      <textarea
        className={styles.inputSelectText}
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <label className={styles.label}>
        Region
      </label>
      <input
        className={styles.inputSelectText}
        name="region"
        value={formData.region}
        onChange={handleChange}
        required
      />

      <label className={styles.label}>
        Difficulty
      </label>
      <select
        className={styles.inputSelectText}
        name="difficulty"
        value={formData.difficulty}
        onChange={handleChange}
      >
        <option value="BEGINNER">
          Beginner
        </option>
        <option value="EXPERIENCED">
          Experienced
        </option>
        <option value="PRO">
          Pro
        </option>
      </select>

      <label className={styles.label}>
        Price
      </label>
      <input
        className={styles.inputSelectText}
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        required
        min={0}
        step={0.01}
      />

      <label className={styles.label}>
        Program
      </label>
      <textarea
        className={styles.inputSelectText}
        name="program"
        value={formData.program}
        onChange={handleChange}
        rows={6}
      />

      <label className={styles.label}>
        Dates (comma-separated, e.g. "2025-10-01, 2025-10-15")
      </label>
      <input
        className={styles.inputSelectText}
        name="dates"
        value={formData.dates}
        onChange={handleChange}
      />

      <label className={styles.label}>
        Photos
      </label>
      <div
        className={styles.dropZone}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => fileInputRef.current?.click()}
      >
        <p className={styles.dropZoneText}>
          Drag & drop images here, or click to select
        </p>
        <input
          type="file"
          ref={fileInputRef}
          name="photos"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className={styles.hiddenFileInput}
        />
      </div>
      <div className={styles.fileUploadPreview}>
        {formData.photos.map((file, index) => (
          <div
            key={index}
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
              onClick={() => {
                setFormData(prev => {
                  const newPhotos = [...prev.photos];
                  newPhotos.splice(index, REMOVE_COUNT);

                  return {...prev, photos: newPhotos};
                });
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <label className={styles.label}>
        Videos
      </label>
      <div
        className={styles.dropZone}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => fileInputRef.current?.click()}
      >
        <p className={styles.dropZoneText}>
          Drag & drop videos here, or click to select
        </p>
        <input
          type="file"
          name="videos"
          accept="video/*"
          multiple
          onChange={handleFileChange}
          className={styles.hiddenFileInput}
        />
      </div>
      <div className={styles.fileList}>
        {formData.videos.map((file, index) => (
          <div
            key={index}
            className={styles.fileListItem}
          >
            {file.name}
            <button
              type="button"
              className={styles.fileListItemRemove}
              onClick={() => {
                setFormData(prev => {
                  const newVideos = [...prev.videos];
                  newVideos.splice(index);

                  return {...prev, videos: newVideos};
                });
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {error && <p className={styles.error}>
        {error}
      </p>}

      <div className={styles.buttonContainer}>
        <Button
          className={styles.btn}
          type="submit"
          disabled={submitting}
        >
          {submitting ? "Saving..." : "Save Changes"}
        </Button>
        <Button
          className={styles.btn}
          type="button"
          onClick={() => navigate("/admin")}
          disabled={submitting}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};
