let depositos = [];
let retiros = [];
let balance = 20000;

const f = new Intl.NumberFormat(["es-DO"], {
    style:"currency", 
    currency:"DOP",
    currencyDisplay:"symbol",
    maximumFractionDigits:2
});


alert("Hola, bienvenido a tu banco digital!");
let confirmarAcceso = confirm("¿Deseas ingresar al cajero automático?")

if(!confirmarAcceso) alert("¡Programa cancelado!");

// Programa
while(confirmarAcceso){
    let eleccion = prompt(
        `¿Qué deseas hacer?:  
        1. Consultar Balance
        2. Hacer depósitos
        3. Realizar Retiros
        4. Transacciones realizadas

        ℹ️ Para salir del programa presione → Cancelar.
        `
    );
    
    switch (eleccion) {
        case "1":
            alert(`Tu balance 💰 actual es de: ${ f.format(balance) }`);
            break;
        case "2":
            let montoDeposito = parseFloat( prompt("Ingresa el monto a depositar:"))
            depositos.push(montoDeposito);
            balance += montoDeposito;
            
            alert("Deposito agregado a tu cuenta.");
            break;
        case "3":
            let montoRetiro = parseFloat( prompt("Ingresa el monto a retirar:"))
            retiros.push(montoRetiro);
            balance -= montoRetiro;

            alert("Retiro efectuado a tu cuenta.");
            break;
        case "4":
            alert("¡El resultado es mostrado por consola!");
            
            let creditos = depositos.map(d => f.format(d));
            let debitos = retiros.map(d => f.format(d));

            console.table({"Creditos":creditos, "Debitos":debitos});

            break;
        default:
            confirmarAcceso = confirm(
            `¿Deseas continuar?

            ℹ️ Para salir del programa presione → Cancelar.
            `);
            break;
    }

    if(!confirmarAcceso) alert("¡Fin del programa! 👋🏽");
}

