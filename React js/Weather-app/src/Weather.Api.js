const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "Your_OpenWeather_Secret_Kry";

const getWeather = async (city) => {
  const response = await fetch(
    `${API_URL}?q=${city},&appid=${API_KEY}&units=metric`
  );
  const JsonResponse = await response.json();
  console.log(JsonResponse);
  return {
    city: city,
    temperature: JsonResponse.main.temp,
    feelsLike: JsonResponse.main.feels_like,
    humidity: JsonResponse.main.humidity,
    maxTemperature: JsonResponse.main.temp_max,
    minTemperature: JsonResponse.main.temp_min,
    weather: JsonResponse.weather[0].description,
  };
};

export default getWeather;
