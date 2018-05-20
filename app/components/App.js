var React = require('react');
var ZipCode = require('./ZipCode');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Forecast = require('./Forecast');
var Detail = require('./Detail');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Route render={ function (props) {
            return (
              <div className='navbar'>
                <h1>Weather App</h1>
                <ZipCode
                  direction='row'
                  zipcode={53043}
                  onSubmit={function (city) {
                    props.history.push({
                      pathname: 'forecast',
                      search: '?city=' + city
                    });
                  }}
                />
              </div>
            )
          }} />

          <Switch>
            <Route exact path='/' render={ function (props) {
              return (
                <div className='home'>
                  <h2 className='header'>Enter a City and State</h2>
                  <ZipCode
                    direction='column'
                    zipcode={53043}
                    onSubmit={function (city) {
                      props.history.push({
                        pathname: 'forecast',
                        search: '?city=' + city
                      });
                    }}
                  />
                </div>
              )
            }}/>

            <Route path='/forecast' component={Forecast} />
            <Route path='/details/:city' component={Detail} />
            <Route render={ function () {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;