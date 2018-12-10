/**
 *  Seccion 4 - Inicio del Proyecto
 *  Mi calculadora
 * 
*/

//  const fs = require('fs'); - Paquete nativo de NodeJS
//  const express = require('express'); - Paquetes no nativos de Node, por lo tanto se tiene que instalar
//  const ejemplo = require('./ejemplo'); - Archivo creado de forma local que requires
//  Process - Elemento global que proporciona información y control sobre el proceso actual de Node.js.
const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

console.log('La base para multiplicar >>', argv.base);
console.log('El limite es >>', argv.limite);

switch (comando) {
    case 'listar':
            listarTabla( argv.base, argv.limite )
                .then( (resp) => console.log(resp))
                .catch( (err) => console.log(err));
        break;

    case 'crear':
            crearArchivo( argv.base, argv.limite )
            .then( (resp) => console.log(`Archivo creado >> ${resp}`))
            .catch( (err) => console.log(err));
        break;

    default:
            console.log('Comando no reconocido.');
        break;
}

// let parametro = argv[2];
// let base = parametro.split('=')[1];

