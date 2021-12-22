import React from "react";
import s from "./TableCurrencies.module.css";

export const TableCurrencies = ({ data }) => {
  const markupSceleton = (
    <>
      <tr>
        <td>EUR</td>
        <td>0</td>
      </tr>
      <tr>
        <td>USD</td>
        <td>0</td>
      </tr>
      <tr>
        <td>RUB</td>
        <td>0</td>
      </tr>
    </>
  );
  return (
    <div className={s.wrapper}>
      <table className={s.table}>
        <thead>
          <tr>
            <th>Валюта</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0
            ? data.map(({ currency, value }) => (
                <tr key={currency}>
                  <td>{currency}</td>
                  <td>{(1 / value).toFixed(2)}</td>
                </tr>
              ))
            : markupSceleton}
        </tbody>
      </table>
    </div>
  );
};
