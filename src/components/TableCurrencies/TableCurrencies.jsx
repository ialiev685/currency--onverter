import React from "react";

export const TableCurrencies = ({ data }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Валюта</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          {data.map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{(1 / value).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
