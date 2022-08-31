const request = require('request')

const forecast = (latitude, longitude, callback) => {
    
    const url = 'http://api.weatherstack.com/current?access_key=c3da14046f7c1c9f0919eabea54b7fbd&query=' + latitude + ',' + longitude

    request({url, json:true}, (error, response) => {
        if (error) {
            callback('Sorry unable to fetch weather', undefined)
        } else if (response.body.error) {
            callback('Sorry unable to find location', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees, it feels like ' + response.body.current.feelslike + ' degrees.')
        }
    })
}

module.exports = forecast