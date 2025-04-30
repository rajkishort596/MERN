import React, { useEffect, useState } from "react";

const Joker = () => {
  const [jokes, setJokes] = useState({});
  const URL = "https://official-joke-api.appspot.com/jokes/random";
  const getJokes = async () => {
    const respose = await fetch(URL);
    const jsonRespose = await respose.json();
    setJokes({ setup: jsonRespose.setup, punchline: jsonRespose.punchline });
  };
  useEffect(() => {
    async function getFirstJoke() {
      const respose = await fetch(URL);
      const jsonRespose = await respose.json();
      setJokes({ setup: jsonRespose.setup, punchline: jsonRespose.punchline });
    }
    getFirstJoke();
  }, []);
  return (
    <div>
      <h1>Jokes</h1>
      <h3>{jokes.setup}</h3>
      <h3>{jokes.punchline}</h3>
      <button onClick={getJokes}>get Jokes</button>
    </div>
  );
};

export default Joker;
