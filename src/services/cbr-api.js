const API_KEY = "9c73a7d4f9ced4a326e5929f";
const BASE_URL = "https://v6.exchangerate-api.com/v6/";

export const fetchQuotes = (baseCurrency = "RUB") => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${BASE_URL}/${API_KEY}/latest/${baseCurrency}`, true);

    xhr.send();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject(xhr.statusText || new Error("internet disconnected"));
        }
      }
    };
  });
};

export const fetchConvension = (from, to, amount) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      `${BASE_URL}/${API_KEY}/pair/${from}/${to}/${amount}`,
      true
    );

    xhr.send();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject(xhr.statusText || new Error("internet disconnected"));
        }
      }
    };
  });
};
