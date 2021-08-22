import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { composeWithDevTools } from "redux-devtools-extension"

import { IFavouriteObj } from "../types/favouriteObj"
import { IWeatherData } from "../types/weatherData"

import favouritesReducer from "./reducers/favouritesReducer"
import weatherDataReducer from "./reducers/weatherDataReducer"
import canvasReducer from "./reducers/canvasReducer"
import { IForecastData } from "../types/forecastData"

export interface IReduxStore {
  favourites: {
    cities: IFavouriteObj[]
  }
  weatherData: {
    currentWeather: IWeatherData | null
    forecast5Day: IForecastData | null
  }
  canvas: {
    show: boolean
  }
}

export const initialState: IReduxStore = {
  favourites: {
    cities: [],
  },
  weatherData: {
    currentWeather: null,
    forecast5Day: null,
  },
  canvas: {
    show: false,
  },
}

const mainReducer = combineReducers({
  favourites: favouritesReducer,
  weatherData: weatherDataReducer,
  canvas: canvasReducer,
})

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["weatherData", "canvas"],
}

const persistedReducer = persistReducer(persistConfig, mainReducer)

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))
export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
