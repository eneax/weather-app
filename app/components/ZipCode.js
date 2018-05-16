var React = require('react');
var PropTypes = require('prop-types');
var ReactRouter = require('react-router-dom');

class ZipCode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      zipcode: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    this.props.onSubmit(this.state.zipcode);

    this.setState(function () {
      return {
        zipcode: ''
      }
    })
  }
  handleChange(event) {
    var zip = event.target.value;
    
    this.setState(function () {
      return {
        zipcode: zip
      }
    })
  }
  render() {
    return (
      <form 
        className='zipcode' 
        style={{flexDirection: this.props.direction}}
      >
        <input 
          className='input-control'
          placeholder='Chiusi, Italy'
          type='text'
          value={this.state.zipcode}
          onChange={this.handleChange}
        />
        <button
          type='button'
          style={{margin: '10px'}}
          className='btn btn-success'
          onClick={this.handleSubmit}
          disabled={!this.state.zipcode}
        >
          Get Weather
        </button>
      </form>
    )
  }
}

ZipCode.defaultProps = {
  direction: 'column'
}

ZipCode.propType = {
  direction: PropTypes.string.isRequired
}

module.exports = ZipCode;