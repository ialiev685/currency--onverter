import React, { useState, useEffect, useCallback } from "react";
import NumberFormat from "react-number-format";
import { SelectBaseCurrency } from "../SelectBaseCurrency";
import { SelectConversionTo } from "../SelectConversionTo";
import { fetchConvension } from "../../services";
//redux
import { useSelector, useDispatch } from "react-redux";
import { getBaseCurrency, getDataCurrencies } from "../../redux";
//lodash
const debounce = require("lodash.debounce");

export const Converter = () => {
  const currentCurrency = useSelector(getBaseCurrency);
  const dataStore = useSelector(getDataCurrencies);

  const [amount, setAmount] = useState("");
  const [baseCurrency, setBaseCurrency] = useState(currentCurrency || "RUB");
  const [conversionTo, setConversionTo] = useState("USD");
  const [total, setTotal] = useState("");

  // const dispatch = useDispatch();

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
    if (!amount) return;

    debounceFn(baseCurrency, conversionTo, amount);
  }, [amount, baseCurrency, conversionTo, debounceFn]);

  return (
    <div>
      {total ? (
        <p>{`${total.conversion_result.toLocaleString()} ${
          total.target_code
        }`}</p>
      ) : (
        <p>Пусто</p>
      )}

      <NumberFormat
        thousandsGroupStyle="thousand"
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

      <SelectBaseCurrency
        listOption={dataStore}
        onChange={setBaseCurrency}
        value={baseCurrency}
      />
      <SelectConversionTo
        listOption={dataStore}
        onChange={setConversionTo}
        value={conversionTo}
      />
    </div>
  );
};
