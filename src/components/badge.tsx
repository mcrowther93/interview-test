import { HTMLAttributes, forwardRef } from 'react';
import './badge.css';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'admin' | 'editor' | 'viewer' | 'guest' | 'deactivated';
  children: React.ReactNode;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'primary', children, className = '', ...props }, ref) => {
    const badgeClasses = `badge badge--${variant} ${className}`.trim();

    return (
      <span
        ref={ref}
        role="status"
        className={badgeClasses}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
