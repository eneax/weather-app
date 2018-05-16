var React = require('react');
var ZipCode = require('./ZipCode');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='navbar'>
          <h1>Weather App</h1>
          <ZipCode 
            direction='row'
            zipcode={53043}
            onSubmitZipcode={function(){}}
          />
        </div>
        <div className='home' style={{backgroundImage: "url('app/images/pattern.svg')"}}>
          <h2 className='header'>Enter a City and State</h2>
          <ZipCode 
            direction='column'
            zipcode={53043}
            onSubmitZipcode={function(){}}
          />
        </div>
      </div>
    )
  }
}

module.exports = App;