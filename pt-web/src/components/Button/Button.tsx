import React, {AnchorHTMLAttributes, ButtonHTMLAttributes} from "react";
import styles from "src/components/Button/Button.module.scss";

interface BaseButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

type ButtonAsButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsAnchorProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

export function Button({children, variant = "primary", className, ...rest}: ButtonProps) {
  const buttonClassName = `${styles.button} ${styles[variant]} ${className || ""}`;

  if (rest.href) {
    return (
      <a
        className={buttonClassName}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={buttonClassName}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
