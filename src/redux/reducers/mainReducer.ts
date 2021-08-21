import { TOGGLE_FAVOURITE_CITY } from "../types/types"
import { initialState } from "../store"
import { AnyAction } from "@reduxjs/toolkit"

const mainReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE_CITY:
      const isFavourite = state.favouriteCities.find(cityId => cityId === action.payload)
      if (isFavourite) {
        return { ...state, favouriteCities: [...state.favouriteCities.filter(cityId => cityId !== action.payload)] }
      } else {
        return { ...state, favouriteCities: [...state.favouriteCities, action.payload] }
      }

    default:
      return state
  }
}

export default mainReducer
