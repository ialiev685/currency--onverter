import React, { useEffect, useState } from "react";

import { fetchQuotes } from "../services";
import { TableCurrencies } from "../components/TableCurrencies";
import { SelectBaseCurrency } from "../components/SelectBaseCurrency";

export const CurrenciesPage = () => {
  const [ListCurrencies, setListCurrencies] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState("RUB");

  const handleChangeBaseCurrency = (value) => {
    setBaseCurrency(value);
  };

  useEffect(() => {
    if (!baseCurrency) return;
    fetchQuotes(baseCurrency).then((resolve) => {
      const dataArr = Object.entries(resolve.conversion_rates);
      const dataFilter = dataArr.filter(([key]) =>
        ["EUR", "USD", "RUB"].includes(key)
      );

      setListCurrencies(dataFilter);
    });
  }, [baseCurrency]);

  return (
    <div>
      <h2>Курсы валют</h2>
      <SelectBaseCurrency
        listOption={ListCurrencies}
        onChange={handleChangeBaseCurrency}
      />
      <TableCurrencies data={ListCurrencies} />
    </div>
  );
};
