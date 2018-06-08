import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      city: '',
      region: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.splitLocation = this.splitLocation.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  handleChange(event) {
    let location = event.target.value;
    
    this.setState(() => {
      return {
        location: location
      }
    })
  }

  splitLocation(event) {
    event.preventDefault();
    let [ currentCity, currentRegion ] = this.state.location.split(', ');

    this.setState(() => {
      return {
        city: currentCity,
        region: currentRegion
      }
    }, this.clearState)
  }

  clearState() {
    this.setState(() => {
      return {
        location: '',
        city: '',
        region: ''
      }
    })

    document.querySelector('form').reset();
  }

  render() {
    return (
      <div>
        <form className='form-inline' onSubmit={this.splitLocation}>
          <input 
            onChange={this.handleChange}
            className='material input-submit form-control mr-sm-2' 
            type='search' placeholder='Your city name' 
            aria-label='Your city name'
          />
          <button className='material btn-submit btn my-2 my-sm-0' type='submit'>Search</button>
        </form>
        
        { (this.state.city !== '' && this.state.region !== '') &&
          <Redirect to={{
            pathname: '/forecast',
            search: `?city=${this.state.city}&region=${this.state.region}&units=metric`
          }} />
        }
      </div>
    )
  }
}

Search.propTypes = {
  location: PropTypes.string,
  city: PropTypes.array,
  region: PropTypes.array
};

export default Search;