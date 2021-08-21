import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { toggleFavouriteCityAction } from "../../redux/actions/actions"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"

import "./ToggleFavourite.css"

interface ToggleFavouriteProps {
  cityId: number
}

export const ToggleFavourite = ({ cityId }: ToggleFavouriteProps) => {
  const { favouriteCities } = useAppSelector(state => state)
  const toggleDispatch = useAppDispatch()

  return (
    <div className="ToggleFavourite d-flex">
      {favouriteCities.find(favourite => favourite === cityId) ? (
        <AiFillStar onClick={e => toggleDispatch(toggleFavouriteCityAction(cityId))} />
      ) : (
        <AiOutlineStar onClick={e => toggleDispatch(toggleFavouriteCityAction(cityId))} />
      )}
    </div>
  )
}
