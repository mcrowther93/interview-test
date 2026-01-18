import type { HTMLAttributes } from "react";
import "./badge.css";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant: "admin" | "editor" | "viewer" | "guest" | "deactivated";
  children: string;
  onClick?: () => void;
}

const Badge = ({ variant = "viewer", children, onClick, className = "", ...props }: BadgeProps) => {
  const badgeClasses = `badge badge--${variant} ${className}`.trim();

  const Component = onClick ? "button" : "span";

  return (
    <Component className={badgeClasses} {...props}>
      {children}
    </Component>
  );
};

Badge.displayName = "Badge";

export default Badge;
