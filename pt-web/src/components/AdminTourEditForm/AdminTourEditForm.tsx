import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Button} from "src/components/Button/Button";
import styles from "src/components/AdminTourEditForm/AdminTourEditForm.module.scss";

type DifficultyLevel = "BEGINNER" | "EXPERIENCED" | "PRO";

export enum MaterialType {
  PDF = "PDF",
  VIDEO = "VIDEO",
  ROUTE = "ROUTE",
  TIPS = "TIPS",
}

interface TourMaterial {
  id?: number;
  title: string;
  url: string;
  type: MaterialType;
}

interface TourData {
  title: string;
  description: string;
  region: string;
  difficulty: DifficultyLevel;
  price: number | "";
  program: string;
  guideId: number | "";
  tags: string;
  dates: string;
  materials: TourMaterial[];
  photos: File[];
  videos: File[];
}

export const AdminTourEdit = () => {
  const {id} = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<TourData>({
    title: "",
    description: "",
    region: "",
    difficulty: "BEGINNER",
    price: "",
    program: "",
    guideId: "",
    tags: "",
    dates: "",
    materials: [],
    photos: [],
    videos: [],
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }

    const fetchTour = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/tours/${id}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch tour with id ${id}`);
        }

        const data = await res.json();

        setFormData({
          title: data.title || "",
          description: data.description || "",
          region: data.region || "",
          difficulty: data.difficulty || "BEGINNER",
          price: data.price || "",
          program: data.program?.text || "",
          guideId: data.guideId || "",
          tags: Array.isArray(data.tags)
            ? data.tags.map((t: { name?: string } | string) => typeof t === "string" ? t : t.name || "").join(", ")
            : "",
          dates: Array.isArray(data.dates)
            ? data.dates.map((d: { date?: string }) =>
              typeof d === "string" ? d : d.date?.split("T")[0],
            ).join(", ")
            : "",
          materials: Array.isArray(data.materials) ? data.materials : [],
          photos: [],
          videos: [],
        });
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : `Failed to load tour with id ${id}`);
      } finally {
        setLoading(false);
      }
    };

    fetchTour();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "price" || name === "guideId" ? (value === "" ? "" : Number(value)) : value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, files} = e.target;
    if (!files) {
      return;
    }
    setFormData(prev => ({
      ...prev,
      [name]: [...(prev[name as "photos" | "videos"]), ...Array.from(files)],
    }));
  };

  const handleMaterialChange = (index: number, field: keyof TourMaterial, value: string) => {
    const newMaterials = [...formData.materials];
    newMaterials[index] = {...newMaterials[index], [field]: value};
    setFormData(prev => ({...prev, materials: newMaterials}));
  };

  const addMaterial = () => {
    setFormData(prev => ({
      ...prev,
      materials: [...prev.materials, {title: "", url: "", type: MaterialType.PDF}],
    }));
  };

  const removeMaterial = (index: number) => {
    setFormData(prev => ({
      ...prev,
      materials: prev.materials.filter((_, i) => i !== index),
    }));
  };

  const handleMaterialFileUpload = async (file: File, index: number) => {
    const materialFormData = new FormData();
    materialFormData.append("file", file);
    materialFormData.append("title", formData.materials[index].title);
    materialFormData.append("type", formData.materials[index].type);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/tours/${id}/materials`, {
        method: "PATCH",
        body: materialFormData,
      });

      if (!res.ok) {
        throw new Error("Upload failed");
      }

      const result = await res.json();
      const updated = [...formData.materials];
      updated[index].url = result.url;
      setFormData(prev => ({...prev, materials: updated}));
    } catch {
      setError("Failed to upload material");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      // Update main tour info
      const resUpdate = await fetch(`${import.meta.env.VITE_API_URL}/tours/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          region: formData.region,
          difficulty: formData.difficulty,
          price: Number(formData.price),
          program: {text: formData.program},
          guideId: Number(formData.guideId),
        }),
      });

      if (!resUpdate.ok) {
        throw new Error("Failed to update tour");
      }

      // Tags
      const tags = formData.tags.split(",").map(t => t.trim()).filter(Boolean);
      if (tags.length) {
        await fetch(`${import.meta.env.VITE_API_URL}/tours/${id}/tags`, {
          method: "PATCH",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({tags}),
        });
      }

      // Dates
      const dates = formData.dates.split(",").map(d => d.trim()).filter(Boolean);
      if (dates.length) {
        await fetch(`${import.meta.env.VITE_API_URL}/tours/${id}/dates`, {
          method: "PATCH",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({dates}),
        });
      }

      // Photos
      await Promise.all(
        formData.photos.map(file => {
          const photoForm = new FormData();
          photoForm.append("file", file);

          return fetch(`${import.meta.env.VITE_API_URL}/tours/${id}/photos`, {
            method: "PATCH",
            body: photoForm,
          });
        }),
      );

      // Videos
      await Promise.all(
        formData.videos.map(file => {
          const videoForm = new FormData();
          videoForm.append("file", file);

          return fetch(`${import.meta.env.VITE_API_URL}/tours/${id}/videos`, {
            method: "PATCH",
            body: videoForm,
          });
        }),
      );

      navigate("/");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message || "Failed to save tour data" : "An unknown error occurred");
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
        Edit Tour #
        {id}
      </h2>

      <label>
        Title
      </label>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <label>
        Description
      </label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <label>
        Region
      </label>
      <input
        name="region"
        value={formData.region}
        onChange={handleChange}
        required
      />

      <label>
        Difficulty
      </label>
      <select
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

      <label>
        Price
      </label>
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        required
        min={0}
        step={0.01}
      />

      <label>
        Program
      </label>
      <textarea
        name="program"
        value={formData.program}
        onChange={handleChange}
        rows={6}
      />

      <label>
        Guide
      </label>
      <input
        type="number"
        name="guideId"
        value={formData.guideId}
        onChange={handleChange}
        required
      />

      <label>
        Tags (comma-separated)
      </label>
      <input
        name="tags"
        value={formData.tags}
        onChange={handleChange}
      />

      <label>
        Dates (comma-separated, e.g. "2025-10-01, 2025-10-15")
      </label>
      <input
        name="dates"
        value={formData.dates}
        onChange={handleChange}
      />

      <fieldset className={styles.materialsFieldset}>
        <legend>
          Materials
        </legend>
        {formData.materials.map((mat, idx) => (
          <div
            key={idx}
            className={styles.materialItem}
          >
            <input
              type="text"
              placeholder="Title"
              value={mat.title}
              onChange={e => handleMaterialChange(idx, "title", e.target.value)}
              required
            />
            <select
              value={mat.type}
              onChange={e => handleMaterialChange(idx, "type", e.target.value)}
              required
            >
              <option value={MaterialType.PDF}>
                PDF
              </option>
              <option value={MaterialType.VIDEO}>
                Video
              </option>
              <option value={MaterialType.ROUTE}>
                Route
              </option>
              <option value={MaterialType.TIPS}>
                Tips
              </option>
            </select>
            <input
              type="file"
              accept="*/*"
              onChange={e => {
                if (e.target.files?.[0]) {
                  handleMaterialFileUpload(e.target.files[0], idx);
                }
              }}
            />
            {mat.url && (
              <a
                href={mat.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.materialLink}
              >
                View file
              </a>
            )}
            <Button
              type="button"
              onClick={() => removeMaterial(idx)}
              className={styles.removeButton}
            >
              Remove
            </Button>
          </div>
        ))}
        <Button
          type="button"
          onClick={addMaterial}
          className={styles.addButton}
        >
          Add
        </Button>
      </fieldset>

      <label>
        Photos
      </label>
      <input
        type="file"
        name="photos"
        accept="image/*"
        multiple
        onChange={handleFileChange}
      />
      {formData.photos.length > 0 && (
        <ul>
          {formData.photos.map((file, idx) => (<li key={idx}>
            {file.name}
          </li>))}
        </ul>
      )}

      <label>
        Videos
      </label>
      <input
        type="file"
        name="videos"
        accept="video/*"
        multiple
        onChange={handleFileChange}
      />
      {formData.videos.length > 0 && (
        <ul>
          {formData.videos.map((file, idx) => (<li key={idx}>
            {file.name}
          </li>))}
        </ul>
      )}

      {error && <p className={styles.error}>
        {error}
      </p>}

      <Button
        type="submit"
        disabled={submitting}
      >
        {submitting ? "Saving..." : "Save Changes"}
      </Button>
    </form>
  );
};
