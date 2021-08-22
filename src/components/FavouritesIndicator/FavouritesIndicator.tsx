// Components
import { AiFillStar } from "react-icons/ai"
import { useSelector } from "react-redux"
import { IReduxStore } from "../../redux/store"

// Styles
import "./FavouritesIndicator.css"

const FavouritesIndicator = () => {
  const favouriteCities = useSelector((state: IReduxStore) => state.favourites.cities)
  return (
    <div className="FavouritesIndicator">
      <AiFillStar />
      <div className="badge">{favouriteCities.length}</div>
    </div>
  )
}
export default FavouritesIndicator
