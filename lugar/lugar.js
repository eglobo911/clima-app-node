const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUlr = encodeURI(dir);
    // console.log(encodedUlr);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUlr }`,
        headers: { 'X-RapidAPI-Key': 'b8a9e7422bmshfccee0c8617aab3p1db01ejsnf2bf82954cf1' }
    });

    const resp = await instance.get();

    // console.log(resp.data.Results[0]);

    if (resp.data.Results.lenght === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}