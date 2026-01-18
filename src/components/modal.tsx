import type { HTMLAttributes, ReactNode } from "react";
import { createPortal } from "react-dom";

import "./modal.css";

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  children: ReactNode;
}

function ModalRoot({ open, children, className = "", ...props }: ModalProps) {
  if (!open) return null;

  return createPortal(
    <div className="modal-backdrop">
      <div className={`modal ${className}`} role="dialog" aria-modal="true" {...props}>
        {children}
      </div>
    </div>,
    document.body,
  );
}

interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function ModalHeader({ children, className = "", ...props }: ModalHeaderProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

interface ModalBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function ModalBody({ children, className = "", ...props }: ModalBodyProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function ModalFooter({ children, className = "", ...props }: ModalFooterProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

const Modal = Object.assign(ModalRoot, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});

export default Modal;
