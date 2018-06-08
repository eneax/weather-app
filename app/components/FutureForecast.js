import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import api from '../utils/api';
import img from '../utils/img';
import Extra from './Extra';
import Loading from './Loading';


const OneDayForecast = (props) => {
  return (
    <tr>
      <th scope='row'>
        <img style={{ height: '50px', width: '50px' }} src={img[props.data.weather[0].icon]} alt='' />
      </th>
      <td>
        {new Date(props.data.dt * 1000).toString().split(' ').slice(0, 5).join(' ')}
      </td>
      <td style={{textTransform: 'capitalize'}}>
        {props.data.weather[0].description}
      </td>
      <td>
        {Math.round(props.data.main.temp * 1)} °C
      </td>
      <td>
        {Math.round(props.data.main.humidity * 100) / 100}%
      </td>
      {props.data.clouds 
        ? <td>{Math.round(props.data.clouds.all * 100) / 100}%</td> 
        : <td> - </td>
      }
      {(props.data.rain && props.data.rain['3h']) 
        ? <td>{Math.round(props.data.rain['3h'] * 100) / 100}mm</td> 
        : <td> - </td>
      }
      {(props.data.snow && props.data.snow['3h']) 
        ? <td>{Math.round(props.data.snow['3h'] * 100) / 100}mm</td> 
        : <td> - </td>
      }
    </tr>
  )
}

const FiveDayForecast = (props) => {
  const days = props.data.list.map(day => {
    return (
      <OneDayForecast key={day.dt} data={day} />
    )
  })
  return (
    <div>
      <h1 className='text-center'>
        {props.data.city.name}
      </h1>
      <div className='table-responsive'>
        <table className='table mx-auto'>
          <thead className='thead-dark text-center'>
            <tr>
              <th scope='col'></th>
              <th scope='col'>Day</th>
              <th scope='col'>Description</th>
              <th scope='col'>Temperature</th>
              <th scope='col'>Humidity</th>
              <th scope='col'>Clouds</th>
              <th scope='col'>Rain</th>
              <th scope='col'>Snow</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {days}
          </tbody>
        </table>
      </div>
    </div>
  )
}

class FutureForecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      region: '',
      weatherData: '',
      locationFrequency: 0
    }
  }

  componentDidMount() {
    let { currentCity, currentRegion } = api.getLocationFutureForecast(this.props);

    api.currentWeather(currentCity, currentRegion, 'forecast')
      .then(res => {
        this.setState(() => {
          return {
            city: currentCity,
            region: currentRegion,
            weatherData: res.data,
            locationFrequency: this.state.locationFrequency + 1
          }
        })
      });
  }

  render() {
    if (this.state.locationFrequency === 0 && this.state.weatherData === '') {
      return (
        <Loading />
      )
    } else {
      return (
        <div className='container'>
          <FiveDayForecast data={this.state.weatherData} />
          <Extra data={this.state.weatherData}>
            <Link to={{
              pathname: '/forecast',
              search: `?city=${this.state.city}&region=${this.state.region}&units=metric`
            }}>
              Get current weather in {this.state.city}
            </Link>
          </Extra>
        </div>
      )
    }
  }
}

FutureForecast.propTypes = {
  city: PropTypes.array,
  region: PropTypes.array,
  weatherData: PropTypes.object,
  locationFrequency: PropTypes.number
};

export default FutureForecast;