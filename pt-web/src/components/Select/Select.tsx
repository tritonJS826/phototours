import {forwardRef} from "react";
import styles from "src/components/Select/Select.module.scss";

type Option = { value: string; label: string };

type Props = {
  label?: string;
  placeholder?: string;
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  error?: string;
  className?: string;
  name?: string;
  id?: string;
};

export const Select = forwardRef<HTMLSelectElement, Props>(function Select(
  {label, placeholder, options, value, onChange, disabled, error, className, name, id},
  ref,
) {
  const cls = [styles.selectWrap, className].filter(Boolean).join(" ");

  return (
    <div className={cls}>
      {label &&
      <label
        className={styles.label}
        htmlFor={id}
      >
        {label}
      </label>}

      <select
        ref={ref}
        id={id}
        name={name}
        className={styles.select}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
      >
        {placeholder && (
          <option
            value=""
            disabled
            hidden
          >
            {placeholder}
          </option>
        )}
        {options.map((o) => (
          <option
            key={o.value}
            value={o.value}
          >
            {o.label}
          </option>
        ))}
      </select>

      {error && <div className={styles.error}>
        {error}
      </div>}
    </div>
  );
});
