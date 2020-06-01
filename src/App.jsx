import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom'
import { Test } from './components/test.component'
import { Home } from './components/home.component'
import { About } from './components/about.component'
import WhoAreYou from './pages/WhoAreYou'

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
            <Link to="/about">About</Link>
          </li>
        </ul>
      </header>
      <Switch>
        <Route exact path="/test" component={Test} />
        <Route exact path="/about" component={About} />
        <Route exact path="/question" component={WhoAreYou} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  )
}

export default App
