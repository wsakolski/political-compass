import React from "react"
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom"
import { Test } from "./components/Test"
import { Home } from "./components/Home"
import { About } from "./components/About"
import WhoAreYou from "./pages/WhoAreYou"


function App() {
  return (
    <Router>
      <header className="App-header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
          <li>
            {/* TODO to be moved somewhere else after nested router is added*/}
            <Link to="/question">Question</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </header>
      <Switch>
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/question">
          <WhoAreYou />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
