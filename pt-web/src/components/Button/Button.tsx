import React, {AnchorHTMLAttributes, ButtonHTMLAttributes} from "react";
import styles from "src/components/Button/Button.module.scss";

interface BaseButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

// Пропсы для кнопки
type ButtonAsButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

// Пропсы для ссылки
type ButtonAsAnchorProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

// Объединяем оба типа в один
type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

export function Button({children, variant = "primary", className, ...rest}: ButtonProps) {
  const buttonClassName = `${styles.button} ${styles[variant]} ${className || ""}`;

  if (rest.href) {
    // Если есть href, рендерим <a> и передаем все пропсы, включая href
    return (
      <a
        className={buttonClassName}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  // Если нет href, рендерим <button>
  return (
    <button
      className={buttonClassName}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
