// Components
import { TiWeatherPartlySunny } from "react-icons/ti"
import FavouritesIndicator from "../FavouritesIndicator/FavouritesIndicator"
// Styles
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav className="NavBar d-flex align-items-center justify-content-between">
      <div className="logo d-flex align-items-end">
        <TiWeatherPartlySunny />
        <h2 className="text-white">Strive Weather</h2>
      </div>
      <FavouritesIndicator />
    </nav>
  )
}

export default NavBar
