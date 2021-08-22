import { SET_5DAY_FORECAST_WEATHER, SET_CURRENT_WEATHER } from "../actionTypes/actionTypes"
import { initialState } from "../store"
import { AnyAction } from "@reduxjs/toolkit"

const weatherDataReducer = (state = initialState.weatherData, action: AnyAction) => {
  switch (action.type) {
    case SET_CURRENT_WEATHER:
      return { ...state, currentWeather: action.payload }
    case SET_5DAY_FORECAST_WEATHER:
      return { ...state, forecast5Day: action.payload }
    default:
      return state
  }
}

export default weatherDataReducer
