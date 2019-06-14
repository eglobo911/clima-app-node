const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=98a0b16a1acf8477412ed269e86e95cf&units=metric`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}