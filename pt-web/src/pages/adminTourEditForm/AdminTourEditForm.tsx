import {useEffect, useRef, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Button} from "src/components/Button/Button";
import {getAdminTour, updateTourAdmin} from "src/services/toursService";
import {DifficultyLevel, AdminTour, TourDay, FaqItem, TourActivity} from "src/types/tour";
import styles from "src/pages/adminTourEditForm/AdminTourEditForm.module.scss";

export const AdminTourEdit = () => {
  const {id} = useParams<{ id: string }>();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState<AdminTour>({
    id: "",
    slug: "",
    title: "",
    description: "",
    difficulty: DifficultyLevel.EASY,
    coverUrl: "",
    durationDays: "",
    startLocation: "",
    endLocation: "",
    location: "",
    minAge: 0,
    languages: [],
    availableMonths: [],
    program: { days: [] },
    faq: { questions: [] },
    activities: [],
    included: [],
    summary: [],
    groupSize: 10,
    spotsLeft: 1,
    subtitle: "About",
    popUp1Title: "",
    popUp1Description: "",
    popUp1ImageUrl: "",
    popUp2Title: "",
    popUp2Description: "",
    popUp2ImageUrl: "",
    ctaTitle: "",
    ctaDescription: "",
    reviewsSectionName: "",
    isShowVip: false,
    isShowRooms: false,
    vipPrice: 0,
    roomPrice: 0,
    dates: [],
    photos: [],
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
        const data = await getAdminTour(id);
        setFormData(data);
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
        : name === "minAge" || name === "vipPrice" || name === "roomPrice" || name === "groupSize" || name === "spotsLeft"
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

    setFormData(prev => ({
      ...prev,
      photos: [...prev.photos, ...files.filter(f => f.type.startsWith("image/")).map(f => ({ id: "", url: "" }))] as any,
      videos: [...(prev as any).videos, ...files.filter(f => f.type.startsWith("video/"))] as any,
    }));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);

    setFormData(prev => ({
      ...prev,
      photos: [...prev.photos, ...files.filter(f => f.type.startsWith("image/")).map(f => ({ id: "", url: "" }))] as any,
      videos: [...(prev as any).videos, ...files.filter(f => f.type.startsWith("video/"))] as any,
    }));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDayChange = (index: number, field: keyof TourDay, value: string) => {
    setFormData(prev => {
      const days = [...(prev.program?.days || [])];
      days[index] = { ...days[index], [field]: value };
      return {...prev, program: { days }};
    });
  };

  const addDay = () => {
    setFormData(prev => ({
      ...prev,
      program: { days: [...(prev.program?.days || []), { day: (prev.program?.days?.length || 0) + 1, plan: "", description: "" }] },
    }));
  };

  const removeDay = (index: number) => {
    setFormData(prev => ({
      ...prev,
      program: { days: (prev.program?.days || []).filter((_, i) => i !== index) },
    }));
  };

  const handleFaqChange = (index: number, field: keyof FaqItem, value: string) => {
    setFormData(prev => {
      const questions = [...(prev.faq?.questions || [])];
      questions[index] = { ...questions[index], [field]: value };
      return {...prev, faq: { questions }};
    });
  };

  const addFaq = () => {
    setFormData(prev => ({
      ...prev,
      faq: { questions: [...(prev.faq?.questions || []), { question: "", answer: "" }] },
    }));
  };

  const removeFaq = (index: number) => {
    setFormData(prev => ({
      ...prev,
      faq: { questions: (prev.faq?.questions || []).filter((_, i) => i !== index) },
    }));
  };

  const handleActivityChange = (index: number, field: keyof TourActivity, value: string) => {
    setFormData(prev => {
      const activities = [...(prev.activities || [])];
      activities[index] = { ...activities[index], [field]: value };
      return {...prev, activities};
    });
  };

  const addActivity = () => {
    setFormData(prev => ({
      ...prev,
      activities: [...(prev.activities || []), { activity: "", iconName: "" }],
    }));
  };

  const removeActivity = (index: number) => {
    setFormData(prev => ({
      ...prev,
      activities: (prev.activities || []).filter((_, i) => i !== index),
    }));
  };

  const handleIncludedChange = (index: number, value: string) => {
    setFormData(prev => {
      const included = [...(prev.included || [])];
      included[index] = value;
      return {...prev, included};
    });
  };

  const addIncluded = () => {
    setFormData(prev => ({
      ...prev,
      included: [...(prev.included || []), ""],
    }));
  };

  const removeIncluded = (index: number) => {
    setFormData(prev => ({
      ...prev,
      included: (prev.included || []).filter((_, i) => i !== index),
    }));
  };

  const handleSummaryChange = (index: number, value: string) => {
    setFormData(prev => {
      const summary = [...(prev.summary || [])];
      summary[index] = value;
      return {...prev, summary};
    });
  };

  const addSummary = () => {
    setFormData(prev => ({
      ...prev,
      summary: [...(prev.summary || []), ""],
    }));
  };

  const removeSummary = (index: number) => {
    setFormData(prev => ({
      ...prev,
      summary: (prev.summary || []).filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      await updateTourAdmin(id!, {
        title: formData.title,
        description: formData.description,
        startLocation: formData.startLocation,
        endLocation: formData.endLocation,
        location: formData.location,
        difficulty: formData.difficulty,
        coverUrl: formData.coverUrl,
        durationDays: formData.durationDays,
        minAge: formData.minAge,
        languages: formData.languages,
        availableMonths: formData.availableMonths,
        program: formData.program,
        faq: formData.faq,
        activities: formData.activities,
        included: formData.included,
        summary: formData.summary,
        groupSize: formData.groupSize,
        spotsLeft: formData.spotsLeft,
        subtitle: formData.subtitle,
        popUp1Title: formData.popUp1Title,
        popUp1Description: formData.popUp1Description,
        popUp1ImageUrl: formData.popUp1ImageUrl,
        popUp2Title: formData.popUp2Title,
        popUp2Description: formData.popUp2Description,
        popUp2ImageUrl: formData.popUp2ImageUrl,
        ctaTitle: formData.ctaTitle,
        ctaDescription: formData.ctaDescription,
        reviewsSectionName: formData.reviewsSectionName,
        isShowVip: formData.isShowVip,
        isShowRooms: formData.isShowRooms,
        vipPrice: formData.vipPrice,
        roomPrice: formData.roomPrice,
      });

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
        name="location"
        value={formData.location || ""}
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
        <option value="EASY">
          Easy
        </option>
        <option value="MEDIUM">
          Medium
        </option>
        <option value="HARD">
          Hard
        </option>
      </select>

      <label className={styles.label}>
        Subtitle
      </label>
      <input
        className={styles.inputSelectText}
        name="subtitle"
        value={formData.subtitle || ""}
        onChange={handleChange}
      />

      <label className={styles.label}>
        Group Size
      </label>
      <input
        className={styles.inputSelectText}
        type="number"
        name="groupSize"
        value={formData.groupSize || ""}
        onChange={handleChange}
        min={1}
      />

      <label className={styles.label}>
        Spots Left
      </label>
      <input
        className={styles.inputSelectText}
        type="number"
        name="spotsLeft"
        value={formData.spotsLeft || ""}
        onChange={handleChange}
        min={1}
      />

      <h3>Daily Itinerary</h3>
      {(formData.program?.days || []).map((day, index) => (
        <div key={index} className={styles.sectionItem}>
          <label className={styles.label}>Day {index + 1}</label>
          <input
            className={styles.inputSelectText}
            value={day.day}
            onChange={e => handleDayChange(index, "day", e.target.value)}
            type="number"
            min={1}
            placeholder="Day number"
          />
          <textarea
            className={styles.inputSelectText}
            value={day.plan}
            onChange={e => handleDayChange(index, "plan", e.target.value)}
            placeholder="Plan"
            rows={2}
          />
          <textarea
            className={styles.inputSelectText}
            value={day.description || ""}
            onChange={e => handleDayChange(index, "description", e.target.value)}
            placeholder="Description"
            rows={2}
          />
          <input
            className={styles.inputSelectText}
            value={day.imgUrl || ""}
            onChange={e => handleDayChange(index, "imgUrl", e.target.value)}
            placeholder="Image URL"
          />
          <button type="button" onClick={() => removeDay(index)}>Remove Day</button>
        </div>
      ))}
      <button type="button" onClick={addDay}>Add Day</button>

      <h3>FAQ</h3>
      {(formData.faq?.questions || []).map((faq, index) => (
        <div key={index} className={styles.sectionItem}>
          <label className={styles.label}>Question {index + 1}</label>
          <input
            className={styles.inputSelectText}
            value={faq.question}
            onChange={e => handleFaqChange(index, "question", e.target.value)}
            placeholder="Question"
          />
          <textarea
            className={styles.inputSelectText}
            value={faq.answer}
            onChange={e => handleFaqChange(index, "answer", e.target.value)}
            placeholder="Answer"
            rows={3}
          />
          <button type="button" onClick={() => removeFaq(index)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={addFaq}>Add FAQ</button>

      <h3>Activities</h3>
      {(formData.activities || []).map((activity, index) => (
        <div key={index} className={styles.sectionItem}>
          <label className={styles.label}>Activity {index + 1}</label>
          <input
            className={styles.inputSelectText}
            value={activity.activity}
            onChange={e => handleActivityChange(index, "activity", e.target.value)}
            placeholder="Activity name"
          />
          <input
            className={styles.inputSelectText}
            value={activity.iconName}
            onChange={e => handleActivityChange(index, "iconName", e.target.value)}
            placeholder="Icon name"
          />
          <button type="button" onClick={() => removeActivity(index)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={addActivity}>Add Activity</button>

      <h3>Included</h3>
      {(formData.included || []).map((item, index) => (
        <div key={index} className={styles.sectionItem}>
          <input
            className={styles.inputSelectText}
            value={item}
            onChange={e => handleIncludedChange(index, e.target.value)}
            placeholder="Included item"
          />
          <button type="button" onClick={() => removeIncluded(index)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={addIncluded}>Add Included Item</button>

      <h3>Summary (Highlights)</h3>
      {(formData.summary || []).map((item, index) => (
        <div key={index} className={styles.sectionItem}>
          <input
            className={styles.inputSelectText}
            value={item}
            onChange={e => handleSummaryChange(index, e.target.value)}
            placeholder="Highlight"
          />
          <button type="button" onClick={() => removeSummary(index)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={addSummary}>Add Summary Item</button>

      <h3>Popup 1</h3>
      <label className={styles.label}>Title</label>
      <input
        className={styles.inputSelectText}
        name="popUp1Title"
        value={formData.popUp1Title || ""}
        onChange={handleChange}
      />
      <label className={styles.label}>Description</label>
      <textarea
        className={styles.inputSelectText}
        name="popUp1Description"
        value={formData.popUp1Description || ""}
        onChange={handleChange}
        rows={3}
      />
      <label className={styles.label}>Image URL</label>
      <input
        className={styles.inputSelectText}
        name="popUp1ImageUrl"
        value={formData.popUp1ImageUrl || ""}
        onChange={handleChange}
      />

      <h3>Popup 2</h3>
      <label className={styles.label}>Title</label>
      <input
        className={styles.inputSelectText}
        name="popUp2Title"
        value={formData.popUp2Title || ""}
        onChange={handleChange}
      />
      <label className={styles.label}>Description</label>
      <textarea
        className={styles.inputSelectText}
        name="popUp2Description"
        value={formData.popUp2Description || ""}
        onChange={handleChange}
        rows={3}
      />
      <label className={styles.label}>Image URL</label>
      <input
        className={styles.inputSelectText}
        name="popUp2ImageUrl"
        value={formData.popUp2ImageUrl || ""}
        onChange={handleChange}
      />

      <h3>CTA Section</h3>
      <label className={styles.label}>Title</label>
      <input
        className={styles.inputSelectText}
        name="ctaTitle"
        value={formData.ctaTitle || ""}
        onChange={handleChange}
      />
      <label className={styles.label}>Description</label>
      <textarea
        className={styles.inputSelectText}
        name="ctaDescription"
        value={formData.ctaDescription || ""}
        onChange={handleChange}
        rows={3}
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
        {formData.photos.map((photo, index) => (
          <div
            key={index}
            className={styles.fileUploadItem}
          >
            <img
              src={photo.url}
              alt={`Photo ${index + 1}`}
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
