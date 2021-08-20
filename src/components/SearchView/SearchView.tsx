import { ChangeEvent, KeyboardEvent, useState } from "react"
import { getCurrentWeatherByCityName, getForecastWeatherByCityName } from "../../backend/requests"
import { IWeatherData } from "../../types/weatherData"
import Moment from "react-moment"

import "./SearchView.css"
import { IForecastData } from "../../types/forecastData"
import { Card } from "react-bootstrap"

const SearchView = () => {
  const [city, setCity] = useState("")
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null)
  const [forecastData, setForecastData] = useState<IForecastData | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value)
  }

  const handleSubmit = async (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      const weather = await getCurrentWeatherByCityName(city)
      const forecast = await getForecastWeatherByCityName(city)
      setWeatherData(weather)
      setForecastData(forecast)
    }
  }

  return (
    <div className="SearchView d-flex flex-column align-items-center">
      <input
        type="search"
        placeholder="Enter a city..."
        className="my-3"
        aria-label="Search"
        onChange={handleChange}
        onKeyDown={handleSubmit}
      />
      {weatherData && (
        <div className="search-results">
          <h2>
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <Moment format="ddd, D MMM, HH:mm">{weatherData.dt * 1000}</Moment>
          <p className="description">{weatherData.weather[0].description}</p>
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center">
              <h2 className="m-0">Now:</h2>
              <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" />
              <h1 className="m-0">{weatherData.main.temp.toFixed(0)} &#8451;</h1>
            </div>
            <div className="text-muted d-flex ">
              <p className="mx-4">Min: {weatherData.main.temp_min.toFixed(0)} &#8451;</p>
              <p>Max: {weatherData.main.temp_max.toFixed(0)} &#8451;</p>
              <p className="mx-4">Humidity: {weatherData.main.humidity} %</p>
              <p>Wind: {weatherData.wind.speed} km/h</p>
            </div>
          </div>
          <h2 className="m-0">2 Day / 3 Hour Forecast</h2>
          <div className="forecast d-flex flex-nowrap">
            {forecastData?.list.map(item => (
              <Card key={item.dt}>
                <Card.Img variant="top" src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} />
                <Card.Body className="text-center">
                  <Card.Title as="h1">{item.main.temp.toFixed(0)} &#8451;</Card.Title>
                  <Card.Text as="small" className="description">
                    {item.weather[0].description}
                  </Card.Text>
                  <Card.Text as="small" className="description">
                    Humidity: {item.main.humidity} %
                  </Card.Text>
                  <Card.Text as="small" className="description">
                    Wind: {weatherData.wind.speed} km/h
                  </Card.Text>
                </Card.Body>
                <Card.Footer as="small" className="text-center bg-dark text-white fw-bold">
                  <Moment format="D MMM, HH:mm">{item.dt * 1000}</Moment>
                </Card.Footer>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchView
