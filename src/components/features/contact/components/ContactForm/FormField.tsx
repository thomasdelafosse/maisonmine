import React from "react";
import { ContactFormData } from "@/components/features/contact/types/contact.types";

type FormFieldProps = {
  label: string;
  name: keyof ContactFormData;
  type?: "text" | "email" | "tel" | "select" | "textarea";
  placeholder: string;
  required?: boolean;
  options?: string[];
  rows?: number;
  error?: string;
};

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
  options,
  rows = 4,
  error,
}) => {
  const baseClasses =
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline";
  const errorClasses = error ? "border-red-500" : "";
  const classes = `${baseClasses} ${errorClasses}`;

  const renderField = () => {
    if (type === "select" && options) {
      return (
        <select name={name} className={classes} required={required}>
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      );
    }

    if (type === "textarea") {
      return (
        <textarea
          name={name}
          className={classes}
          placeholder={placeholder}
          rows={rows}
          required={required}
        />
      );
    }

    return (
      <input
        name={name}
        className={classes}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    );
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-600 text-sm font-medium mb-2">
        {label}
      </label>
      {renderField()}
      {error && <p className="text-red-500 text-xs italic mt-1">{error}</p>}
    </div>
  );
};
