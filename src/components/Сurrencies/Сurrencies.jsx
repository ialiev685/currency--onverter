import React, { useEffect, useState } from "react";
import { fetchQuotes } from "../../services";

export const Сurrencies = () => {
  const [state, setstate] = useState({});

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = () => {
    const xhr = new XMLHttpRequest();
    //https://www.cbr-xml-daily.ru/daily_json.js
    //"https://www.cbr-xml-daily.ru/latest.js"
    xhr.open("GET", "https://www.cbr-xml-daily.ru/daily_json.js", true);
    xhr.send();

    xhr.onload = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          setstate(JSON.parse(xhr.response));
        }
      }
    };
  };

  return <div></div>;
};
