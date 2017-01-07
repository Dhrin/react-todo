var moment = require('moment');

console.log(moment().format());

// jan 1st 1970 @ 12:00am -> 0
// jan 1st 1970 @ 12:01am -> 60

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1483786097;
var currentMoment = moment.unix(timestamp);

console.log('currentMoment', currentMoment.format('MMM D, YY, @ h:mm a'));