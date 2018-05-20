var React = require('react');
var utils = require('../utils/helpers');
var getUniqueDate = utils.getUniqueDate;
var img = require('../utils/img');

function DayItem (props) {
  var icon = props.day.weather[0].icon;
  var date = getUniqueDate(props.day.dt);         // props.day = listItem
  
  return (
    <div onClick={props.onClick} className='dayContainer'>
      <img className='weather' src={img[icon]} alt='Weather' />
      <h2 className='subheader'>{date}</h2>
    </div>
  )
}

module.exports = DayItem;