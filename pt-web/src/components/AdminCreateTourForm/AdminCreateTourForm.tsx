import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button} from "src/components/Button/Button";
import styles from "src/components/AdminCreateTourForm/AdminCreateTourForm.module.scss";

const initialFormData = {
  title: "",
  description: "",
  region: "",
  difficulty: "BEGINNER",
  price: "",
  program: "",
  guideId: "",
};

type Guide = {
  id: number;
  experience: string;
  user: {
    id: number;
    firstName: string;
    lastName: string;
  };
};

export const AdminCreateTourForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({...initialFormData});
  const [error, setError] = useState("");
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    const fetchGuides = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/tours/guides`);
        if (!res.ok) {
          throw new Error("Failed to load guides");
        }
        const data = await res.json();
        setGuides(data);
      } catch {
        setError("Error loading guides");
      }
    };
    fetchGuides();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/tours`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
          guideId: parseInt(formData.guideId, 10),
          program: {text: formData.program.trim()},
        }),
      });

      const text = await response.text();
      let result;

      try {
        result = JSON.parse(text);
      } catch {
        result = text;
      }

      if (!response.ok) {
        throw new Error(result?.message || "Failed to create tour");
      }
      navigate(`/admin/tour/${result.id}/continue`);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Error creating tour");
      }
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <h2>
        Create New Tour
      </h2>

      {[
        {label: "Title", name: "title", type: "text", required: true},
        {label: "Description", name: "description", textarea: true, required: true},
        {label: "Region", name: "region", type: "text", required: true},
        {
          label: "Difficulty",
          name: "difficulty",
          select: true,
          options: [
            {value: "BEGINNER", label: "Beginner"},
            {value: "EXPERIENCED", label: "Experienced"},
            {value: "PRO", label: "Pro"},
          ],
        },
        {label: "Price", name: "price", type: "number", required: true},
        {label: "Program", name: "program", textarea: true},
      ].map(({label, name, type, textarea, select, options, required}) => (
        <label key={name}>
          {label}
          {select
            ? (
              <select
                className={styles.selectTextInput}
                name={name}
                value={(formData as Record<string, string>)[name]}
                onChange={handleChange}
              >
                {options?.map((opt) => (
                  <option
                    key={opt.value}
                    value={opt.value}
                  >
                    {opt.label}
                  </option>
                ))}
              </select>
            )
            : textarea
              ? (
                <textarea
                  className={styles.selectTextInput}
                  name={name}
                  value={(formData as Record<string, string>)[name]}
                  onChange={handleChange}
                  required={required}
                />
              )
              : (
                <input
                  className={styles.selectTextInput}
                  type={type}
                  name={name}
                  value={(formData as Record<string, string>)[name]}
                  onChange={handleChange}
                  required={required}
                />
              )}
        </label>
      ))}

      <label>
        Guide
        <select
          className={styles.selectTextInput}
          name="guideId"
          value={formData.guideId}
          onChange={handleChange}
          required
        >
          <option value="">
            -- Select Guide --
          </option>
          {guides.map((guide: Guide) => (
            <option
              key={guide.id}
              value={guide.user.id}
            >
              {guide.user.firstName}
              {" "}
              {guide.user.lastName}
              {" "}
            </option>
          ))}
        </select>
      </label>

      {error && <p className={styles.error}>
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
