import { useEffect, useState } from "react";
import Search from "./Search";
import InfoBox from "./InfoBox";
import getWeather from "./Weather.Api.js";
const Weather = () => {
  const [WeatherData, setWeatherData] = useState({});

  const setWeatherState = (WeatherData) => {
    setWeatherData(WeatherData);
  };
  useEffect(() => {
    const getFirstWeather = async () => {
      const data = await getWeather("Patna");
      setWeatherState(data);
    };
    getFirstWeather();
  }, []);
  return (
    <>
      <Search setWeatherState={setWeatherState} />
      <InfoBox WeatherData={WeatherData} />
    </>
  );
};

export default Weather;
