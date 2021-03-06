import { ListGroup, Offcanvas } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { get5DayForecastAction, getCurrentWeatherAction, toggleCanvasAction } from "../../redux/actions/actions"
import { useAppSelector } from "../../redux/hooks"
import { ToggleFavourite } from "../ToggleFavourite/ToggleFavourite"

const FavouritesCanvas = () => {
  const isShowing = useAppSelector(state => state.canvas.show)
  const favouriteCities = useAppSelector(state => state.favourites.cities)
  const dispatch = useDispatch()
  return (
    <>
      <Offcanvas show={isShowing} onHide={() => dispatch(toggleCanvasAction())} placement="end" backdrop={false}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Favourite Cities</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup>
            {favouriteCities.map(city => (
              <ListGroup.Item
                key={city.cityId}
                action
                className="d-flex"
                onClick={() => {
                  dispatch(get5DayForecastAction(`${city.cityName}, ${city.country}`))
                  dispatch(getCurrentWeatherAction(`${city.cityName}, ${city.country}`))
                  dispatch(toggleCanvasAction())
                }}
              >
                <div className="me-2">
                  {city.cityName}, {city.country}
                </div>
                <ToggleFavourite city={city} />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default FavouritesCanvas
