import { TOGGLE_FAVOURITE_CITY } from "../types/types"

export const toggleFavouriteCityAction = (cityName: string) => ({
  type: TOGGLE_FAVOURITE_CITY,
  payload: cityName,
})
