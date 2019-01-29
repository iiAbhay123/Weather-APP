
let request = require('request');
let apiKey = '769817f1e4cf47862d455e829cde70b5';
let cities = [{
    name: 'Alabama',
    postalCode: '35801'
},
    {
        name: 'Alaska',
        postalCode: '99501'
    }
];

cities.forEach(function (element) {
    showWeather(element)
});

function showWeather(city) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${apiKey}`
    request(url, function (err, response, body) {
        if (err) {
            console.log('error:', err)
        } else {
            let weather = JSON.parse(body)
            let message = `It's ${weather.main.temp} degrees in ${weather.name} and local time ${new Date(weather.dt)}`
            console.log(message);
        }
    });
}
