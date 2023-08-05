/*
Como salida el programa debe mostrar el nombre del estudiante y el promedio del mismo teniendo en cuenta sí su calificación es mayor o igual a 70, este esta aprobado pero sí la calificación es inferior, este estará reprobado.
*/

let nombre = prompt("Indica tu nombre:");

let n1 = parseInt(prompt("Indica la primera calificación:"));
let n2 = parseInt(prompt("Indica la segunda calificación:"));
let n3 = parseInt(prompt("Indica la tercera calificación:"));
let n4 = parseInt(prompt("Indica la cuarta calificación:"));

let promedio = (n1+n2+n3+n4) / 4;

if( promedio >= 70){
    console.log(`Posees una promedio de ${promedio} por lo que ${nombre} estás aprobado!`);
}else{
    console.log(`Posees una promedio de ${promedio} por lo que ${nombre} estás reprobado!`);
}