import NavBar from "./components/NavBar/NavBar"
import SearchView from "./components/SearchView/SearchView"
import { Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route component={SearchView} />
    </div>
  )
}

export default App
