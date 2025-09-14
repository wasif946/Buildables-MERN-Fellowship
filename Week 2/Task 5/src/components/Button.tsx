// src/components/Button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  // Use custom spacing and border radius classes
  const base = "px-md py-sm rounded-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary";

  // Use custom color classes
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover",
    secondary: "bg-secondary text-white hover:bg-secondary-hover",
    // Adjust outline variant to use tokens
    outline: "border border-secondary text-secondary hover:bg-gray-100",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
