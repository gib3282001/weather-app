import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherForecast from "./components/WeatherForecast";
import Alert from "./components/Alert";
import { WeatherData, Forecast } from "./Types";
import "./App.css";

const API_KEY = "d9bdfce08e04ebc2ca04919e05c847bb";

const toTitleCase = (str: string) =>
  str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

function App() {
  const [cityName, setCityName] = useState("");
  const [searched, setSearched] = useState(false);
  const [foreCast, setForeCast] = useState<Forecast | null>(null);
  const [error, setError] = useState(false);
  const getForecast = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`
      );
      const data = await response.json();
      const today = new Date();
      const list: WeatherData[] = [];
      data.list.map((item: WeatherData) => {
        if (item.dt_txt.includes("12:00:00")) list.push(item);
      });
      const includesToday = () => {
        return new Date(list[0].dt_txt).getDay() === today.getDay();
      };
      if (!includesToday()) list.unshift(data.list[0]);
      setSearched(true);
      setForeCast({ forecastData: list });
    } catch (error) {
      setError(true);
      console.error(error);
    }
  };
  return (
    <div>
      {error && (
        <Alert onClose={() => setError(false)}>
          We couldn't find that city
        </Alert>
      )}
      {!searched && (
        <SearchBar
          setCity={setCityName}
          search={() => getForecast()}
        ></SearchBar>
      )}
      {foreCast && searched && (
        <span>
          <button
            className="btn btn-outline-light position-fixed top-0 start-0 m-3"
            onClick={() => {
              setForeCast(null);
              setSearched(false);
            }}
          >
            {"Go Back"}
          </button>
          <h1>{toTitleCase(cityName)} Forecast</h1>
          <WeatherForecast
            forecastData={foreCast.forecastData}
          ></WeatherForecast>
        </span>
      )}
    </div>
  );
}

export default App;
