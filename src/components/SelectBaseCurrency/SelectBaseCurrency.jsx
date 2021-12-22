import React from "react";
import s from "./SelectBaseCurrency.module.css";

export const SelectBaseCurrency = ({ listOption, onChange, value }) => {
  return (
    <div>
      <select
        name="currency"
        className={s.selectCurrency}
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
