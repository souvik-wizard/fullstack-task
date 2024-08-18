import React from "react";

const PrimaryButton = ({ label, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} cursor-pointer py-1 px-2 bg-[#1A1A1A] border border-slate-600 rounded-lg`}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
