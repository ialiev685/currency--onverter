import React, { useState, useEffect, useCallback } from "react";
import NumberFormat from "react-number-format";
import { SelectBaseCurrency } from "../SelectBaseCurrency";
import { SelectConversionTo } from "../SelectConversionTo";
import { fetchConvension } from "../../services";
//redux
import { useSelector, useDispatch } from "react-redux";
import {
  getBaseCurrency,
  getDataCurrencies,
  thunkfetchQuotes,
} from "../../redux";

//стили
import s from "./Converter.module.css";
//lodash
const debounce = require("lodash.debounce");

export const Converter = () => {
  const currentCurrency = useSelector(getBaseCurrency);
  const dataStore = useSelector(getDataCurrencies);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState("");
  const [baseCurrency, setBaseCurrency] = useState(currentCurrency || "RUB");
  const [conversionTo, setConversionTo] = useState("USD");
  const [total, setTotal] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceFn = useCallback(
    debounce(
      (baseCurrency, conversionTo, amount) =>
        fetchConvension(baseCurrency, conversionTo, amount).then((resolve) =>
          setTotal(resolve)
        ),
      800
    ),
    []
  );

  useEffect(() => {
    if (dataStore.length) return;

    dispatch(thunkfetchQuotes(baseCurrency));
  }, [baseCurrency, dataStore.length, dispatch]);

  useEffect(() => {
    if (!amount) return;

    debounceFn(baseCurrency, conversionTo, amount);
  }, [amount, baseCurrency, conversionTo, debounceFn]);

  return (
    <div className={s.converter}>
      {total ? (
        <p
          className={s.converter__total}
        >{`${total.conversion_result.toLocaleString()} ${
          total.target_code
        }`}</p>
      ) : (
        <p className={s.converter__total}>Пусто</p>
      )}

      <NumberFormat
        thousandsGroupStyle="thousand"
        className={s.converter__amount}
        decimalSeparator="."
        thousandSeparator={true}
        value={amount}
        type="text"
        displayType="input"
        onValueChange={(values) => {
          const { value } = values;

          setAmount(value);
        }}
      />
      <div className={s.converter__wrapperSelect}>
        <SelectBaseCurrency
          listOption={dataStore}
          onChange={setBaseCurrency}
          value={baseCurrency}
        />
        <p className={s.converter__text}>на</p>
        <SelectConversionTo
          listOption={dataStore}
          onChange={setConversionTo}
          value={conversionTo}
        />
      </div>
    </div>
  );
};
