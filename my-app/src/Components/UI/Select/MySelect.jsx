import React from "react";

const MySelect = ({ defaultValue, options, selectedSort, onChange }) => {
  return (
    <select
      value={selectedSort}
      onChange={(event) => onChange(event.target.value)}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.title}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
