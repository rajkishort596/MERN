import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/Sunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import "./InfoBox.css";
const InfoBox = ({ WeatherData }) => {
  const Hot_Url =
    "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const Cold_Url =
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const Rain_Url =
    "https://plus.unsplash.com/premium_photo-1671406233410-9727cf249910?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <Card sx={{ maxWidth: 345 }} className="InfoCard">
      <CardMedia
        sx={{ height: 140 }}
        image={
          WeatherData.humidity > 80
            ? Rain_Url
            : WeatherData.temperature > 20
            ? Hot_Url
            : Cold_Url
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {WeatherData.city}{" "}
          {WeatherData.humidity > 80 ? (
            <ThunderstormIcon />
          ) : WeatherData.temperature > 20 ? (
            <SunnyIcon />
          ) : (
            <AcUnitIcon />
          )}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary" }}
          component={"span"}
        >
          <p>Temperature = {WeatherData.temperature}&deg;C</p>
          <p>Humidity = {WeatherData.humidity}</p>
          <p>Min Temp = {WeatherData.minTemperature}&deg;C</p>
          <p>Max Temp = {WeatherData.maxTemperature}&deg;C</p>
          <p>
            The Weather can be describes as <i>{WeatherData.weather}</i> and
            feels like {WeatherData.feelsLike}
          </p>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
