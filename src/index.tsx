import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { store } from "./redux/store"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)