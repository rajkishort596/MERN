import { useState } from "react";
import Bg_Url from "./assets/bg.png";
import CurrencyConvertor from "./components/CurrencyConvertor";
function App() {
  return (
    <div
      className="min-h-screen w-full flex flex-wrap justify-center items-center bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url(${Bg_Url})`,
      }}
    >
      <CurrencyConvertor />
    </div>
  );
}

export default App;
