import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const API_URL = `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`;
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setData(data[currency]));
  }, [currency]);
  return data;
};

export { useCurrencyInfo };
