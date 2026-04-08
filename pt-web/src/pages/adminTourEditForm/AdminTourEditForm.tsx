import {useEffect, useRef, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Button} from "src/components/Button/Button";
import {getTourById, addTourPhoto, addTourVideo, updateTour} from "src/services/toursService";
import {DifficultyLevel, TourData, TourView} from "src/types/tour";
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
    coverUrl: "",
    durationDays: "",
    startLocation: "",
    endLocation: "",
    minAge: 0,
    languages: [],
    availableMonths: [],
    reviewsSectionName: "",
    isShowVip: false,
    isShowRooms: false,
    vipPrice: 0,
    roomPrice: 0,
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
        const data = await getTourById(id);

        const normalizedDates = data.dates && data.dates.length > 0
          ? data.dates.map((d) => d.dateFrom).join(", ")
          : "";

        const normalizedProgram = data.dailyItinerary
          ? data.dailyItinerary.map(d => d.plan).join("\n")
          : "";

        const normalizedDifficulty = (): DifficultyLevel => {
          const d = data.difficulty;
          if (d === "EASY" || d === "BEGINNER") return DifficultyLevel.BEGINNER;
          if (d === "EXPERIENCED") return DifficultyLevel.EXPERIENCED;
          if (d === "PRO") return DifficultyLevel.PRO;
          return DifficultyLevel.BEGINNER;
        };

        setFormData({
          title: data.title || "",
          description: data.description || "",
          region: data.location || "",
          difficulty: normalizedDifficulty(),
          price: "",
          program: normalizedProgram,
          dates: normalizedDates,
          photos: [],
          videos: [],
          coverUrl: data.coverUrl || "",
          durationDays: String(data.durationDays || ""),
          startLocation: data.startLocation || "",
          endLocation: data.endLocation || "",
          minAge: data.minAge || 0,
          languages: data.languages || [],
          availableMonths: data.availableMonths || [],
          reviewsSectionName: data.reviewsSectionName || "",
          isShowVip: data.isShowVip || false,
          isShowRooms: data.isShowRooms || false,
          vipPrice: data.vipPrice || 0,
          roomPrice: data.roomPrice || 0,
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
    const {name, value, type} = e.target;
    const target = e.target as HTMLInputElement;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" 
        ? target.checked 
        : name === "price" || name === "minAge" || name === "vipPrice" || name === "roomPrice"
          ? (value === "" ? 0 : Number(value))
          : value,
    }));
  };

  const handleLanguagesChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      languages: value ? value.split(",").map(s => s.trim()).filter(Boolean) : [],
    }));
  };

  const handleMonthsChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      availableMonths: value ? value.split(",").map(s => s.trim()).filter(Boolean) : [],
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
      await updateTour(id!, {
        title: formData.title,
        description: formData.description,
        startLocation: formData.startLocation,
        endLocation: formData.endLocation,
        difficulty: formData.difficulty,
        coverUrl: formData.coverUrl,
        durationDays: formData.durationDays,
        minAge: formData.minAge,
        languages: formData.languages,
        availableMonths: formData.availableMonths,
        reviewsSectionName: formData.reviewsSectionName,
        isShowVip: formData.isShowVip,
        isShowRooms: formData.isShowRooms,
        vipPrice: formData.vipPrice,
        roomPrice: formData.roomPrice,
        program: {text: formData.program},
      });

      await Promise.all(
        formData.photos.map(file => addTourPhoto(id!, file)),
      );

      await Promise.all(
        formData.videos.map(file => addTourVideo(id!, file)),
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
        Cover URL
      </label>
      <input
        className={styles.inputSelectText}
        name="coverUrl"
        value={formData.coverUrl || ""}
        onChange={handleChange}
      />

      <label className={styles.label}>
        Duration (days)
      </label>
      <input
        className={styles.inputSelectText}
        name="durationDays"
        value={formData.durationDays || ""}
        onChange={handleChange}
      />

      <label className={styles.label}>
        Start Location
      </label>
      <input
        className={styles.inputSelectText}
        name="startLocation"
        value={formData.startLocation || ""}
        onChange={handleChange}
      />

      <label className={styles.label}>
        End Location
      </label>
      <input
        className={styles.inputSelectText}
        name="endLocation"
        value={formData.endLocation || ""}
        onChange={handleChange}
      />

      <label className={styles.label}>
        Min Age
      </label>
      <input
        className={styles.inputSelectText}
        type="number"
        name="minAge"
        value={formData.minAge || ""}
        onChange={handleChange}
        min={0}
      />

      <label className={styles.label}>
        Languages (comma-separated)
      </label>
      <input
        className={styles.inputSelectText}
        name="languages"
        value={formData.languages.join(", ")}
        onChange={e => handleLanguagesChange(e.target.value)}
      />

      <label className={styles.label}>
        Available Months (comma-separated)
      </label>
      <input
        className={styles.inputSelectText}
        name="availableMonths"
        value={formData.availableMonths.join(", ")}
        onChange={e => handleMonthsChange(e.target.value)}
      />

      <label className={styles.label}>
        Reviews Section Name
      </label>
      <input
        className={styles.inputSelectText}
        name="reviewsSectionName"
        value={formData.reviewsSectionName || ""}
        onChange={handleChange}
      />

      <label className={styles.label}>
        Show VIP
      </label>
      <input
        type="checkbox"
        name="isShowVip"
        checked={formData.isShowVip || false}
        onChange={e => {
          setFormData(prev => ({...prev, isShowVip: e.target.checked}));
        }}
      />

      <label className={styles.label}>
        VIP Price
      </label>
      <input
        className={styles.inputSelectText}
        type="number"
        name="vipPrice"
        value={formData.vipPrice || ""}
        onChange={handleChange}
        min={0}
      />

      <label className={styles.label}>
        Show Rooms
      </label>
      <input
        type="checkbox"
        name="isShowRooms"
        checked={formData.isShowRooms || false}
        onChange={e => {
          setFormData(prev => ({...prev, isShowRooms: e.target.checked}));
        }}
      />

      <label className={styles.label}>
        Room Price
      </label>
      <input
        className={styles.inputSelectText}
        type="number"
        name="roomPrice"
        value={formData.roomPrice || ""}
        onChange={handleChange}
        min={0}
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
