import { Dispatch } from "redux"
import { getCurrentWeatherByCityName, getForecastWeatherByCityName } from "../../backend/requests"
import { IFavouriteObj } from "../../types/favouriteObj"
import { IForecastData } from "../../types/forecastData"
import { IWeatherData } from "../../types/weatherData"
import * as actionTypes from "../actionTypes/actionTypes"

export const toggleFavouriteCityAction = (city: IFavouriteObj) => ({
  type: actionTypes.TOGGLE_FAVOURITE_CITY,
  payload: city,
})

export const toggleCanvasAction = () => ({
  type: actionTypes.TOGGLE_CANVAS,
})

export const setCurrentWeatherAction = (data: IWeatherData) => ({
  type: actionTypes.SET_CURRENT_WEATHER,
  payload: data,
})

export const set5DayForecastWeatherAction = (data: IForecastData) => ({
  type: actionTypes.SET_5DAY_FORECAST_WEATHER,
  payload: data,
})

export const getCurrentWeatherAction = (cityName: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setCurrentWeatherAction(await getCurrentWeatherByCityName(cityName)))
    } catch (error) {
      console.log(error)
    }
  }
}

export const get5DayForecastAction = (cityName: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(set5DayForecastWeatherAction(await getForecastWeatherByCityName(cityName)))
    } catch (error) {
      console.log(error)
    }
  }
}
