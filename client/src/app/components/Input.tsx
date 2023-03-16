import React from "react";
import { Field } from "formik";

type InputProps = {
  id: string;
  name: string;
  placeholder: string;
  className?: string;
};

export default function Input({
  id,
  name,
  placeholder,
  className = "",
}: InputProps) {
  return (
    <div className={className}>
      <Field
        className={`input ${className}`}
        id={id}
        name={name}
        placeholder={placeholder}
      />
      <span className="input-border"></span>
    </div>
  );
}
