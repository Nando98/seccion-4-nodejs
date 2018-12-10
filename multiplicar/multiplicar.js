const fs = require('fs');
const colors = require('colors');

let crearArchivo = ( base, limite = 1 ) => {
    return new Promise( (resolve, reject) => {

        if( !Number(base) && !Number(limite) ) {
            reject(`El valor introducio "${base}" o "${limite}", no es un numero.`);
            return; 
        }

        let data = '';

        for ( let i = 1; i <= limite; i++ ) {
            let producto = base * i;
            data += `${base} * ${i} = ${producto}\n`;
        }
        
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
          if (err) 
            reject(err);
          else 
            resolve(`tabla-${base}-al-${limite}.txt`.green);
        });
    });
};

let listarTabla = (base, limite = 10) => {
    return new Promise( (resolve, reject) => {

        console.log('===================================================='.rainbow);
        console.log(`Tabla de ${base}`.rainbow);
        console.log('===================================================='.rainbow);

        if( !Number(base) && !Number(limite) ) {
            reject(`El valor introducio "${base}" o "${limite}", no es un numero.`);
            return; 
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            let producto = base * i;
            data += `${base} * ${i} = ${producto}\n`;
        }
        resolve(data);
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}
