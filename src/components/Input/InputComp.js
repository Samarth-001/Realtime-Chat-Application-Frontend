import React from "react";

const InputComp = ({
  label = "",
  name = "",
  type = "text",
  clas = "",
  isRequired = false,
  placeholder = "",
  value='',
  onChange=()=>{},
}) => {
  return (
    <div>
      <label
        for="first_name"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${clas}`}
        placeholder={placeholder}
        required={isRequired}
        onChange={onChange}
      />
    </div>
  );
};

export default InputComp;
