var React = require('react');
var api = require('../utils/api');
var queryString = require('query-string');
var utils = require('../utils/helpers');
var DayItem = require('./DayItem');

class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forecastData: [],
      loading: true
    }

    this.makeRequest = this.makeRequest.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.city = queryString.parse(this.props.location.search).city;      // "?city=Chiusi, Italy"
    this.makeRequest(this.city);
  }
  componentWillReceiveProps(nextProps) {
    this.city = queryString.parse(nextProps.location.search).city;
    this.makeRequest(this.city);
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
  handleClick(city) {
    this.props.history.push({
      pathname: '/details/' + this.city,
      state: city,
    })
  }
  render() {
    return (
      this.state.loading === true
        ? <h1 className='forecast-header'>Loading</h1>
        : <div>
            <h1 className='forecast-header'>{this.city}</h1>
            <div className='forecast-container'>
              {this.state.forecastData.list.map(function (listItem) {
                return (
                  <DayItem 
                    key={listItem.dt} 
                    day={listItem} 
                    onClick={this.handleClick.bind(this, listItem)} 
                  />
                )
              }.bind(this))}
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