//crear un programa que calcule cuantos grados fahrenheit son
//X grados centigrados. Formula = (x °C × 9/5) + 32

const gradoCentigrado = parseInt(prompt("Ingresa los grados centigrados"))
const gradoFahrenheit = (gradoCentigrado * 9/5) + 32

document.writeln('Los grados centígrados: ' + gradoCentigrado + 'ºC, equivalen a: ' + gradoFahrenheit + 'ºF');
//Ventana emergente para mostrar un mensaje
alert('Los grados centígrados: ' + gradoCentigrado + 'ºC, equivalen a: ' + gradoFahrenheit + 'ºF');
