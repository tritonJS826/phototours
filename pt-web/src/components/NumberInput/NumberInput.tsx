import {clsx} from "clsx";
import styles from "src/components/NumberInput/NumberInput.module.scss";

interface NumberInputProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  description?: string;
  icon?: string;
  className?: string;
}

const MIN_DEFAULT = 1;
const MAX_DEFAULT = 99;
const INCREMENT = 1;

export function NumberInput({
  value,
  onChange,
  min = MIN_DEFAULT,
  max = MAX_DEFAULT,
  description,
  icon,
  className,
}: NumberInputProps) {
  const handleDecrement = () => {
    const newValue = Math.max(min, value - INCREMENT);
    onChange(newValue);
  };

  const handleIncrement = () => {
    const newValue = Math.min(max, value + INCREMENT);
    onChange(newValue);
  };

  return (
    <div className={clsx(styles.numberInputBlock, className)}>
      <div className={styles.numberInputLeft}>
        {icon && (
          <img
            className={styles.numberInputImg}
            src={icon}
            alt="Input icon"
          />
        )}
        <span className={styles.numberInputDescription}>
          {description}
        </span>
      </div>
      <div className={styles.numberInputRight}>
        <button
          type="button"
          className={styles.numberInputButton}
          onClick={handleDecrement}
          disabled={value <= min}
        >
          -
        </button>
        <span className={styles.numberInputCount}>
          {value}
        </span>
        <button
          type="button"
          className={styles.numberInputButton}
          onClick={handleIncrement}
          disabled={value >= max}
        >
          +
        </button>
      </div>
    </div>
  );
}
