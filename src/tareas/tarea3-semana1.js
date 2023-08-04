/*
 Realizar un programa el cual capture los siguientes datos de un individuo, nombre, apellido, edad y determinar sí la persona es mayor o menor  de edad utilizando los condicionales. 
 */

 let nombre = prompt("Indica tu nombre:");
 let apellido = prompt("Indica tu apellido:");
 let edad = parseInt(prompt("Indica tu edad:"));


 if(edad >= 18){
    console.log(`${ nombre } ${ apellido } eres mayor de edad!`);
 }else{
    console.log(`${ nombre } ${ apellido } eres menor de edad!`);
 }