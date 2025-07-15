import React from 'react';

const InputField = ({
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  required = false,
  className = '',
  ...props
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-black font-roboto font-bold text-[17px] mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full bg-transparent border border-gray-300 rounded-lg p-2 text-black placeholder-black/60 focus:outline-none focus:border-black ${className}`}
        {...props}
      />
    </div>
  );
};

export default InputField;
