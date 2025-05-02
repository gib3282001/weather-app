import { useState } from "react";
import { WeatherData, Forecast } from "../Types";
import WeatherCard from "./WeatherCard";
import WeatherTile from "./WeatherTile/WeatherTile";

function WeatherForecast({ forecastData }: Forecast) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div>
      <WeatherCard weatherData={forecastData[currentIndex]}></WeatherCard>
      <nav className="navbar">
        <div
          className="container-fluid d-flex justify-content-center"
          style={{ gap: "1rem" }}
        >
          {forecastData.map((weatherData: WeatherData, index) => (
            <a onClick={() => setCurrentIndex(index)} key={index}>
              <WeatherTile
                selected={index === currentIndex}
                weatherData={weatherData}
              ></WeatherTile>
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default WeatherForecast;
