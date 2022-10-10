import React, { useState } from "react";
import "./FormInput.css";

const FormInput = (props) => {
  const {
    handleOnChange,
    value,
    idname,
    errorMessage,
    label,

    ...formInputProps
  } = props;

  const [focus, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus(true);
  };

  return (
    <div className="form-input">
      <label htmlFor={idname}>{label}</label>
      <input
        {...formInputProps}
        onChange={handleOnChange}
        onBlur={handleFocus}
        id={idname}
        focused={focus.toString()}
        placeholder={idname}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
