const lugar = require('./lugar/lugar');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de cd para obtener el clima',
        demand: true
    }
}).argv;

//console.log(argv.direccion);

lugar.getLugarLatLng(argv.direccion)
    .then(console.log);