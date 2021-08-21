import { TOGGLE_FAVOURITE_CITY } from "../types/types"

export const toggleFavouriteCityAction = (cityName: number) => ({
  type: TOGGLE_FAVOURITE_CITY,
  payload: cityName,
})
