//requireds
//const fs = require('fs');
//const multiplicar = require('./multiplicar/multiplicar');
//
//const argv = require{'yargs'}.argv;

/*
 * Se trae la informacion de otro archivo pero la destructuramos y solo treaemos las funciones que vamos a utilizar
 * */
const { crearArchivo } = require('./multiplicar/multiplicar');


let base = 8;

/*let data = '';  // inicializo el string vacio

for( let i = 1; i <= 10; ++i ){
  data += `${ base } * ${ i } = ${ base * i }\n`;
}


fs.writeFile(`tablas/tabla-${ base }.txt`, data , (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
}); */

console.log( process.argv );

crearArchivo( base ) 
  .then( archivo => console.log(`Archivo creado: ${ archivo }`) )
.catch(err => {
  console.log(err);
})
