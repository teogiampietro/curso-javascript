
//- Una variable que contenga tu altura en centímetros (entero)
var altura = 183;
console.log(altura);

//- Una variable que contenga tu altura en metros (número de coma flotante)
var alturaEnMetros = 1.83
console.log(alturaEnMetros);

//- Una variable que contenga tu peso en kilogramos (número de coma flotante)
var peso = 90.2;
console.log(peso);

//- Una variable que contenga tu altura en metros redondeada hacia arriba
var alturaEnMetrosRedondeadaArria = Math.round(alturaEnMetros);
console.log('alturaEnMetrosRedondeadaArria :>> ', alturaEnMetrosRedondeadaArria);

//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
var pesoRedondeadoHaciaAbajo = Math.floor(peso)
console.log('pesoRedondeadoHaciaAbajo :>> ', pesoRedondeadoHaciaAbajo);

//- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript 
let max = Number.MAX_VALUE + 1;
let resultado = max == Number.MAX_VALUE;
console.log(resultado)
