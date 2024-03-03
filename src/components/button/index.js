import React from "react";

const ButtonComp = ({
  name,
  type = "button",
  className = "",
  disabled = false}
) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center ${className}`}
    >
      {name}
    </button>
  );
};

export default ButtonComp;
