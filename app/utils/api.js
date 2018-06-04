import axios from 'axios';

const token = 'b714ec74bbab5650795063cb0fdf5fbe';

const propsToLocation = props => {
  let arr = props.history.location.search.split('&');
  let city = arr[0].split('=')[1];
  let region = arr[1].split('=')[1];

  if (['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MA', 'MD', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'].includes(region.toUpperCase()))
    region = "us";

  return {
    currentCity: city,
    currentRegion: region
  };
}

const getCurrentWeather = (city, stateOrCountry, type) => {
  return axios.get('https://api.openweathermap.org/data/2.5/' + type + '?q=' + city + ',' + stateOrCountry + '&units=imperial&mode=json&appid=' + token)
}

module.exports = {
  currentWeather: (city, stateOrCountry, type) => getCurrentWeather(city, stateOrCountry, type),
  convertPropsToLocation: props => propsToLocation(props),
  convertPropsToLocationFiveDay: props => propsToLocation(props)
}

// var axios = require('axios');

// var _baseURL = 'https://api.openweathermap.org/data/2.5/';
// var _APIKEY = 'b714ec74bbab5650795063cb0fdf5fbe'

// function prepRouteParams (queryStringData) {
//   return Object.keys(queryStringData)                                 // ["q", "type", "APPID", "cnt"]
//     .map(function (key) {
//       return key + '=' + encodeURIComponent(queryStringData[key]);    // ["q=London", "type=accurate", "APPID=b714ec74bbab5650795063cb0fdf5fbe", "cnt=5"]
//     }).join('&')                                                      // "q=London&type=accurate&APPID=b714ec74bbab5650795063cb0fdf5fbe&cnt=5"
// }

// function prepUrl (type, queryStringData) {
//   return _baseURL + type + '?' + prepRouteParams(queryStringData);
// }

// function getQueryStringData (city) {
//   return {
//     q: city,
//     type: 'accurate',
//     APPID: _APIKEY,
//     cnt: 5
//   }
// }

// function getCurrentWeather (city) {
//   var queryStringData = getQueryStringData(city);
//   var url = prepUrl('weather', queryStringData)

//   return axios.get(url)
//     .then(function (currentWeatherData) {
//       return currentWeatherData.data
//     })
// }

// function getForecast (city) {
//   var queryStringData = getQueryStringData(city);
//   var url = prepUrl('forecast/daily', queryStringData)

//   return axios.get(url)
//     .then(function (forecastData) {
//       return forecastData.data
//     })
// }

// module.exports = {
//   getCurrentWeather: getCurrentWeather,
//   getForecast: getForecast
// };




// var apiCall = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}'
// tApi = b714ec74bbab5650795063cb0fdf5fbe
// xApi = b2134d7e86a5c5553f6b358c67bf5d75