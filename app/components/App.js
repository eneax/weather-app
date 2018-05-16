var React = require('react');
var ZipCode = require('./ZipCode');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;

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
                  onSubmitZipcode={function () { }}
                />
              </div>
            )
          }} />

          <Route exact path='/' render={ function (props) {
            return (
              <div className='home' style={{ backgroundImage: "url('app/images/pattern.svg')" }}>
                <h2 className='header'>Enter a City and State</h2>
                <ZipCode
                  direction='column'
                  zipcode={53043}
                  onSubmitZipcode={function () { }}
                />
              </div>
            )
          }}/>
        </div>
      </Router>
    )
  }
}

module.exports = App;