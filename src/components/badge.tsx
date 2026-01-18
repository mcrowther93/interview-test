import type { HTMLAttributes } from "react";
import "./badge.css";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant: "admin" | "editor" | "viewer" | "guest" | "deactivated";
  title: string;
  onClick?: () => void;
}

const Badge = ({ variant = "viewer", title, onClick, className = "", ...props }: BadgeProps) => {
  const badgeClasses = `badge badge--${variant} ${className}`.trim();

  const Component = onClick ? "button" : "span";

  return (
    <Component className={badgeClasses} onClick={onClick} {...props}>
      {title}
    </Component>
  );
};

Badge.displayName = "Badge";

export default Badge;
