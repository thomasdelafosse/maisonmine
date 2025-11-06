import { FieldConfig } from "@/components/features/contact/types/contact-types";

type FormFieldProps = FieldConfig & {
  required: boolean;
  rows?: number;
  error: string;
};

export const FormField = ({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
  options,
  rows = 4,
  error,
}: FormFieldProps) => {
  const baseClasses =
    "appearance-none border border-gray-300 rounded w-full py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent placeholder-gray-400";
  const errorClasses = error
    ? "border-red-500 focus:ring-red-500"
    : "border-gray-300 focus:ring-indigo-500";
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
    <div className="mb-0">
      <label className="block text-gray-700 text-xs font-medium mb-1.5">
        {label}
      </label>
      {renderField()}
      {error && <p className="text-red-500 text-xs italic mt-1">{error}</p>}
    </div>
  );
};
