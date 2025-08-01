import React from "react";

interface CustomInputProps {
  id?: string;
  type: "text" | "email" | "password";
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  darkMode?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  id,
  type,
  label,
  placeholder = "",
  value,
  onChange,
  darkMode = false,
}) => {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className={`block text-sm font-medium ${
          darkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus:border-orange-500 disabled:cursor-not-allowed disabled:opacity-50 ${
          darkMode
            ? "bg-[#212734] border-gray-600 text-white"
            : "bg-white border-gray-300 text-gray-900"
        }`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;
