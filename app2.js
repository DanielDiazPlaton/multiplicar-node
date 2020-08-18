const { crearArchivo } = require('./multiplicar/multiplicar');

// Estas variables se utilizan para ingresar datos desde la consola
// ademas que se pone en argv[2] porque de esa manera se trae
// a la base del archivo
let argv = process.argv;
let parametro = argv[2];



/*
 *.split('caracterAElegir') sirve para convertir un string en array separandolo
 * a partir de el caracter que se pone como argumento en el split,
 * */
let base = parametro.split('=')[1];

crearArchivo( base ) 
  .then( archivo => console.log(`Archivo creado: ${ archivo }`) )
.catch(err => {
  console.log(err);
})
