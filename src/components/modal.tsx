import { createContext, type HTMLAttributes, type ReactNode, useContext } from "react";
import { createPortal } from "react-dom";

import "./modal.css";

interface ModalContextValue {
  onClose?: () => void;
}

const ModalContext = createContext<ModalContextValue>({});

export const useModalContext = () => useContext(ModalContext);

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose?: () => void;
  children: ReactNode;
}

function ModalRoot({ open, onClose, children, className = "", ...props }: ModalProps) {
  if (!open) return null;

  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div className={`modal ${className}`} role="dialog" aria-modal="true" {...props}>
        {children}
      </div>
    </ModalContext.Provider>,
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
