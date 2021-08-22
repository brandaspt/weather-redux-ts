import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { useSelector } from "react-redux"
import { toggleFavouriteCityAction } from "../../redux/actions/actions"
import { useAppDispatch } from "../../redux/hooks"
import { IReduxStore } from "../../redux/store"
import { IFavouriteObj } from "../../types/favouriteObj"

import "./ToggleFavourite.css"

interface ToggleFavouriteProps {
  city: IFavouriteObj
}

export const ToggleFavourite = (props: ToggleFavouriteProps) => {
  const favouriteCities = useSelector((state: IReduxStore) => state.favourites.cities)
  const toggleDispatch = useAppDispatch()

  return (
    <div className="ToggleFavourite d-flex">
      {favouriteCities.find(favourite => favourite.cityId === props.city.cityId) ? (
        <AiFillStar onClick={() => toggleDispatch(toggleFavouriteCityAction(props.city))} />
      ) : (
        <AiOutlineStar onClick={() => toggleDispatch(toggleFavouriteCityAction(props.city))} />
      )}
    </div>
  )
}
