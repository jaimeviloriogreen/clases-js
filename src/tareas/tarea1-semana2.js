
const numero = parseInt( prompt("Intruduce un número:") );
let i = 1;


while(i <= 12){
    console.table(`${ numero } x ${ i } = ${ numero * i }`);
    i+=1;
}