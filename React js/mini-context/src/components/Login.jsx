import React, { useContext, useState } from "react";
import userContext from "../contexts/userContext";

const Login = () => {
  const { setUser } = useContext(userContext);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <form className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 space-y-4">
      <div className="flex flex-col">
        <label
          htmlFor="username"
          className="mb-1 text-sm font-medium text-gray-700"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="password"
          className="mb-1 text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        onClick={(e) => handleSubmit(e)}
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
