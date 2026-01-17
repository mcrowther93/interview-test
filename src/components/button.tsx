import { ButtonHTMLAttributes, forwardRef } from 'react';
import './button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary';
  size?: 'm' | 'l';
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'm', children, className = '', ...props }, ) => {
    const buttonClasses = `button button--${variant} button--${size} ${className}`.trim();

    return (
      <button
        className={buttonClasses}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;