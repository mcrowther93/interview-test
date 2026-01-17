import type { HTMLAttributes } from "react";
import "./badge.css";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "admin" | "editor" | "viewer" | "guest" | "deactivated";
  children: string;
}

const Badge = ({ variant = "viewer", children, className = "", ...props }: BadgeProps) => {
  const badgeClasses = `badge badge--${variant} ${className}`.trim();

  return (
    <p className={badgeClasses} {...props}>
      {children}
    </p>
  );
};

Badge.displayName = "Badge";

export default Badge;
