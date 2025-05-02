import { WeatherData } from "../../Types";
import "./WeatherTile.css";

interface Props {
  weatherData: WeatherData;
  selected: boolean;
}
function WeatherTile({ weatherData, selected }: Props) {
  const date = new Date(weatherData.dt_txt);
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let cardClass = "";
  if (weatherData.weather[0].icon === "01n")
    weatherData.weather[0].icon = "01d";
  if (selected) cardClass += " weather_tile_selected";
  return (
    <div className={"card weather_tile" + cardClass}>
      <div className="card-body text-center">
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          className="img-fluid rounded-start"
          alt={weatherData.weather[0].description}
        />
        <h3>{daysOfWeek[date.getDay()]}</h3>
      </div>
    </div>
  );
}

export default WeatherTile;
