import React, { useState, useEffect, useCallback } from "react";
import NumberFormat from "react-number-format";
import { SelectBaseCurrency } from "../SelectBaseCurrency";
import { thunkfetchQuotes } from "../../redux";
import { fetchConvension } from "../../services";
import { useSelector, useDispatch } from "react-redux";

const debounce = require("lodash.debounce");

export const Converter = () => {
  const [value, setValue] = useState("");
  const [chooseCurrency, setchooseCurrency] = useState("RUB");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkfetchQuotes);
    fetchConvension("RUB", "EUR").then((response) =>
      alert((1 / response.conversion_rate).toFixed(2))
    );
  }, []);

  return (
    <div>
      <p></p>

      <p></p>
      <NumberFormat
        thousandsGroupStyle="thousand"
        decimalSeparator="."
        thousandSeparator={true}
        value={value}
        type="text"
        displayType="input"
        onValueChange={(values) => {
          const { value } = values;

          setValue(value);
        }}
      />
    </div>
  );
};
