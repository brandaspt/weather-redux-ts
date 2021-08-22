import FavouritesCanvas from "./components/FavouritesCanvas/FavouritesCanvas"
import NavBar from "./components/NavBar/NavBar"
import Search from "./components/Search/Search"
import WeatherInfo from "./components/WeatherInfo/WeatherInfo"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Search />
      <WeatherInfo />
      <FavouritesCanvas />
    </div>
  )
}

export default App
