import Moment from "react-moment"
import { Card, Container } from "react-bootstrap"
import { ToggleFavourite } from "../ToggleFavourite/ToggleFavourite"
import { useSelector } from "react-redux"
import { IReduxStore } from "../../redux/store"

import "./WeatherInfo.css"

const WeatherInfo = () => {
  const currentWeatherData = useSelector((state: IReduxStore) => state.weatherData.currentWeather)
  const forecastData = useSelector((state: IReduxStore) => state.weatherData.forecast5Day)
  return (
    currentWeatherData && (
      <Container className="WeatherInfo mb-4">
        <div className="d-flex">
          <h2 className="me-2">
            {currentWeatherData.name}, {currentWeatherData.sys.country}
          </h2>
          <ToggleFavourite
            city={{
              cityId: currentWeatherData.id,
              country: currentWeatherData.sys.country,
              cityName: currentWeatherData.name,
              lat: currentWeatherData.coord.lat,
              long: currentWeatherData.coord.lon,
            }}
          />
        </div>
        <Moment format="ddd, D MMM, HH:mm">{currentWeatherData.dt * 1000}</Moment>
        <p className="description">{currentWeatherData.weather[0].description}</p>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center">
            <h2 className="m-0">Now:</h2>
            <img src={`http://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}@2x.png`} alt="" />
            <h1 className="m-0">{currentWeatherData.main.temp.toFixed(0)} &#8451;</h1>
          </div>
          <div className="text-muted d-flex ">
            <p className="mx-4">Min: {currentWeatherData.main.temp_min.toFixed(0)} &#8451;</p>
            <p>Max: {currentWeatherData.main.temp_max.toFixed(0)} &#8451;</p>
            <p className="mx-4">Humidity: {currentWeatherData.main.humidity} %</p>
            <p>Wind: {currentWeatherData.wind.speed} km/h</p>
          </div>
        </div>
        <h2 className="m-0 mb-3 text-center text-secondary">2 Day / 3 Hour Forecast:</h2>
        <div className="forecast d-flex flex-nowrap">
          {forecastData?.list.map(item => (
            <Card key={item.dt}>
              <Card.Img variant="top" src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} />
              <Card.Body className="text-center p-1 d-flex flex-column">
                <Card.Title as="h2">{item.main.temp.toFixed(0)} &#8451;</Card.Title>
                <Card.Text as="small" className="description">
                  {item.weather[0].description}
                </Card.Text>
                <Card.Text as="small">Humidity: {item.main.humidity} %</Card.Text>
                <Card.Text as="small">Wind: {currentWeatherData.wind.speed} km/h</Card.Text>
              </Card.Body>
              <Card.Footer as="small" className="text-center bg-dark text-white fw-bold p-1">
                <Moment format="D MMM, HH:mm">{item.dt * 1000}</Moment>
              </Card.Footer>
            </Card>
          ))}
        </div>
      </Container>
    )
  )
}

export default WeatherInfo
