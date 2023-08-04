/*
Realizar un programa el cual capture los datos de un participante, nombre, apellido, el año de nacimiento.

Al finalizar el programa debe de mostrar como salida el nombre del participante, apellido y la edad según año de nacimiento.
*/

let nombre = prompt("Indica tu nombre.");
let apellido = prompt("Indica tu apellido.");
let anioNacimiento = parseInt( prompt("Indica tu año de nacimeinto.") );

let anioActual = new Date().getFullYear();
let edad = 0;

edad = anioActual - anioNacimiento;

console.log(`Hola, mi nombre es ${ nombre } ${ apellido } y tengo ${ edad } años de edad.`)

