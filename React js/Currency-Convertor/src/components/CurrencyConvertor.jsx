import React, { useState } from "react";
import { useCurrencyInfo } from "../hooks/useCurrencyInfo";
import InputBox from "./InputBox";

const CurrencyConvertor = () => {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [result, setResult] = useState("Enter an amount to convert");
  const [isLoading, setIsLoading] = useState(false);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setIsLoading(true);

    const converted = amount * currencyInfo[to];

    setConvertedAmount(converted);
    setResult(
      `${amount} ${from.toUpperCase()} = ${converted.toFixed(
        2
      )} ${to.toUpperCase()}`
    );

    setTimeout(() => setIsLoading(false), 500); // simulate loading
  };

  return (
    <div className="w-[410px] flex flex-col gap-2 mx-auto px-8 py-16 rounded-lg backdrop-blur-[30px] bg-[rgba(2,7,40,0.5)] border border-[rgba(255,255,255,0.3)] shadow-[0_8px_32px_rgba(0,0,0,0.5)] scale-110">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Currency Converter
      </h2>

      <div className="mb-4">
        <label htmlFor="amount" className="block text-sm mb-1">
          Enter Amount
        </label>
        <input
          type="number"
          id="amount"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full px-4 py-2 rounded-md backdrop-blur-[30px] bg-[rgba(2,7,40,0.5)] border-white border-1 text-white focus:outline-none "
        />
      </div>

      <div className="flex items-end justify-between mb-4">
        <InputBox
          label={"From"}
          currencyOptions={options}
          selectCurrency={from}
          onCurrencyChange={(currency) => setFrom(currency)}
        />

        <div
          className="swap-icon border-1 border-white rounded-full p-1.5 cursor-pointer"
          onClick={swap}
        >
          <svg
            width="16"
            viewBox="0 0 20 19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.13 11.66H.22a.22.22 0 0 0-.22.22v1.62a.22.22 0 0 0 .22.22h16.45l-3.92 4.94a.22.22 0 0 0 .17.35h1.97c.13 0 .25-.06.33-.16l4.59-5.78a.9.9 0 0 0-.7-1.43zM19.78 5.29H3.34L7.26.35A.22.22 0 0 0 7.09 0H5.12a.22.22 0 0 0-.34.16L.19 5.94a.9.9 0 0 0 .68 1.4H19.78a.22.22 0 0 0 .22-.22V5.51a.22.22 0 0 0-.22-.22z"
              fill="#fff"
            />
          </svg>
        </div>

        <InputBox
          label={"To"}
          currencyOptions={options}
          selectCurrency={to}
          onCurrencyChange={(currency) => setTo(currency)}
        />
      </div>

      <button
        onClick={convert}
        className=" cursor-pointer w-full px-8 py-2 mt-2 rounded-md bg-white text-black font-semibold transition"
      >
        Get Exchange Rate
      </button>

      <div className="mt-6 text-center backdrop-blur-[50px] bg-[rgba(255, 255, 255, 0.15)] text-white px-8 py-3 rounded-lg">
        <p className="font-bold text-lg">
          {isLoading ? "Getting exchange rate..." : result}
        </p>
      </div>
    </div>
  );
};

export default CurrencyConvertor;
