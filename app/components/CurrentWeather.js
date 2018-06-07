import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import api from '../utils/api';
import img from '../utils/img';
import Extra from './Extra';
import Loading from './Loading';


const DisplayCurrentWeather = (props) => {
  let sunrise = new Date(props.data.sys.sunrise * 1000).toString().split(' ').slice(4, 5);
  let sunset = new Date(props.data.sys.sunset * 1000).toString().split(' ').slice(4, 5);
  
  return (
    <div className='text-center table-container'>
      <Link to={{
        pathname: `/forecast/${props.data.name}/forecast-five`,
        search: `?city=${props.data.name}&region=${props.data.sys.country.toLowerCase()}`
      }}>
        <h1><img src={img[props.data.weather[0].icon]} alt='' /> {props.data.name}</h1>
      </Link>

      <p className='data'>
        {new Date().toString().split(' ').slice(0, 5).join(' ')}
      </p>

      <p className='data'>
        <strong style={{fontSize: '22px', textTransform: 'capitalize'}}>
          {props.data.weather[0].description}
        </strong>
      </p>
      
      <table className='table table-hover mx-auto'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col' colSpan='2'>Current Weather</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>Temperature</th>
            <td>{Math.round(props.data.main.temp)} °C</td>
          </tr>
          {
            props.data.clouds &&
            <tr>
              <th scope='row'>Clouds</th>
              <td>{props.data.clouds.all}%</td>
            </tr>
          }
          {
            props.data.rain &&
            <tr>
              <th scope='row'>Rain</th>
              <td>{props.data.rain} mm</td>
            </tr>
          }
          {
            props.data.snow &&
            <tr>
              <th scope='row'>Snow</th>
              <td>{props.data.snow} mm</td>
            </tr>
          }
          <tr>
            <th scope='row'>Humidity</th>
            <td>{props.data.main.humidity}%</td>
          </tr>
          <tr>
            <th scope='row'>Wind</th>
            <td>{props.data.wind.speed} m/s</td>
          </tr>
          <tr>
            <th scope='row'>Pressure</th>
            <td>{props.data.main.pressure} hpa</td>
          </tr>
          <tr>
            <th scope='row'>Sunrise</th>
            <td>{sunrise}</td>
          </tr>
          <tr>
            <th scope='row'>Sunset</th>
            <td>{sunset}</td>
          </tr>
          <tr>
            <th scope='row'>Latitude</th>
            <td>{props.data.coord.lat}</td>
          </tr>
          <tr>
            <th scope='row'>Longitude</th>
            <td>{props.data.coord.lon}</td>
          </tr>
        </tbody>
      </table>  
    </div>
  )
}

class CurrentWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      region: '',
      weatherData: '',
      locationFrequency: 0,
      invalidLocation: false
    }
  }

  componentDidMount() {
    let { currentCity, currentRegion } = api.getLocation(this.props);

    api.currentWeather(currentCity, currentRegion, 'weather')
      .then(res => {
        this.setState(() => {
          return {
            city: currentCity,
            region: currentRegion,
            weatherData: res.data,
            locationFrequency: this.state.locationFrequency + 1,
            invalidLocation: false
          }
        })
      }).catch(() => {
        this.setState(() => {
          return {
            invalidLocation: true
          }
        })
      })
  }

  // Tell React the update can be skipped if the city doesn't change
  shouldComponentUpdate() {
    let { currentCity, currentRegion } = api.getLocation(this.props);

    if (this.state.locationFrequency == 0 && currentCity === this.state.city && currentRegion === this.state.region) {
      return true;
    } else {
      return currentCity !== this.state.city
    }
  }

  componentWillReceiveProps() {
    let { currentCity, currentRegion } = api.getLocation(this.props);

    api.currentWeather(currentCity, currentRegion, 'weather')
      .then(res => {
        this.setState(() => {
          return {
            city: currentCity,
            region: currentRegion,
            weatherData: res.data,
            locationFrequency: this.state.locationFrequency + 1,
            invalidLocation: false
          }
        })
      }).catch(() => {
        this.setState(() => {
          return {
            invalidLocation: true
          }
        })
      })
  }
  
  render() {
    if (this.state.invalidLocation) {
      return (
        <div>
          <h1>We are not able to find this location, please try again!</h1>
          <p>Make sure you have written it correctly! :-)</p>
        </div>
      )
    } else if (this.state.weatherData !== '') {
    return (
      <div className='container'>
        <DisplayCurrentWeather data={this.state.weatherData} />
        <div className='table-container'>
          <Extra data={this.state.weatherData}>  
            <Link to={{
              pathname: `/forecast/${this.state.weatherData.name}/forecast-five`,
              search: `?city=${this.state.weatherData.name}&region=${this.state.weatherData.sys.country.toLowerCase()}`
            }}>
              Get 5 day weather forecast for {this.state.weatherData.name}
            </Link>
          </Extra>
        </div>
      </div>
    )} else {
      return (
        <Loading />
      )
    }
  }
}

CurrentWeather.propTypes = {
  city: PropTypes.array,
  region: PropTypes.array,
  weatherData: PropTypes.object,
  locationFrequency: PropTypes.number,
  invalidLocation: PropTypes.bool
};

export default CurrentWeather;