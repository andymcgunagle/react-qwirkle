import { useRef } from "react";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

export default function Dialog({
  children,
  handler,
  onClick,
  onSubmit,
}: DialogProps) {

  const dialogRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(dialogRef, handler);

  return (
    <div
      className="modal card brand light column-center gap-2"
      onClick={onClick}
      onSubmit={onSubmit}
      ref={dialogRef}
    >
      {children}
    </div>
  );
};

interface DialogProps {
  children: JSX.Element | JSX.Element[];
  handler: (value: React.SetStateAction<boolean>) => void;
  onClick?: () => void;
  onSubmit?: (e: React.FormEvent) => Promise<void>;
};