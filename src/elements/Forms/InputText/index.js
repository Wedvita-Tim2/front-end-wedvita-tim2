import React, { useState } from "react";

const InputText = (props) => {
  const initialValue = props.value || ""; // Default to an empty string if value is not provided
  const [characterCount, setCharacterCount] = useState(initialValue.length);

  const className = [props.className];
  className.push("py-2.5", "px-5", "shadow-md");

  const additionalProps = props.isRequired ? { required: true } : {};

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setCharacterCount(inputValue.length);

    if (props.maxLength && inputValue.length >= props.maxLength) {
        const truncatedValue = inputValue.slice(0, props.maxLength);
        setCharacterCount(truncatedValue.length);
        props.onChange({ ...e, target: { ...e.target, value: truncatedValue } });
      } else {
        setCharacterCount(inputValue.length);
        props.onChange(e);
      }
  };

  const element =
    props.element === "input" ? (
      <div className="relative">
        <input
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={handleInputChange}
          className={className.join(" ")}
          {...additionalProps}
        />
        {props.maxLength && (
          <div className="absolute bottom-2 right-2 text-gray-500 text-sm">
            {characterCount}/{props.maxLength}
          </div>
        )}
      </div>
    ) : (
        <div className="flex flex-wrap gap-2">
            <textarea
              name={props.name}
              rows="6"
              value={props.value}
              onChange={handleInputChange}
              placeholder={props.placeholder}
              className={className.join(" ")}
              {...additionalProps}
            />
            {props.maxLength && (
              <div className="absolute bottom-2 right-2 text-gray-500 text-sm">
                {characterCount}/{props.maxLength}
              </div>
            )}

        </div>
    );

  return <>{element}</>;
};

export default InputText;
