var axios = require('axios');

var _baseURL = 'http://api.openweathermap.org/data/2.5/';
var _APIKEY = 'b714ec74bbab5650795063cb0fdf5fbe'

function prepRouteParams (queryStringData) {
  return Object.keys(queryStringData)                                 // ["q", "type", "APPID", "cnt"]
    .map(function (key) {
      return key + '=' + encodeURIComponent(queryStringData[key]);    // ["q=London", "type=accurate", "APPID=b714ec74bbab5650795063cb0fdf5fbe", "cnt=5"]
    }).join('&')                                                      // "q=London&type=accurate&APPID=b714ec74bbab5650795063cb0fdf5fbe&cnt=5"
}

function prepUrl (type, queryStringData) {
  return _baseURL + type + '?' + prepRouteParams(queryStringData);
}

function getQueryStringData (city) {
  return {
    q: city,
    type: 'accurate',
    APPID: _APIKEY,
    cnt: 5
  }
}

function getCurrentWeather (city) {
  var queryStringData = getQueryStringData(city);
  var url = prepUrl('weather', queryStringData)

  return axios.get(url)
    .then(function (currentWeatherData) {
      return currentWeatherData.data
    })
}

function getForecast (city) {
  var queryStringData = getQueryStringData(city);
  var url = prepUrl('forecast/daily', queryStringData)

  return axios.get(url)
    .then(function (forecastData) {
      return forecastData.data
    })
}

module.exports = {
  getCurrentWeather: getCurrentWeather,
  getForecast: getForecast
};




// var apiCall = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}'
// tApi = b714ec74bbab5650795063cb0fdf5fbe
// xApi = b2134d7e86a5c5553f6b358c67bf5d75