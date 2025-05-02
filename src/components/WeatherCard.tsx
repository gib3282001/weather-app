import React from "react";
import { WeatherData } from "../Types";

interface Props {
  weatherData: WeatherData;
}

function WeatherCard({ weatherData }: Props) {
  const toFarenheit = (num: number) =>
    Math.round(((num - 273.15) * 9) / 5 + 32);
  const toTitleCase = (str: string) =>
    str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  const temp = toFarenheit(weatherData.main.temp);
  const feelsLike = toFarenheit(weatherData.main.feels_like);
  const tempHigh = toFarenheit(weatherData.main.temp_max);
  const tempLow = toFarenheit(weatherData.main.temp_min);
  const windSpeed = (weatherData.wind.speed * 2.237).toFixed(1);
  return (
    <div>
      <div className="card mb-3" style={{ width: `100%` }}>
        <div className="row g-0">
          <div className="col-md-4 text-center align-content-center">
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
              className="img-fluid rounded-start"
              alt={weatherData.weather[0].description}
            />
            <h1 className="fw-bold">{temp}°F</h1>
          </div>
          <div className="col-md-8">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <h2>{toTitleCase(weatherData.weather[0].description)}</h2>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="fw-bold">Feels Like:</span>
                <span>{feelsLike}°F</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="fw-bold">Humidity:</span>
                <span>{weatherData.main.humidity}%</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="fw-bold">Wind Speed:</span>
                <span>{windSpeed} mph</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="fw-bold">High:</span> <span>{tempHigh}°F</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span className="fw-bold">Low:</span> <span>{tempLow}°F</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
