import type { ButtonHTMLAttributes } from "react";
import "./button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary";
  size?: "m" | "l";
  children: React.ReactNode;
}

const Button = ({
  variant = "primary",
  size = "m",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const buttonClasses =
    `button button--${variant} button--${size} text-${size} ${className}`.trim();

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

Button.displayName = "Button";

export default Button;
