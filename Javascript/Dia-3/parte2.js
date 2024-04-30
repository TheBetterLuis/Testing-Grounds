let numeroA = prompt("Ingresa primer numero: ");
let numeroB = prompt("Ingresa segundo numero: ");

numeroA = +numeroA
numeroB = +numeroB

const suma = (numeroA) + (numeroB)
const resta = (numeroA) - (numeroB)
const multiplicacion = (numeroA) * (numeroB)
const division = (numeroA) / (numeroB)
const exponenciacion = (numeroA) ** (numeroB)


alert(`El resultado de la suma de (${numeroA}) + (${numeroB}) = ${suma} \nEl resultado de la resta de (${numeroA}) - (${numeroB}) = ${resta}\n El resultado de la multiplicacion de (${numeroA}) * (${numeroB}) = ${multiplicacion}\n El resultado de la division de (${numeroA}) / (${numeroB}) = ${division}\n El resultado de la exponenciacion de  (${numeroA}) ** (${numeroB}) = ${exponenciacion}`);