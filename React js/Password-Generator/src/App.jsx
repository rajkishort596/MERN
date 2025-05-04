import { useCallback, useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumberAllowed) str += "0123456789";
    if (isCharAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i < length; i++) {
      let randomCharPos = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(randomCharPos);
    }
    setPassword(pass);
  }, [length, isNumberAllowed, isCharAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, isCharAllowed, isNumberAllowed]);

  return (
    <>
      <div className="md:w-2/3 w-[90%] m-auto border-2 border-black rounded-lg overflow-hidden shadow-black">
        <div className="bg-linear-65 from-purple-500 to-pink-500 p-8 text-white">
          <h1 className="text-3xl font-bold ">Password Generator</h1>
        </div>
        <div className="p-8">
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3
              bg-gray-100 font-medium"
              placeholder="Password"
              readOnly
              ref={passwordRef}
            />
            <button
              className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer hover:bg-blue-500"
              onClick={copyPasswordToClipboard}
            >
              copy
            </button>
          </div>
          <div className="flex justify-center text-sm gap-x-10">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label className="font-semibold text-lg text-fuchsia-600">
                Length: {length}
              </label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={isNumberAllowed}
                id="numberInput"
                onChange={() => {
                  setIsNumberAllowed((prev) => !prev);
                }}
              />
              <label
                htmlFor="numberInput"
                className="font-semibold text-lg text-fuchsia-600"
              >
                Numbers
              </label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={isCharAllowed}
                id="characterInput"
                onChange={() => {
                  setIsCharAllowed((prev) => !prev);
                }}
              />
              <label
                htmlFor="characterInput"
                className="font-semibold text-lg text-fuchsia-600"
              >
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
