// Components
import { TiWeatherPartlySunny } from "react-icons/ti"
import { useDispatch } from "react-redux"
import { toggleCanvasAction } from "../../redux/actions/actions"
import FavouritesIndicator from "../FavouritesIndicator/FavouritesIndicator"
// Styles
import "./NavBar.css"

const NavBar = () => {
  const dispatch = useDispatch()
  return (
    <nav className="NavBar d-flex align-items-center justify-content-between">
      <div className="logo d-flex align-items-end">
        <TiWeatherPartlySunny />
        <h2 className="text-white">Strive Weather</h2>
      </div>
      <div onClick={() => dispatch(toggleCanvasAction())}>
        <FavouritesIndicator />
      </div>
    </nav>
  )
}

export default NavBar
