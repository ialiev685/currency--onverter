import React from "react";

export const SelectConversionTo = ({ listOption, onChange, value }) => {
  return (
    <div>
      <select
        name="currency"
        id="currency"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {listOption.map(({ currency }) => (
          <option value={currency} key={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};
