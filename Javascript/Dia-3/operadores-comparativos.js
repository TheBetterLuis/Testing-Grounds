/*
Se conoce como operadores de comparacion a los simbolos que nos permiten realizar operaciones binarias (entre 2 elementos) de comparacion.

Estos operadores nos devuelven un valor booleano (true or false) dependiendo de si la comparacion es verdadera o falsa

   Los operadores de comparacion son los siguientes:

    - Igualdad (==): Compara si dos valores son iguales.
    - Desigualdad (!=): Compara si dos valores son diferentes.
    - Estrictamente igual (===): Compara si dos valores son iguales y del mismo tipo.
    - Estrictamente desigual (!==): Compara si dos valores son diferentes o de diferente tipo.
    - Mayor que (>): Compara si un valor es mayor que otro.
    - Menor que (<): Compara si un valor es menor que otro.
    - Mayor o igual que (>=): Compara si un valor es mayor o igual que otro.
    - Menor o igual que (<=): Compara si un valor es menor o igual que otro


*/

//igual que == devuelve true si los elementos son iguales
// (No toma en cuenta el tipo de dato, solo el valor)


const numero1 = 10;
const numero2 = 10;
const numero3 = 20;
const string1 = "10";
const string2 = "10";
const string3 = "20";

console.log(numero1 == numero2);
console.log(numero1 == string1);
console.log(numero1 == numero3);
console.log(string1 == string2);
console.log(string1 == string3);


// No es igual que != : Devuelve true si los operandos NO son iguales, es decir ! =
// si son difetentes. (no toma en cuenta el tipo de dato, solo el valor)

console.log(numero1 != numero3);
console.log(numero1 != numero2);
console.log(string1 != numero1);
console.log(string1 != string3);
console.log(string1 != string2);


// Estrictamente igual que === : retorna true SI y solo si el valor y el tipo de dato de los operandos ES EL MISMO.

console.log(numero1 === numero2);
console.log(numero1 === string1);
console.log(numero1 === numero3);
console.log(string1 === string2);
console.log(string1 === string3);


// Desigualdad estricta !== : Retorna true SI y solo si el valor y/o el tipo de dato NO ES EL MISMO.
//Piensa en este operador como si se realizara la siguiente pregunta al comparar. hay algo diferente entre estos dos valores ?

console.log(numero1 !== numero2);
console.log(numero1 !== string1);
console.log(numero1 !== numero3);
console.log(string1 !== string2);
console.log(string1 !== string3);

// Para los siguientes operadores utilizaremos los siguientes valores

const precio1 = 100;
const precio2 = 200;
const precio3 = 100;
const precio4 = 350;

// Mayor que > : Retorna true si el primer valor es mayor que el segundo valor.

console.log(precio2 > precio1);
console.log(precio1 > precio2);
console.log(precio1 > precio3);
console.log(precio2 > precio4);

// Menor que < : Retorna true si el primer valor es menor que el segundo valor.

console.log(precio1 < precio2);
console.log(precio2 < precio1);
console.log(precio4 < precio2);
console.log(precio2 < precio4);

// Mayor o igual que >= : Retorna true si el primer valor es mayor o igual que el segundo valor.

console.log(precio1 >= precio3);
console.log(precio1 >= precio2);

// Menor o igual que <= : Retorna true si el primer valor es menor o igual que el segundo valor.

console.log(precio1 <= precio3);
console.log(precio1 <= precio2);
console.log(precio3 <= precio1);


// Ejercicio para realizar en casa

/* 
    Crea 6 variables con valores numericos y realiza las siguientes comparaciones:
    - Igualdad
    - Desigualdad
    - Igualdad estricta
    - Desigualdad estricta
    - Mayor que
    - Menor que
    - Mayor o igual que
    - Menor o igual que


    Tip: Usa Quokka.js para ver los resultados de las comparaciones en tiempo real.
    Recuerda que quokka se inicia con el comando ctrl+k y luego q (en 2 pasos).
*/