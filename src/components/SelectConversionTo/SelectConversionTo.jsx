import React from "react";
import s from "./SelectConversionTo.module.css";

export const SelectConversionTo = ({ listOption, onChange, value }) => {
  return (
    <div>
      <select
        name="currency"
        className={s.selectConvension}
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
