import React, { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-white text-gray-500 border-2 border-gray-400 hover:bg-gray-200",
  secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200",
  outline:
    "bg-transparent border-2 border-gray-400 text-gray-600 hover:bg-gray-50",
  ghost: "bg-transparent text-gray-600 hover:bg-gray-100",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-1.5",
  lg: "px-4 py-2 text-lg",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonType>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "rounded focus:outline-none focus:shadow-outline transition-colors duration-200";
    const widthStyles = fullWidth ? "w-full" : "";
    const disabledStyles = "disabled:opacity-50 disabled:cursor-not-allowed";

    const combinedClassName = `
      ${baseStyles}
      ${variantStyles[variant]}
      ${sizeStyles[size]}
      ${widthStyles}
      ${disabledStyles}
      ${className}
    `
      .trim()
      .replace(/\s+/g, " ");

    return (
      <button
        ref={ref}
        className={combinedClassName}
        disabled={isLoading || disabled}
        {...props}
      >
        <span className="flex items-center justify-center gap-2">
          {isLoading && (
            <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-current" />
          )}
          {!isLoading && leftIcon}
          {children}
          {!isLoading && rightIcon}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";
