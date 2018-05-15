var React = require('react');
var ZipCode = require('./ZipCode');

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1>Weather App</h1>
        <div className='home' style={{backgroundImage: "url('app/images/pattern.svg')"}}>
          <h2 className='header'>Enter a City and State</h2>
          <ZipCode 
            direction='column'
            onSubmitZipcode={function(){}}
            onUpdateZipcode={function(){}}
            zipcode={53043}
          />
        </div>
      </div>
    )
  }
}

module.exports = App;