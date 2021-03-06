import { IForecastData } from "../types/forecastData"
import { IOneCallData } from "../types/oneCallData"
import { IWeatherData } from "../types/weatherData"
import openWeather from "./openWeather"

export const getCurrentWeatherByCityName = async (cityName: string) => {
  return (await openWeather.get<IWeatherData>(`/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)).data
}

export const getForecastWeatherByCityName = async (cityName: string) => {
  return (await openWeather.get<IForecastData>(`/forecast?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}&units=metric&cnt=17`)).data
}

export const getOneCallData = async (lat: number, long: number) => {
  return (await openWeather.get<IOneCallData>(`/onecall?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)).data
}
