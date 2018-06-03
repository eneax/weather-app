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
        className='zipcode mt2' 
        style={{flexDirection: this.props.direction}}
      >
        <input 
          className='input-control pa2 input-reset ba bg-transparent w-90 w-40-m w-30-l'
          placeholder='Enter City, State'
          type='text'
          value={this.state.zipcode}
          onChange={this.handleChange}
        />
        <button
          type='button'
          style={{margin: '10px'}}
          className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6'
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