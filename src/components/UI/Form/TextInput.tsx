import React from "react";
import "./TextInput.css";

interface IProps {
  type: string;
  name: string;
  value: string;
  changed: (e: React.FormEvent<HTMLInputElement>) => void;
  placeholder: string;
  error: string;
}

const TextInput: React.FC<IProps> = ({
  type,
  name,
  value,
  changed,
  placeholder,
  error,
}) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={changed}
        name={name}
      />
      {error && (
        <div>
          <label className="validation-error">{error}</label>
        </div>
      )}
    </div>
  );
};

export default TextInput;
