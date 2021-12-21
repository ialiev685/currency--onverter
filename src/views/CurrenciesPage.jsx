import React, { useEffect, useState } from "react";

import { TableCurrencies } from "../components/TableCurrencies";
import { SelectBaseCurrency } from "../components/SelectBaseCurrency";
//redux
import { useDispatch, useSelector } from "react-redux";
import { thunkfetchQuotes, getBaseCurrency, getDataCurrencies } from "../redux";

export const CurrenciesPage = () => {
  const currentCurrency = useSelector(getBaseCurrency);
  const dataStore = useSelector(getDataCurrencies);

  const [baseCurrency, setBaseCurrency] = useState(currentCurrency || "RUB");

  const dispatch = useDispatch();

  // const handleChangeBaseCurrency = (value) => {
  //   setBaseCurrency(value);
  // };

  useEffect(() => {
    dispatch(thunkfetchQuotes(baseCurrency));
  }, [baseCurrency, dispatch]);

  return (
    <div>
      <h2>Курсы валют</h2>
      {dataStore.length && (
        <SelectBaseCurrency
          listOption={dataStore}
          value={baseCurrency}
          onChange={setBaseCurrency}
        />
      )}
      <TableCurrencies data={dataStore} />
    </div>
  );
};
