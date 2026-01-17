import type { HTMLAttributes, ReactNode } from "react";

import "./card.css";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function CardRoot({ children, className = "", ...props }: CardProps) {
  return (
    <article className={`card ${className}`.trim()} {...props}>
      {children}
    </article>
  );
}

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function CardHeader({ children, className = "", ...props }: CardHeaderProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function CardBody({ children, className = "", ...props }: CardBodyProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function CardFooter({ children, className = "", ...props }: CardFooterProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});

export default Card;
