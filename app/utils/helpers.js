var daysMap = {
  "0":"Sunday",
  "1":"Monday",
  "2":"Tuesday",
  "3":"Wednesday",
  "4":"Thursday",
  "5":"Friday",
  "6":"Saturday"
};

var monthsMap = {
  "0":"Jan",
  "1":"Feb",
  "2":"Mar",
  "3":"Apr",
  "4":"May",
  "5":"June",
  "6":"July",
  "7":"Aug",
  "8":"Sept",
  "9":"Oct",
  "10":"Nov",
  "11":"Dec"
};

function convertTemp (kelvin) {
  return (kelvin - 273.15)* 1.8000 + 32.00    // Kelvin to Fahrenheit formula
  // return (kelvin - 273.15)                    // Kelvin to Celsius formula
}

function getUniqueDate (unixTimestamp) {
  var date = new Date(unixTimestamp * 1000);
  var day = daysMap[date.getDay()]
  var month = monthsMap[date.getMonth()] + ' ' + date.getDate();
  return day + ', ' + month;
}

module.exports = {
  convertTemp: convertTemp,
  getUniqueDate: getUniqueDate
}

/*
var date = new Date(unixTimestamp * 1000);

You have to multiply by 1000 as JavaScript counts in milliseconds,
since epoch (which is 01/01/1970)
*/

/*
getDay()
returns the day of the week for the specified date according to local time, 
where 0 represents Sunday
*/

/*
getMonth() 
returns the month in the specified date according to local time, 
as a zero-based value (where zero indicates the first month of the year)
*/

/*
getDate() 
returns the day of the month for the specified date according to local time.
*/ 