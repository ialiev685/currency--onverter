import React, { useEffect, useState } from "react";

// import { fetchQuotes } from "../services";
import { TableCurrencies } from "../components/TableCurrencies";
import { SelectBaseCurrency } from "../components/SelectBaseCurrency";
//redux
import { useDispatch, useSelector } from "react-redux";
import { thunkfetchQuotes } from "../redux";
import { getDataCurrencies } from "../redux";

export const CurrenciesPage = () => {
  const [ListCurrencies, setListCurrencies] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState("RUB");

  const dispatch = useDispatch();
  const dataStore = useSelector(getDataCurrencies);
  console.log(dataStore);

  const handleChangeBaseCurrency = (value) => {
    setBaseCurrency(value);
  };

  useEffect(() => {
    if (!baseCurrency) return;
    console.log("Запрос");
    dispatch(thunkfetchQuotes(baseCurrency));
  }, [baseCurrency, dispatch]);

  return (
    <div>
      <h2>Курсы валют</h2>
      {dataStore.length && (
        <SelectBaseCurrency
          listOption={dataStore}
          onChange={handleChangeBaseCurrency}
        />
      )}
      <TableCurrencies data={dataStore} />
    </div>
  );
};
