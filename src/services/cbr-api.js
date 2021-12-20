export const fetchQuotes = () => {
  let isLoading = true;
  let data = {};

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://www.cbr-xml-daily.ru/daily_json.js", true);
  xhr.send();

  xhr.onload = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        JSON.parse(xhr.response);
      }
    }
  };
};
