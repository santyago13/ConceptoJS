// Cree un programa al estilo de un cajero automatico con las siguientes opciones:
// 1- consultar el saldo
// 2- ingresar dinero
// 3- extraer dinero

/* 
switch (opcion) {
    case 1:
        todas las lineas de codigo que se ejecutan si la opcion es 1
        break;
    case 2:
        todas las lineas de codigo que se ejecutan si la opcion es 1
        break;
    case n:
        todas las lineas de codigo que se ejecutan si la opcion es 1
        break;
    default:
        todas las lineas de codigo que se ejecutan si la opcion no es ninguna de las anteriores
*/

const opcion = prompt(
  "Seleccione una opción:1- Consultar saldo, 2- Ingresar dinero, 3- Extraer dinero"
);
let saldo = 10000;

switch (opcion) {
  case "1":
    document.writeln("Su saldo actual es: $" + saldo);
    break;
  case "2":
    const deposito = parseFloat(prompt("Ingrese la cantidad a depositar:"));
    if (deposito >= 1000 && deposito <= 2000000) {
      saldo = saldo + deposito;
      document.writeln("Depósito exitoso. Su nuevo saldo es: $" + saldo);
    } else {
      alert("El depósito debe estar entre $1000 y $2000000.");
    }
    break;
  case "3":
    const extraccion = parseFloat(prompt("Ingrese la cantidad a extraer:"));
    if (extraccion <= saldo) {
      saldo = saldo - extraccion;
      document.writeln("Extracción exitosa. Su nuevo saldo es: $" + saldo);
    } else {
      alert("Monto invalido.");
    }
    break;
  default:
    alert("Opción no válida. Por favor, seleccione una opción del 1 al 3.");
}

