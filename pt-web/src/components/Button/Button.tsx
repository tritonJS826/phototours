import {
  ComponentPropsWithoutRef,
  ElementType,
  forwardRef,
  Ref,
} from "react";
import styles from "src/components/Button/Button.module.scss";

type ButtonOwnProps = {
  variant?: "primary" | "outline";
  size?: "md" | "sm";
  block?: boolean;
  className?: string;
  as?: ElementType;
};

type PolymorphicProps<C extends ElementType> =
  ButtonOwnProps & Omit<ComponentPropsWithoutRef<C>, keyof ButtonOwnProps>;

const defaultElement = "button";

export const Button = forwardRef(
  <C extends ElementType = typeof defaultElement>(
    props: PolymorphicProps<C>,
    ref: Ref<Element>,
  ) => {
    const {
      as,
      variant = "primary",
      size = "md",
      block = false,
      className,
      ...rest
    } = props;

    const Component = (as ?? defaultElement) as ElementType;

    const classes = [
      styles.btn,
      variant ? styles[variant] : "",
      size ? styles[size] : "",
      block ? styles.block : "",
      className ? className : "",
    ]
      .filter(Boolean)
      .join(" ");

    const extra =
      Component === "button" ? {type: "button" as const} : {};

    return (
      <Component
        ref={ref}
        className={classes}
        {...extra}
        {...rest}
      />
    );
  },
);

Button.displayName = "Button";
