import type { InputHTMLAttributes } from "react";
import "./input.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ className = "", ...props }: InputProps) => {
  const InputClasses = `Input ${className}`.trim();

  return <input className={InputClasses} {...props} />;
};

Input.displayName = "Input";

export default Input;
