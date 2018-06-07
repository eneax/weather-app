import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import CurrentWeather from './CurrentWeather';
import FutureForecast from './FutureForecast';
import NoMatch from './NoMatch';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/forecast' component={CurrentWeather} />
          <Route path='/forecast/:location/forecast-five' component={FutureForecast} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;