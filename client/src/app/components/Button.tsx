import React from "react";

type ButtonProps = {
  type: "button" | "submit" | "reset" | undefined;
  disabled?: boolean | undefined;
  children: JSX.Element | JSX.Element[];
  onClick?: () => void;
};

export default function Button({
  type,
  disabled,
  children,
  onClick,
}: ButtonProps) {
  return (
    <button type={type} disabled={disabled} className="btn" onClick={onClick}>
      {children && <span className="btn-content">{children}</span>}
    </button>
  );
}
