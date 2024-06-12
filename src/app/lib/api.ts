const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';

export type WeatherResponse = {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherData[];
  city: City;
};

type WeatherData = {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: Sys;
  dt_txt: string;
  rain?: Rain;
};

type Main = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
};

type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type Clouds = {
  all: number;
};

type Wind = {
  speed: number;
  deg: number;
  gust: number;
};

type Sys = {
  pod: string;
};

type Rain = {
  '3h': number;
};

type City = {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
};

type Coord = {
  lat: number;
  lon: number;
};
