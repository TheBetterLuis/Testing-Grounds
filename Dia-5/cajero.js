// Ejercicio para realizar en casa:
// Realiza la logica de un cajero automatico que permita lo siguiente:

// 1- Solicitar al usuario que ingrese su clave personal
// 2- Si la clave es correcta, mostrar un mensaje de bienvenida con un menu de opciones (retirar, depositar, consultar saldo)
// 2.1- Si el usuario selecciona la opcion de retirar, solicitar el monto a retirar y mostrar un mensaje con el monto retirado y otro
// con el saldo restante.
// 2.2- Si el usuario selecciona la opcion de depositar, solicitar el monto a depositar y mostrar un mensaje con el monto depositado 
// y otro con el saldo actualizado.
// 2.3- Si el usuario selecciona la opcion de consultar saldo, mostrar un mensaje con el saldo actual.
// 3- Si la clave es incorrecta, mostrar un mensaje de error


let saldo = 100;
let valorusuario;
let total;
let opcion;
const clavepersonal = "1234";
let claveingresada;

alert("Bienvenido al cajero automatico\n");

claveingresada = prompt("Ingresa tu clave personal para acceder a las funciones del cajero");

if (claveingresada != null) {


    if (claveingresada == clavepersonal) {
        opcion = prompt("Que operacion deseas realizar el dia de hoy?\n1 - Retirar dinero\n2 - Depositar dinero \n3 - Verificar saldo disponible\n4 - Salir");

        if (opcion != null) {

            if (opcion == 1) {
                valorusuario = prompt("Que monto deseas retirar")
                if (valorusuario != null) {
                    if (isNaN(valorusuario) === true) {
                        alert(`Por favor ingresa solo numeros(${valorusuario})`);
                        alert("Sesion finalizada");
                    } else if (valorusuario > saldo) {
                        alert(`Saldo insuficiente para realizar retiro de ${valorusuario} $ \n`);
                        alert(`Saldo disponible = ${saldo} $`);
                        alert("Sesion finalizada");
                    } else {
                        valorusuario = +valorusuario;
                        total = (saldo) - (valorusuario);
                        alert("Operacion exitosa");
                        alert(`Saldo disponible = ${total} $`);
                        alert("Sesion finalizada");
                        saldo = total;
                    }
                }
            } else if (opcion == 2) {
                valorusuario = prompt("Que monto deseas depositar")
                if (valorusuario != null) {
                    if (isNaN(valorusuario) === true) {
                        alert(`Por favor ingresa solo numeros(${valorusuario})`);
                        alert("Sesion finalizada");
                    } else {
                        valorusuario = +valorusuario;
                        total = (saldo) + (valorusuario);
                        alert("Operacion exitosa");
                        alert(`Saldo disponible = ${total} $`);
                        alert("Sesion finalizada");
                        saldo = total;
                    }
                }
            } else if (opcion == 3) {
                alert(`Saldo disponible = ${saldo} $`);
                alert("Sesion finalizada");
            } else if (opcion == 4) {
                alert("Sesion finalizada");
            } else {
                alert("Opcion invalida");
                alert("Sesion finalizada");
            }
        }
    } else {
        alert("Contraseña incorrecta");
        alert("Sesion finalizada");
    }


}


