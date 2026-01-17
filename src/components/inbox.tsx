import type { InputHTMLAttributes } from "react";
import "./inbox.css";

interface InboxProps extends InputHTMLAttributes<HTMLInputElement> {}

const Inbox = ({ className = "", ...props }: InboxProps) => {
  const inboxClasses = `inbox ${className}`.trim();

  return <input className={inboxClasses} {...props} />;
};

Inbox.displayName = "Inbox";

export default Inbox;
