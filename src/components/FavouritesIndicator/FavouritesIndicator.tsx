// Components
import { AiFillStar } from "react-icons/ai"
import { useAppSelector } from "../../redux/hooks"

// Styles
import "./FavouritesIndicator.css"

const FavouritesIndicator = () => {
  const { favouriteCities } = useAppSelector(state => state)
  return (
    <div className="FavouritesIndicator">
      <AiFillStar />
      <div className="badge">{favouriteCities.length}</div>
    </div>
  )
}
export default FavouritesIndicator
