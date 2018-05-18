var React = require('react');
var DayItem = require('./DayItem');
var utils = require('../utils/helpers');
var convertTemp = utils.convertTemp;

class Detail extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>Detail</div>
    )
  }
}

module.exports = Detail;