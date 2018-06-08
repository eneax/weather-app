import axios from 'axios';

const key = 'b714ec74bbab5650795063cb0fdf5fbe';

const getLocation = props => {
  let arr = props.history.location.search.split('&');
  let city = arr[0].split('=')[1];
  let region = arr[1].split('=')[1];

  return {
    currentCity: city,
    currentRegion: region
  };
}

const getCurrentWeather = (city, region, type) => {
  return axios.get(`https://api.openweathermap.org/data/2.5/${type}?q=${city},${region}&units=metric&mode=json&appid=${key}`)
}

export default {
  currentWeather: (city, region, type) => getCurrentWeather(city, region, type),
  getLocation: props => getLocation(props),
  getLocationFutureForecast: props => getLocation(props)
}