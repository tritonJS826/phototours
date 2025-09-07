import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button} from "src/components/Button/Button";
import styles from "src/pages/adminCreateTourForm/AdminCreateTourForm.module.scss";

const DIFFICULTY_BEGINNER = "BEGINNER";
const DIFFICULTY_EXPERIENCED = "EXPERIENCED";
const DIFFICULTY_PRO = "PRO";
const ZERO = 0;
const TEN = 10;

type GuideUser = { id: number; firstName: string; lastName: string };
type Guide = { id: number; experience: string; user: GuideUser | null };

type FormState = {
  title: string;
  description: string;
  difficulty: string;
  price: string;
  program: string;
  guideId: string;
  startLocation: string;
  endLocation: string;
  durationDays: string;
  minAge: string;
  coverUrl: string;
  languages: string;
  availableMonths: string;
};

function parseJsonSafe(text: string): unknown {
  try {
    return JSON.parse(text) as unknown;
  } catch {
    return text;
  }
}
function isObject(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null;
}
function getOwn(obj: Record<string, unknown>, key: string): unknown {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    return obj[key];
  }

  return undefined;
}
function readMessage(parsed: unknown): string {
  if (isObject(parsed)) {
    const v = getOwn(parsed, "message");
    if (typeof v === "string") {
      return v;
    }
  }

  return "Failed to create tour";
}
function readId(parsed: unknown): number {
  if (isObject(parsed)) {
    const v = getOwn(parsed, "id");
    if (typeof v === "number" && Number.isFinite(v)) {
      return v;
    }
    if (typeof v === "string") {
      const n = Number(v);
      if (Number.isFinite(n)) {
        return n;
      }
    }
  }

  return ZERO;
}

export const AdminCreateTourForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormState>({
    title: "",
    description: "",
    difficulty: DIFFICULTY_BEGINNER,
    price: "",
    program: "",
    guideId: "",
    startLocation: "",
    endLocation: "",
    durationDays: "",
    minAge: "",
    coverUrl: "",
    languages: "",
    availableMonths: "",
  });

  const [error, setError] = useState("");
  const [guides, setGuides] = useState<Guide[]>([]);

  useEffect(() => {
    const load = async () => {
      try {
        const url = `${import.meta.env.VITE_API_BASE_URL}/tours/guides`;
        const res = await fetch(url);
        if (!res.ok) {
          return;
        } // Не блокируем форму
        const data = await res.json();
        setGuides(data);
      } catch { /* игнорим, можно создать тур и без списка */ }
    };
    load();
  }, []);

  const handleText = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(prev => ({...prev, [name]: value}));
  };
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(prev => ({...prev, [name]: value}));
  };
  const toArray = (s: string) =>
    s.split(",").map(x => x.trim()).filter(x => x.length > ZERO);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const priceNumber = parseFloat(formData.price);
      const price = Number.isFinite(priceNumber) ? priceNumber : undefined;

      const durationNumber = parseInt(formData.durationDays, TEN);
      const durationDays = Number.isFinite(durationNumber)
        ? durationNumber
        : undefined;

      const minAgeNumber = parseInt(formData.minAge, TEN);
      const minAge = Number.isFinite(minAgeNumber) ? minAgeNumber : undefined;

      const g = parseInt(formData.guideId, TEN);
      const hasGuide = Number.isInteger(g) && g > ZERO ? g : undefined;

      const languages = toArray(formData.languages);
      const availableMonths = toArray(formData.availableMonths);

      const body: Record<string, unknown> = {
        title: formData.title,
        description: formData.description,
        difficulty: formData.difficulty,
        program: {text: String(formData.program).trim()},
        price,
        startLocation:
          formData.startLocation.trim().length > ZERO
            ? formData.startLocation
            : undefined,
        endLocation:
          formData.endLocation.trim().length > ZERO
            ? formData.endLocation
            : undefined,
        durationDays,
        minAge,
        coverUrl:
          formData.coverUrl.trim().length > ZERO ? formData.coverUrl : undefined,
        languages: languages.length > ZERO ? languages : undefined,
        availableMonths:
          availableMonths.length > ZERO ? availableMonths : undefined,
      };
      if (hasGuide !== undefined) {
        body.guideId = hasGuide;
      }

      const url = `${import.meta.env.VITE_API_BASE_URL}/tours`;
      const response = await fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body),
      });

      const text = await response.text();
      const parsed = parseJsonSafe(text);

      if (!response.ok) {
        setError(readMessage(parsed));

        return;
      }

      const id = readId(parsed);
      if (id > ZERO) {
        navigate(`/admin/tour/${id}/continue`);

        return;
      }

      setError("Invalid response");
    } catch {
      setError("Error creating tour");
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      noValidate
    >
      <h2>
        Create New Tour
      </h2>

      <label>
        Title
        <input
          className={styles.selectTextInput}
          type="text"
          name="title"
          value={formData.title}
          onChange={handleText}
          required
        />
      </label>

      <label>
        Description
        <textarea
          className={styles.selectTextInput}
          name="description"
          value={formData.description}
          onChange={handleText}
          required
        />
      </label>

      <label>
        Difficulty
        <select
          className={styles.selectTextInput}
          name="difficulty"
          value={formData.difficulty}
          onChange={handleSelect}
        >
          <option value={DIFFICULTY_BEGINNER}>
            Beginner
          </option>
          <option value={DIFFICULTY_EXPERIENCED}>
            Experienced
          </option>
          <option value={DIFFICULTY_PRO}>
            Pro
          </option>
        </select>
      </label>

      <label>
        Price
        <input
          className={styles.selectTextInput}
          type="number"
          name="price"
          value={formData.price}
          onChange={handleText}
        />
      </label>

      <label>
        Program
        <textarea
          className={styles.selectTextInput}
          name="program"
          value={formData.program}
          onChange={handleText}
        />
      </label>

      <label>
        Start location
        <input
          className={styles.selectTextInput}
          type="text"
          name="startLocation"
          value={formData.startLocation}
          onChange={handleText}
        />
      </label>

      <label>
        End location
        <input
          className={styles.selectTextInput}
          type="text"
          name="endLocation"
          value={formData.endLocation}
          onChange={handleText}
        />
      </label>

      <label>
        Duration days
        <input
          className={styles.selectTextInput}
          type="number"
          name="durationDays"
          value={formData.durationDays}
          onChange={handleText}
        />
      </label>

      <label>
        Min age
        <input
          className={styles.selectTextInput}
          type="number"
          name="minAge"
          value={formData.minAge}
          onChange={handleText}
        />
      </label>

      <label>
        Cover URL
        <input
          className={styles.selectTextInput}
          type="text"
          name="coverUrl"
          value={formData.coverUrl}
          onChange={handleText}
        />
      </label>

      <label>
        Languages
        <input
          className={styles.selectTextInput}
          type="text"
          name="languages"
          placeholder="en, de, uk"
          value={formData.languages}
          onChange={handleText}
        />
      </label>

      <label>
        Available months
        <input
          className={styles.selectTextInput}
          type="text"
          name="availableMonths"
          placeholder="January, February"
          value={formData.availableMonths}
          onChange={handleText}
        />
      </label>

      <label>
        Guide
        <select
          className={styles.selectTextInput}
          name="guideId"
          value={formData.guideId}
          onChange={handleSelect}
        >
          <option value="">
            -- No guide --
          </option>
          {guides.map(g => (
            <option
              key={g.id}
              value={String(g.id)}
            >
              {g.user ? `${g.user.firstName} ${g.user.lastName}` : `Guide ${g.id}`}
            </option>
          ))}
        </select>
      </label>

      {error.length > ZERO && <p className={styles.error}>
        {error}
      </p>}

      <Button
        className={styles.button}
        type="submit"
      >
        Create Tour and Continue
      </Button>
    </form>
  );
};
