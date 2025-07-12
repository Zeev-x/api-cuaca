const getWeatherData = require('./index');

getWeatherData('35.08.03.2007')
  .then(result => {
    console.log(JSON.stringify(result, null, 2));
  })
  .catch(error => {
    console.error('Error:', error);
  });