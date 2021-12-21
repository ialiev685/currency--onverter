// const API_KEY = "f24a41f818e8f5c29c31676c462fcc53";
// const BASE_URL = "https://api.exchangeratesapi.io/v1/";

const API_KEY = "9c73a7d4f9ced4a326e5929f";
const BASE_URL = "https://v6.exchangerate-api.com/v6/";

export const fetchQuotes = (baseCurrency = "RUB") => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${BASE_URL}/${API_KEY}/latest/${baseCurrency}`, true);

    xhr.send();

    xhr.onload = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.response));
        }
      }
    };
  });
};

export const fetchConvension = (from, to) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${BASE_URL}/${API_KEY}/pair/${from}/${to}`, true);

    xhr.send();

    xhr.onload = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.response));
        }
      }
    };
  });
};

// export const fetchQuotes = () => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(
//       "GET",
//       "https://api.exchangeratesapi.io/v1/latest?access_key=f24a41f818e8f5c29c31676c462fcc53&base=RUB&symbols=USD,EUR,RUB",
//       true
//     );
//     xhr.send();

//     xhr.onload = function () {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           resolve(JSON.parse(xhr.response));
//         }
//       }
//     };
//   });
// };
