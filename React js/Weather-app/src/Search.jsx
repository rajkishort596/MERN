import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Search.css";
import getWeather from "./Weather.Api.js";
const Search = ({ setWeatherState }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setCity(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
    try {
      const WeatherData = await getWeather(city);
      console.log(WeatherData);
      await setWeatherState(WeatherData);
      setError(false);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit} className="form">
        <TextField
          id="city"
          label="Enter City Name"
          value={city}
          variant="outlined"
          onChange={handleChange}
        />
        <Button type="submit" variant="contained">
          Search
        </Button>
      </form>
      {error && (
        <p style={{ color: "red" }}>Can't find Weather of that Place</p>
      )}
    </div>
  );
};

export default Search;
