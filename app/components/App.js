import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import CurrentForecast from './CurrentForecast';
import FiveDay from './FiveDay';
import Header from './Header';

const App = (props) => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/forecast" component={CurrentForecast} />
          <Route path="/forecast/:location/five-day" component={FiveDay} />
          <Route render={() => {
            return (
              <div className="four-o-four">
                <h1>404</h1>
                <h3>Page not found...</h3>
              </div>
            )
          }} />
        </Switch>
      </div>
    </Router>
  )
}
module.exports = App;




// var React = require('react');
// var ZipCode = require('./ZipCode');
// var ReactRouter = require('react-router-dom');
// var Router = ReactRouter.BrowserRouter;
// var Route = ReactRouter.Route;
// var Switch = ReactRouter.Switch;
// var Forecast = require('./Forecast');
// var Detail = require('./Detail');
// import tachyons from 'tachyons';

// class App extends React.Component {
//   render() {
//     return (
//       <Router>
//         <div className='container'>
//           <Route render={ function (props) {
//             return (
//               <div className='navbar'>
//                 <i className="far fa-sun"></i>
//                 <ZipCode
//                   direction='row'
//                   zipcode={53043}
//                   onSubmit={function (city) {
//                     props.history.push({
//                       pathname: 'forecast',
//                       search: '?city=' + city
//                     });
//                   }}
//                 />
//               </div>
//             )
//           }} />

//           <Switch>
//             <Route exact path='/' render={ function (props) {
//               return (
//                 <div className='home'>
//                   <h2 className='header'>Enter a City and State</h2>
//                   <ZipCode
//                     direction='column'
//                     zipcode={53043}
//                     onSubmit={function (city) {
//                       props.history.push({
//                         pathname: 'forecast',
//                         search: '?city=' + city
//                       });
//                     }}
//                   />
//                 </div>
//               )
//             }}/>

//             <Route path='/forecast' component={Forecast} />
//             <Route path='/details/:city' component={Detail} />
//             <Route render={ function () {
//               return <p>Not Found</p>
//             }} />
//           </Switch>
//         </div>
//       </Router>
//     )
//   }
// }

// module.exports = App;