var React = require('react');
var PropTypes = require('prop-types');

class ZipCode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      zipcode: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange() {}
  handleSubmit() {}
  render() {
    return (
      <form 
        className='zipcode' 
        style={{flexDirection: this.props.direction}}
        onSubmit={this.handleSubmit}
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
          style={{margin: 10}}
          className='btn btn-success'
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