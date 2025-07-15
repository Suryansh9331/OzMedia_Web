import React from "react";

const Textarea = ({
  label,
  placeholder,
  value,
  onChange,
  required = false,
  rows = 4,
  className = "",
  ...props
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-black font-roboto text-xl mb-2">
          {label}
        </label>
      )}
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        className={`w-full bg-transparent border border-gray-300 rounded-lg p-2 text-black placeholder-black/60 focus:outline-none focus:border-black ${className}`}
        {...props}
      />
    </div>
  );
};

export default Textarea;
