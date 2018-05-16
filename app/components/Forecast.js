var React = require('react');
var api = require('../utils/api');
var queryString = require('query-string');

class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    }
  }
  render() {
    return (
      this.state.loading === true
        ? <div>Loading</div>
        : <div>Forecast Component</div>
      
    )
  }
}

module.exports = Forecast;


// api.getCurrentWeather(this.state.zipcode)
//   .then(function (response) {
//     console.log(response)
//   })


// componentDidMount () {
//   var city = queryString.parse(this.props.location.search).city;      // "?city=Chiusi, Italy"
// }