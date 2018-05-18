var React = require('react');
var utils = require('../utils/helpers');
var getUniqueDate = utils.getUniqueDate;

function DayItem (props) {
  var icon = props.day.weather[0].icon;
  var date = getUniqueDate(props.day.dt);         // props.day = listItem
  
  return (
    <div onClick={props.onClick} className='dayContainer'>
      <img className='weather' src={'../app/images/weather-icons/' + icon + '.svg'} alt='Weather' />
      <h2 className='subheader'>{date}</h2>
    </div>
  )
}

module.exports = DayItem;