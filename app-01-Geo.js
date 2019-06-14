const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de cd para obtener el clima',
        demand: true
    }
}).argv;

//console.log(argv.direccion);

const encodedUlr = encodeURI(argv.direccion);
console.log(encodedUlr);

const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUlr }`,
    headers: { 'X-RapidAPI-Key': 'b8a9e7422bmshfccee0c8617aab3p1db01ejsnf2bf82954cf1' }
});

instance.get()
    .then(resp => {
        console.log(resp.data.Results[0]);
    })
    .catch(err => {
        console.log('Error !!', err);
    });