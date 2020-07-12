import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams,
} from 'react-router-dom'
import { Test } from './components/test.component'
import { Home } from './components/home.component'
import { About } from './components/about.component'
import WhoAreYou from './pages/WhoAreYou'
import { Navbar } from './components/navbar.component'

function App() {
  return (
    <Router>
      <Navbar />
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
