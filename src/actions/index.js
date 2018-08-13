import axios from "axios";

const API_KEY = "9e6cb1dad780a081259acd5ea7827e43";
//const ROOT_URL = "https://samples.openweathermap.org/data/2.5/forecast?q=London,us"
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},au`;
  const request = axios.get(url);

  console.log("Request:", request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
