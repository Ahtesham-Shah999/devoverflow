"use client";

interface ContinueProps {
  fields: (string | undefined)[];
  onClick?: () => void;
  label?: string;
}

export default function Continue({ fields, onClick, label = "CONTINUE" }: ContinueProps) {
  // Button disabled if any field is missing or empty
  const isDisabled = fields.some((field) => !field?.trim());

  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={`w-full text-white font-medium py-3 px-4 rounded-lg mb-6 text-sm tracking-wide transition-all bg-gradient-to-r from-[#FF7000] via-[#E2985E] to-[#E2995F]
        ${isDisabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"}
      `}
    >
      {label}
    </button>
  );
}
