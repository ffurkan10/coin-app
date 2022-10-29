import React from "react";

const Input = ({ onChange, value }) => {
  return (
    <div className="searchInput">
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
