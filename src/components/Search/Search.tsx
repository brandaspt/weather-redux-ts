import { ChangeEvent, KeyboardEvent, useState } from "react"
import { useDispatch } from "react-redux"

import { get5DayForecastAction, getCurrentWeatherAction } from "../../redux/actions/actions"
import "./Search.css"

const Search = () => {
  const [city, setCity] = useState("")
  const dispatch = useDispatch()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value)
  }

  const handleSubmit = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      dispatch(getCurrentWeatherAction(city))
      dispatch(get5DayForecastAction(city))
      setCity("")
    }
  }

  return (
    <div className="Search d-flex flex-column align-items-center">
      <input
        type="search"
        placeholder="Enter a city..."
        className="my-3"
        aria-label="Search"
        value={city}
        onChange={handleChange}
        onKeyDown={handleSubmit}
      />
    </div>
  )
}

export default Search
