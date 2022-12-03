var nombre = 'Teo';
var apellido = 'Giampietro';
var estudiante = nombre + " " + apellido;
var estudianteMayus = estudiante.toUpperCase();
var estudianteMinus = estudiante.toLowerCase();
var cantidadCaracteres = estudiante.length;
var primerLetraNombre =  nombre[0];
var ultimaLetraApellido = apellido[apellido.length - 1];
var sinEspacios = estudiante.replace(" ", "");
var contiene = estudiante.includes(nombre);

console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(cantidadCaracteres);
console.log(primerLetraNombre);
console.log(ultimaLetraApellido);
console.log(sinEspacios);
console.log(contiene);