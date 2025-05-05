import React from "react";

const InputBox = ({
  label,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "USD",
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={label}>{label}</label>
      <select
        className="px-4 py-1 text-white rounded-sm border-1 border-white"
        id="label"
        value={selectCurrency}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
      >
        {currencyOptions.map((currency) => (
          <option key={currency} className="text-black" value={currency}>
            {currency.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputBox;
