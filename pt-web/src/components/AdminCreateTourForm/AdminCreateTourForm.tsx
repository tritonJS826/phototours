import {useState} from "react";
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

export const AdminCreateTourForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({...initialFormData});
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/tours`, {
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
        {label: "Guide ID", name: "guideId", type: "number", required: true},
      ].map(({label, name, type, textarea, select, options, required}) => (
        <label key={name}>
          {label}
          {select
            ? (
              <select
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
                  name={name}
                  value={(formData as Record<string, string>)[name]}
                  onChange={handleChange}
                  required={required}
                />
              )
              : (
                <input
                  type={type}
                  name={name}
                  value={(formData as Record<string, string>)[name]}
                  onChange={handleChange}
                  required={required}
                />
              )}
        </label>
      ))}

      {error && <p className={styles.error}>
        {error}
      </p>}

      <Button type="submit">
        Create Tour and Continue
      </Button>
    </form>
  );
};
