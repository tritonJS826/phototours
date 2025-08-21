import {forwardRef, useId} from "react";
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
  required?: boolean;
};

export const Select = forwardRef<HTMLSelectElement, Props>(function Select(
  {label, placeholder, options, value, onChange, disabled, error, className, name, id, required},
  ref,
) {
  const fallbackId = useId();
  const selectId = id || fallbackId;
  const errorId = `${selectId}-error`;
  const wrapCls = [styles.selectWrap, className].filter(Boolean).join(" ");
  const selectCls = [styles.select, error ? styles.errorState : ""].filter(Boolean).join(" ");

  return (
    <div className={wrapCls}>
      {label && (
        <label
          className={styles.label}
          htmlFor={selectId}
        >
          {label}
        </label>
      )}

      {"value" in ({} as Props)
        ? (
          <select
            ref={ref}
            id={selectId}
            name={name}
            className={selectCls}
            value={value ?? ""}
            onChange={(e) => onChange?.(e.target.value)}
            disabled={disabled}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? errorId : undefined}
            required={required}
          >
            {placeholder && (
              <option
                className={styles.placeholderOption}
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
        )
        : (
          <select
            ref={ref}
            id={selectId}
            name={name}
            className={selectCls}
            defaultValue=""
            onChange={(e) => onChange?.(e.target.value)}
            disabled={disabled}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? errorId : undefined}
            required={required}
          >
            {placeholder && (
              <option
                className={styles.placeholderOption}
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
        )}

      {error && (
        <div
          id={errorId}
          className={styles.error}
        >
          {error}
        </div>
      )}
    </div>
  );
});
