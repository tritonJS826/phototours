import {ButtonHTMLAttributes, memo, ReactNode} from "react";
import {classNames} from "src/utils/classNames";
// eslint-disable-next-line no-restricted-imports
import cls from "./Button.module.scss";

/**
 * Button color variants
 */
export type ButtonVariant = "green" | "outline" | "grey";

/**
 * Size options only for green buttons
 * If not green, leave blockSize undefined
 */
export type ButtonBlockSize = "bigGreen" | "smallGreen" | undefined;

/**
 * Props for the Button component.
 * - `variant`: visual style of the button
 * - `blockSize`: size for green variant only
 * - `square`: square shape (optional)
 * - `disabled`: disables the button (optional)
 * - `children`: button content
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  blockSize?: ButtonBlockSize;
  square?: boolean;
  children?: ReactNode;
}

/**
 * Universal Button component.
 * Supports green, outline, grey variants.
 * For green, pass blockSize ('bigGreen' or 'smallGreen').
 */
export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    variant = "green",
    blockSize,
    square = false,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls[variant]]: true,
    [cls[`size_${blockSize}`]]: !!blockSize && variant === "green",
    [cls.square]: square,
  };

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, className ? [className] : [])}
      {...otherProps}
    >
      {children}
    </button>
  );
});
