export interface WeatherData {
  main: {
    temp: number;
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp_kf: number;
    temp_max: number;
    temp_min: number;
  };
  weather: {
    icon: string;
    description: string;
  }[];
  wind: {
    deg: number;
    gust: number;
    speed: number;
  };
  dt_txt: string;
}

export interface Forecast {
  forecastData: WeatherData[];
}
