import React, { useState, useEffect } from "react";

export const SelectBaseCurrency = ({ listOption, onChange }) => {
  console.log(listOption);

  return (
    <div>
      <select
        name="currency"
        id="currency"
        onChange={(e) => onChange(e.target.value)}
      >
        {listOption.map(([key]) => (
          <option value={key} key={key}>
            {key}
          </option>
        ))}
      </select>
    </div>
  );
};
