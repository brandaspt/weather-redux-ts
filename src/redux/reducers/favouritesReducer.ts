import { TOGGLE_FAVOURITE_CITY } from "../actionTypes/actionTypes"
import { initialState } from "../store"
import { AnyAction } from "@reduxjs/toolkit"

const favouritesReducer = (state = initialState.favourites, action: AnyAction) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE_CITY:
      const isFavourite = state.cities.find(city => city.cityId === action.payload.cityId)
      if (isFavourite) {
        return { ...state, cities: [...state.cities.filter(city => city.cityId !== action.payload.cityId)] }
      } else {
        return { ...state, cities: [...state.cities, action.payload] }
      }

    default:
      return state
  }
}

export default favouritesReducer
