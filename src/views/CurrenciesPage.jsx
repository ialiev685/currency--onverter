import React, { useEffect, useState } from "react";

import { TableCurrencies } from "../components/TableCurrencies";
import { SelectBaseCurrency } from "../components/SelectBaseCurrency";
//стили
import s from "./CurrenciesPage.module.css";
//redux
import { useDispatch, useSelector } from "react-redux";
import { thunkfetchQuotes, getBaseCurrency, getDataCurrencies } from "../redux";

export const CurrenciesPage = () => {
  const currentCurrency = useSelector(getBaseCurrency);
  const dataStore = useSelector(getDataCurrencies);

  const [baseCurrency, setBaseCurrency] = useState(currentCurrency || "RUB");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkfetchQuotes(baseCurrency));
  }, [baseCurrency, dispatch]);

  return (
    <div className={s.currencies}>
      <h2 className={s.currencies__title}>Курсы валют</h2>
      <TableCurrencies data={dataStore} />
      {dataStore.length && (
        <>
          <h3 className={s.currencies__title}>Базовая валюта</h3>
          <SelectBaseCurrency
            listOption={dataStore}
            value={baseCurrency}
            onChange={setBaseCurrency}
          />
        </>
      )}
    </div>
  );
};
