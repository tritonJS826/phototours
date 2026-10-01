import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Button} from "src/components/Button/Button";
import {PATHS} from "src/routes/routes";
import {getAdminTour, updateTourAdmin} from "src/services/toursService";
import {AdminTour, DifficultyLevel, FaqItem, TourActivity, TourDay} from "src/types/tour";
import styles from "src/pages/adminTourEditForm/AdminTourEditForm.module.scss";

export const AdminTourEdit = () => {
  const {id} = useParams<{ id: string }>();
  const navigate = useNavigate();

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
    program: {days: []},
    faq: {questions: []},
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
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());

  const toggleSection = (name: string) => {
    setCollapsed(prev => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  useEffect(() => {
    if (!id) {
      return;
    }
    const fetchTour = async () => {
      try {
        const data = await getAdminTour(id);
        setFormData(data);
      } catch (err) {
        const message = err instanceof Error ? err.message : "Failed to fetch tour";
        if (message === "Unauthorized") {
          navigate(PATHS.ADMIN_LOGIN);

          return;
        }
        setError(message);
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

  const handleDayChange = (index: number, field: keyof TourDay, value: string) => {
    setFormData(prev => {
      const days = [...(prev.program?.days || [])];
      days[index] = {...days[index], [field]: value};

      return {...prev, program: {days}};
    });
  };

  const addDay = () => {
    setFormData(prev => {
      const currentDays = prev.program?.days || [];

      return {
        ...prev,
        program: {days: [...currentDays, {day: String(currentDays.length + 1), plan: "", description: ""}]},
      };
    });
  };

  const removeDay = (index: number) => {
    setFormData(prev => ({
      ...prev,
      program: {days: (prev.program?.days || []).filter((_, i) => i !== index)},
    }));
  };

  const handleFaqChange = (index: number, field: keyof FaqItem, value: string) => {
    setFormData(prev => {
      const questions = [...(prev.faq?.questions || [])];
      questions[index] = {...questions[index], [field]: value};

      return {...prev, faq: {questions}};
    });
  };

  const addFaq = () => {
    setFormData(prev => ({
      ...prev,
      faq: {questions: [...(prev.faq?.questions || []), {question: "", answer: ""}]},
    }));
  };

  const removeFaq = (index: number) => {
    setFormData(prev => ({
      ...prev,
      faq: {questions: (prev.faq?.questions || []).filter((_, i) => i !== index)},
    }));
  };

  const handleActivityChange = (index: number, field: keyof TourActivity, value: string) => {
    setFormData(prev => {
      const activities = [...(prev.activities || [])];
      activities[index] = {...activities[index], [field]: value};

      return {...prev, activities};
    });
  };

  const addActivity = () => {
    setFormData(prev => ({
      ...prev,
      activities: [...(prev.activities || []), {activity: "", iconName: ""}],
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

  const handleDateChange = (index: number, field: string, value: string | boolean | number) => {
    setFormData(prev => {
      const dates = [...(prev.dates || [])];
      const current = dates[index] || {id: null, dateFrom: "", dateTo: "", groupSize: 10, isAvailable: true, price: 0, description: ""};
      dates[index] = {...current, [field]: value} as AdminTour["dates"][number];

      return {...prev, dates};
    });
  };

  const addDate = () => {
    setFormData(prev => ({
      ...prev,
      dates: [
        ...(prev.dates || []),
        {
          id: null,
          dateFrom: "",
          dateTo: "",
          groupSize: prev.groupSize,
          isAvailable: true,
          price: 0,
          description: "",
        },
      ],
    }));
  };

  const removeDate = (index: number) => {
    setFormData(prev => ({
      ...prev,
      dates: (prev.dates || []).filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    if (!id) {
      setError("Tour ID is missing");
      setSubmitting(false);

      return;
    }

    try {
      await updateTourAdmin(id, {
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
        photos: formData.photos,
        dates: formData.dates,
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
      <h2 className={styles.formTitle}>
        Edit tour #
        {id}
      </h2>

      {error && (
        <div
          role="alert"
          className={styles.errorBanner}
        >
          {error}
        </div>
      )}

      {/* ── Basic Info ── */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>
          Basic Info
          <button type="button" className={`${styles.toggleBtn} ${collapsed.has("basic") ? styles.collapsed : ""}`} onClick={() => toggleSection("basic")}>▾</button>
        </h3>
        {!collapsed.has("basic") && <div className={styles.sectionContent}>
        <div className={styles.field}>
          <label className={styles.label}>Title</label>
          <input className={styles.input} name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Slug</label>
          <input className={styles.input} name="slug" value={formData.slug} readOnly />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Description</label>
          <textarea className={styles.textarea} name="description" value={formData.description} onChange={handleChange} required />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Region</label>
          <input className={styles.input} name="location" value={formData.location || ""} onChange={handleChange} required />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Cover URL</label>
          <input className={styles.input} name="coverUrl" value={formData.coverUrl || ""} onChange={handleChange} />
          {formData.coverUrl && <img src={formData.coverUrl} alt="Cover preview" className={styles.imagePreview} />}
        </div>
        <div className={styles.row}>
          <div className={`${styles.field} ${styles.col}`}>
            <label className={styles.label}>Duration (days)</label>
            <input className={styles.input} name="durationDays" value={formData.durationDays || ""} onChange={handleChange} />
          </div>
          <div className={`${styles.field} ${styles.colNarrow}`}>
            <label className={styles.label}>Min Age</label>
            <input className={styles.input} type="number" name="minAge" value={formData.minAge || ""} onChange={handleChange} min={0} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={`${styles.field} ${styles.col}`}>
            <label className={styles.label}>Start Location</label>
            <input className={styles.input} name="startLocation" value={formData.startLocation || ""} onChange={handleChange} />
          </div>
          <div className={`${styles.field} ${styles.col}`}>
            <label className={styles.label}>End Location</label>
            <input className={styles.input} name="endLocation" value={formData.endLocation || ""} onChange={handleChange} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={`${styles.field} ${styles.col}`}>
            <label className={styles.label}>Group Size</label>
            <input className={styles.input} type="number" name="groupSize" value={formData.groupSize || ""} onChange={handleChange} min={1} />
          </div>
          <div className={`${styles.field} ${styles.col}`}>
            <label className={styles.label}>Spots Left</label>
            <input className={styles.input} type="number" name="spotsLeft" value={formData.spotsLeft || ""} onChange={handleChange} min={1} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={`${styles.field} ${styles.col}`}>
            <label className={styles.label}>Subtitle</label>
            <input className={styles.input} name="subtitle" value={formData.subtitle || ""} onChange={handleChange} />
          </div>
          <div className={`${styles.field} ${styles.col}`}>
            <label className={styles.label}>Difficulty</label>
            <select className={styles.select} name="difficulty" value={formData.difficulty} onChange={handleChange}>
              <option value="EASY">Easy</option>
              <option value="MEDIUM">Medium</option>
              <option value="HARD">Hard</option>
            </select>
          </div>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Reviews Section Name</label>
          <input className={styles.input} name="reviewsSectionName" value={formData.reviewsSectionName || ""} onChange={handleChange} />
        </div>
        </div>}
      </div>

      {/* ── Pricing & Languages ── */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>
          Pricing & VIP
          <button type="button" className={`${styles.toggleBtn} ${collapsed.has("pricing") ? styles.collapsed : ""}`} onClick={() => toggleSection("pricing")}>▾</button>
        </h3>
        {!collapsed.has("pricing") && <div className={styles.sectionContent}>
        <div className={styles.checkboxRow}>
          <input type="checkbox" name="isShowVip" checked={formData.isShowVip || false} onChange={e => setFormData(prev => ({...prev, isShowVip: e.target.checked}))} />
          <label className={styles.label}>Show VIP</label>
        </div>
        <div className={`${styles.field} ${styles.colNarrow}`}>
          <label className={styles.label}>VIP Price</label>
          <input className={styles.input} type="number" name="vipPrice" value={formData.vipPrice || ""} onChange={handleChange} min={0} />
        </div>
        <div className={styles.checkboxRow}>
          <input type="checkbox" name="isShowRooms" checked={formData.isShowRooms || false} onChange={e => setFormData(prev => ({...prev, isShowRooms: e.target.checked}))} />
          <label className={styles.label}>Show Rooms</label>
        </div>
        <div className={`${styles.field} ${styles.colNarrow}`}>
          <label className={styles.label}>Room Price</label>
          <input className={styles.input} type="number" name="roomPrice" value={formData.roomPrice || ""} onChange={handleChange} min={0} />
        </div>

        <h3 className={styles.sectionTitle}>Languages & Months</h3>
        <div className={styles.field}>
          <label className={styles.label}>Languages (comma-separated)</label>
          <input className={styles.input} name="languages" value={formData.languages.join(", ")} onChange={e => handleLanguagesChange(e.target.value)} />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Available Months (comma-separated)</label>
          <input className={styles.input} name="availableMonths" value={formData.availableMonths.join(", ")} onChange={e => handleMonthsChange(e.target.value)} />
        </div>
        </div>}
      </div>

      {/* ── Daily Itinerary (full width) ── */}
      <div className={`${styles.section} ${styles.fullWidth}`}>
        <h3 className={styles.sectionTitle}>
          Daily Itinerary
          <button type="button" className={`${styles.toggleBtn} ${collapsed.has("itinerary") ? styles.collapsed : ""}`} onClick={() => toggleSection("itinerary")}>▾</button>
        </h3>
        {!collapsed.has("itinerary") && <div className={styles.sectionContent}>
        {(formData.program?.days || []).map((day, index) => (
          <div key={index} className={styles.sectionItem}>
            <div className={styles.sectionItemTitle}>Day {index + 1}</div>
            <div className={styles.field}>
              <label className={styles.label}>Day number</label>
              <input className={styles.input} value={day.day} onChange={e => handleDayChange(index, "day", e.target.value)} />
            </div>
            <div className={styles.row}>
              <div className={`${styles.field} ${styles.col}`}>
                <label className={styles.label}>Plan</label>
                <textarea className={styles.textarea} value={day.plan} onChange={e => handleDayChange(index, "plan", e.target.value)} rows={2} />
              </div>
              <div className={`${styles.field} ${styles.col}`}>
                <label className={styles.label}>Description</label>
                <textarea className={styles.textarea} value={day.description || ""} onChange={e => handleDayChange(index, "description", e.target.value)} rows={2} />
              </div>
            </div>
            <div className={styles.row}>
              <div className={`${styles.field} ${styles.col}`}>
                <label className={styles.label}>Image URL</label>
                <input className={styles.input} value={day.imgUrl || ""} onChange={e => handleDayChange(index, "imgUrl", e.target.value)} />
              </div>
              {day.imgUrl && <img src={day.imgUrl} alt={`Day ${index + 1} preview`} className={`${styles.colImg} ${styles.imagePreview}`} />}
            </div>
            <button type="button" className={styles.btnRemove} onClick={() => removeDay(index)}>Remove Day</button>
          </div>
        ))}
        <button type="button" className={styles.btnAdd} onClick={addDay}>+ Add Day</button>
        </div>}
      </div>

      {/* ── FAQ (full width) ── */}
      <div className={`${styles.section} ${styles.fullWidth}`}>
        <h3 className={styles.sectionTitle}>
          FAQ
          <button type="button" className={`${styles.toggleBtn} ${collapsed.has("faq") ? styles.collapsed : ""}`} onClick={() => toggleSection("faq")}>▾</button>
        </h3>
        {!collapsed.has("faq") && <div className={styles.sectionContent}>
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "12px"}}>
          {(formData.faq?.questions || []).map((faq, index) => (
            <div key={index} className={styles.sectionItem}>
              <div className={styles.sectionItemTitle}>Question {index + 1}</div>
              <div className={styles.field}>
                <label className={styles.label}>Question</label>
                <input className={styles.input} value={faq.question} onChange={e => handleFaqChange(index, "question", e.target.value)} />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Answer</label>
                <textarea className={styles.textarea} value={faq.answer} onChange={e => handleFaqChange(index, "answer", e.target.value)} rows={3} />
              </div>
              <button type="button" className={styles.btnRemove} onClick={() => removeFaq(index)}>Remove</button>
            </div>
          ))}
        </div>
        <button type="button" className={styles.btnAdd} onClick={addFaq} style={{marginTop: "10px"}}>+ Add FAQ</button>
        </div>}
      </div>

      {/* ── Activities ── */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>
          Activities
          <button type="button" className={`${styles.toggleBtn} ${collapsed.has("activities") ? styles.collapsed : ""}`} onClick={() => toggleSection("activities")}>▾</button>
        </h3>
        {!collapsed.has("activities") && <div className={styles.sectionContent}>
        {(formData.activities || []).map((activity, index) => (
          <div key={index} className={styles.sectionItem}>
            <div className={styles.sectionItemTitle}>Activity {index + 1}</div>
            <div className={styles.field}>
              <label className={styles.label}>Name</label>
              <input className={styles.input} value={activity.activity} onChange={e => handleActivityChange(index, "activity", e.target.value)} />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Icon name</label>
              <input className={styles.input} value={activity.iconName} onChange={e => handleActivityChange(index, "iconName", e.target.value)} />
            </div>
            <button type="button" className={styles.btnRemove} onClick={() => removeActivity(index)}>Remove</button>
          </div>
        ))}
        <button type="button" className={styles.btnAdd} onClick={addActivity}>+ Add Activity</button>
        </div>}
      </div>

      {/* ── Included & Summary ── */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>
          Included
          <button type="button" className={`${styles.toggleBtn} ${collapsed.has("included") ? styles.collapsed : ""}`} onClick={() => toggleSection("included")}>▾</button>
        </h3>
        {!collapsed.has("included") && <div className={styles.sectionContent}>
        {(formData.included || []).map((item, index) => (
          <div key={index} className={styles.sectionItem}>
            <div className={styles.field}>
              <input className={styles.input} value={item} onChange={e => handleIncludedChange(index, e.target.value)} placeholder="Included item" />
            </div>
            <button type="button" className={styles.btnRemove} onClick={() => removeIncluded(index)}>Remove</button>
          </div>
        ))}
        <button type="button" className={styles.btnAdd} onClick={addIncluded} style={{marginBottom: "24px"}}>+ Add Included</button>

        <h3 className={styles.sectionTitle}>Highlights</h3>
        {(formData.summary || []).map((item, index) => (
          <div key={index} className={styles.sectionItem}>
            <div className={styles.field}>
              <input className={styles.input} value={item} onChange={e => handleSummaryChange(index, e.target.value)} placeholder="Highlight" />
            </div>
            <button type="button" className={styles.btnRemove} onClick={() => removeSummary(index)}>Remove</button>
          </div>
        ))}
        <button type="button" className={styles.btnAdd} onClick={addSummary}>+ Add Highlight</button>
        </div>}
      </div>

      {/* ── Popup 1 ── */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>
          Popup 1
          <button type="button" className={`${styles.toggleBtn} ${collapsed.has("popup1") ? styles.collapsed : ""}`} onClick={() => toggleSection("popup1")}>▾</button>
        </h3>
        {!collapsed.has("popup1") && <div className={styles.sectionContent}>
        <div className={styles.field}>
          <label className={styles.label}>Title</label>
          <input className={styles.input} name="popUp1Title" value={formData.popUp1Title || ""} onChange={handleChange} />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Description</label>
          <textarea className={styles.textarea} name="popUp1Description" value={formData.popUp1Description || ""} onChange={handleChange} rows={3} />
        </div>
        <div className={styles.row}>
          <div className={`${styles.field} ${styles.col}`}>
            <label className={styles.label}>Image URL</label>
            <input className={styles.input} name="popUp1ImageUrl" value={formData.popUp1ImageUrl || ""} onChange={handleChange} />
          </div>
          {formData.popUp1ImageUrl && <img src={formData.popUp1ImageUrl} alt="Popup 1 preview" className={`${styles.colImg} ${styles.imagePreview}`} />}
        </div>
        </div>}
      </div>

      {/* ── Popup 2 ── */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>
          Popup 2
          <button type="button" className={`${styles.toggleBtn} ${collapsed.has("popup2") ? styles.collapsed : ""}`} onClick={() => toggleSection("popup2")}>▾</button>
        </h3>
        {!collapsed.has("popup2") && <div className={styles.sectionContent}>
        <div className={styles.field}>
          <label className={styles.label}>Title</label>
          <input className={styles.input} name="popUp2Title" value={formData.popUp2Title || ""} onChange={handleChange} />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Description</label>
          <textarea className={styles.textarea} name="popUp2Description" value={formData.popUp2Description || ""} onChange={handleChange} rows={3} />
        </div>
        <div className={styles.row}>
          <div className={`${styles.field} ${styles.col}`}>
            <label className={styles.label}>Image URL</label>
            <input className={styles.input} name="popUp2ImageUrl" value={formData.popUp2ImageUrl || ""} onChange={handleChange} />
          </div>
          {formData.popUp2ImageUrl && <img src={formData.popUp2ImageUrl} alt="Popup 2 preview" className={`${styles.colImg} ${styles.imagePreview}`} />}
        </div>
        </div>}
      </div>

      {/* ── CTA ── */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>
          CTA Section
          <button type="button" className={`${styles.toggleBtn} ${collapsed.has("cta") ? styles.collapsed : ""}`} onClick={() => toggleSection("cta")}>▾</button>
        </h3>
        {!collapsed.has("cta") && <div className={styles.sectionContent}>
        <div className={styles.field}>
          <label className={styles.label}>Title</label>
          <input className={styles.input} name="ctaTitle" value={formData.ctaTitle || ""} onChange={handleChange} />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Description</label>
          <textarea className={styles.textarea} name="ctaDescription" value={formData.ctaDescription || ""} onChange={handleChange} rows={3} />
        </div>
        </div>}
      </div>

      {/* ── Dates (full width) ── */}
      <div className={`${styles.section} ${styles.fullWidth}`}>
        <h3 className={styles.sectionTitle}>
          Dates
          <button type="button" className={`${styles.toggleBtn} ${collapsed.has("dates") ? styles.collapsed : ""}`} onClick={() => toggleSection("dates")}>▾</button>
        </h3>
        {!collapsed.has("dates") && <div className={styles.sectionContent}>
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "16px"}}>
          {(formData.dates || []).map((date, index) => (
            <div key={index} className={styles.sectionItem}>
              <div className={styles.sectionItemTitle}>Date {index + 1}</div>
              <div className={styles.row}>
                <div className={`${styles.field} ${styles.col}`}>
                  <label className={styles.label}>From</label>
                  <input className={styles.input} type="datetime-local" value={date.dateFrom} onChange={e => handleDateChange(index, "dateFrom", e.target.value)} />
                </div>
                <div className={`${styles.field} ${styles.col}`}>
                  <label className={styles.label}>To</label>
                  <input className={styles.input} type="datetime-local" value={date.dateTo} onChange={e => handleDateChange(index, "dateTo", e.target.value)} />
                </div>
              </div>
              <div className={styles.row}>
                <div className={`${styles.field} ${styles.col}`}>
                  <label className={styles.label}>Price</label>
                  <input className={styles.input} type="number" value={date.price ?? ""} onChange={e => handleDateChange(index, "price", e.target.value === "" ? 0 : Number(e.target.value))} min={0} />
                </div>
                <div className={`${styles.field} ${styles.col}`}>
                  <label className={styles.label}>Group Size</label>
                  <input className={styles.input} type="number" value={date.groupSize ?? ""} onChange={e => handleDateChange(index, "groupSize", e.target.value === "" ? 0 : Number(e.target.value))} min={1} />
                </div>
              </div>
              <div className={styles.checkboxRow}>
                <input type="checkbox" checked={date.isAvailable ?? true} onChange={e => handleDateChange(index, "isAvailable", e.target.checked)} />
                <label className={styles.label}>Available</label>
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Description</label>
                <textarea className={styles.textarea} value={date.description || ""} onChange={e => handleDateChange(index, "description", e.target.value)} rows={2} />
              </div>
              <button type="button" className={styles.btnRemove} onClick={() => removeDate(index)}>Remove Date</button>
            </div>
          ))}
        </div>
        <button type="button" className={styles.btnAdd} onClick={addDate} style={{marginTop: "12px"}}>+ Add Date</button>
        </div>}
      </div>

      {/* ── Photos (full width) ── */}
      <div className={`${styles.section} ${styles.fullWidth}`}>
        <h3 className={styles.sectionTitle}>
          Photos
          <button type="button" className={`${styles.toggleBtn} ${collapsed.has("photos") ? styles.collapsed : ""}`} onClick={() => toggleSection("photos")}>▾</button>
        </h3>
        {!collapsed.has("photos") && <div className={styles.sectionContent}>
        <div className={styles.photosSection}>
          {formData.photos.map((photo, index) => (
            <div key={index} className={styles.photoItem}>
              <div className={styles.field}>
                <label className={styles.label}>Image URL</label>
                <input
                  className={styles.input}
                  value={photo.url}
                  onChange={(e) => {
                    const newPhotos = [...formData.photos];
                    newPhotos[index] = {...newPhotos[index], url: e.target.value};
                    setFormData(prev => ({...prev, photos: newPhotos}));
                  }}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Alt text</label>
                <input
                  className={styles.input}
                  value={photo.alt || ""}
                  onChange={(e) => {
                    const newPhotos = [...formData.photos];
                    newPhotos[index] = {...newPhotos[index], alt: e.target.value};
                    setFormData(prev => ({...prev, photos: newPhotos}));
                  }}
                />
              </div>
              {photo.url && <img src={photo.url} alt={photo.alt || `Photo ${index + 1}`} className={styles.photoPreview} />}
              <button
                type="button"
                className={styles.btnRemove}
                onClick={() => {
                  const newPhotos = formData.photos.filter((_, i) => i !== index);
                  setFormData(prev => ({...prev, photos: newPhotos}));
                }}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            className={styles.btnAdd}
            onClick={() => {
              const newPhotos = [...formData.photos, {id: null, url: "", alt: ""}];
              setFormData(prev => ({...prev, photos: newPhotos}));
            }}
          >
            + Add Photo
          </button>
        </div>
        </div>}
      </div>

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
