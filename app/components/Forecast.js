var React = require('react');
var api = require('../utils/api');
var queryString = require('query-string');
var utils = require('../utils/helpers');
var getUniqueDate = utils.getUniqueDate;
var convertTemp = utils.convertTemp;

function DayItem (props) {
  var icon = props.day.weather[0].icon;
  var date = getUniqueDate(props.day.dt);         // props.day = listItem
  
  return (
    <div className='dayContainer'>
      <img className='weather' src={'./app/images/weather-icons/' + icon + '.svg'} alt='Weather' />
      <h2 className='subheader'>{date}</h2>
    </div>
  )
}

class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forecastData: [],
      loading: true
    }

    this.makeRequest = this.makeRequest.bind(this);
  }
  componentDidMount () {
    var city = queryString.parse(this.props.location.search).city;      // "?city=Chiusi, Italy"
    this.makeRequest(city);
  }
  componentWillReceiveProps(nextProps) {
    var city = queryString.parse(nextProps.location.search).city;
    this.makeRequest(city);
  }
  makeRequest(city) {
    this.setState(function() {
      return {
        loading: true
      }
    })

    api.getForecast(city)
      .then(function (response) {
        this.setState(function() {
          return {
            loading: false,
            forecastData: response
          }
        })
      }.bind(this))
  }
  render() {
    return (
      this.state.loading === true
        ? <h1 className='forecast-header'>Loading</h1>
        : <div>
            <h1 className='forecast-header'>{this.city}</h1>
            <div className='forecast-container'>
              {this.state.forecastData.list.map(function (listItem) {
                return <DayItem key={listItem.dt} day={listItem} />
              })}
            </div>
          </div>
    )
  }
}

module.exports = Forecast;

/*
componentWillReceiveProps()
componentWillReceiveProps is required if you want to update the state values with new props values, 
this method will get called whenever any change happens to props values.
*/ 

// dt ==> Time of data calculation, unix, UTC 