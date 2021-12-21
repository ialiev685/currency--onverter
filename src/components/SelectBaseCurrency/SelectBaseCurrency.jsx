import React from "react";

export const SelectBaseCurrency = ({ listOption, onChange }) => {
  console.log(listOption);
  return (
    <div>
      <select
        name="currency"
        id="currency"
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
