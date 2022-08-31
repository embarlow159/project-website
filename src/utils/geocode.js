const request = require('request')

const geocode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=a3b72ee69e961d62c5b3788a96ee1e1d&query=' + encodeURIComponent(address) +'&limit=1&output=json'

    request({url, json:true}, (error, response) => {
        if (error) {
            callback('Sorry location data unavailable', undefined)
        } else if (response.body.data.length === 0) {
            callback('Sorry location not found', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.data[0].latitude,
                longitude: response.body.data[0].longitude,
                location: response.body.data[0].label,
            })
        }
    })
}

module.exports = geocode