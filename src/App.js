import React from 'react';
import './App.css';
import {BrowserRouter as Router,
Switch,
Route, 
Link,
useRouteMatch,
useParams} from "react-router-dom"


const Test = () => (
    <h2>Test</h2>
);



const Home = () => (
    <h2>Home</h2>
);



const About = () => (
    <h2>About</h2>
);


function App() {
  return (
    <Router>
        <header className="App-header">
        <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/test'>Test</Link>
          </li>
          <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
        </header> 
        <Switch>
          <Route path='/test'>
            <Test/>
          </Route>
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/'>
          <Home/>
        </Route>
        
        </Switch>
    </Router>

  );
}

export default App;
