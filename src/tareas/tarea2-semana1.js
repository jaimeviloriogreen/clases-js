/*
Como salida el programa debe mostrar el nombre del estudiante y el promedio del mismo teniendo en cuenta sí su calificación es mayor o igual a 70, este esta aprobado pero sí la calificación es inferior, este estará reprobado.
*/

let nombre = prompt("Indica tu nombre:");
let promedio = parseFloat(prompt("Indica tu promedio de calificación:"));

if( promedio >= 70){
    console.log(`${nombre} estás aprobado!`);
}else{
    console.log(`${nombre} estás reprobado!`);
}