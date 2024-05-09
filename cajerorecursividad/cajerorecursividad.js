let clave;
let claveNew;

let saldoCtaCorriente = 1000;
let saldoCtaAhorros = 500;
let intentos = 1;
let monto;
let saldoCtaCorrienteNew;
let saldoCtaAhorrosNew;

function validarClave(claveNew) {

    if (claveNew === undefined) {
        clave = "5050";
    } else {
        clave = claveNew;
    };


    let claveUsuario = prompt("Ingrese su clave:");

    if (claveUsuario) {
        if (claveUsuario === clave && intentos <= 3 && claveUsuario !== null) {

            Bienvenida();
        } else if (intentos < 3 && claveUsuario !== null) {

            intentos++;

            alert(`Clave incorrecta, intente nuevamente.\nIntentos restantes: ${4 - intentos}`);

            validarClave();
        } else if (claveUsuario !== null) {

            alert(`Su cuenta ha sido bloqueada.`);

            intentos = 1;
        }
    } else {
        validarClave();
    }


};

function Bienvenida() {
    alert("Bienvenido a Lexpin Bank");
    menu();

};

function menu() {
    let opcion = prompt(`Seleccione una opcion:
    1. Retirar
    2. Consultar Saldo
    3. Depositar
    4. Transferir
    5. Cambiar Clave
    6. Salir`);

    switch (opcion) {
        case "1":
            alert("Retirar");
            retirar();
            break;
        case "2":
            alert("Consultar");
            consultar();
            break;
        case "3":
            alert("Depositar");
            depositar();
            break;
        case "4":
            alert("Transferir");
            transferir();
            break;
        case "5":
            alert(`Cambiar Clave`);
            cambiarClave(clave, claveNew);
            break;
        case "6":
            salir();
            break;
        default:
            if (opcion != null) {
                alert(`Opcion no valida.`);
                menu();
            };
            break;
    };

};

function retirar() {

    let opcion = prompt(`De que cuenta realizara su retiro?:
    1.Cuenta Corriente
    2.Cuenta de Ahorros`);

    if (opcion != null) {
        switch (opcion) {
            case "1":
                monto = prompt("Ingresa monto a retirar de Cuenta Corriente");
                if ((isNaN(monto) === true) && monto !== null) {
                    alert(`Por favor, solo ingresar numeros (${monto})`);
                } else if (saldoCtaCorriente < monto) {
                    alert(`Saldo insuficiente en cuenta corriente para retirar $${monto}`);
                } else if (monto) {
                    saldoCtaCorrienteNew = (saldoCtaCorriente) - (monto);
                    alert(`Retiro exitoso\nMonto retiro = $${monto}\nSaldo disponible en cuenta corriente $${saldoCtaCorrienteNew}`);
                    actualizarSaldo(saldoCtaCorrienteNew, undefined);
                } else retirar();
                break;
            case "2":
                monto = prompt("Ingresa monto a retirar de Cuenta de Ahorros");
                if ((isNaN(monto) === true) && monto !== null) {
                    alert(`Por favor, solo ingresar numeros (${monto})`);
                } else if (saldoCtaAhorros < monto) {
                    alert(`Saldo insuficiente en cuenta de ahorros para retirar $${monto}`);
                } else if (monto) {
                    saldoCtaAhorrosNew = (saldoCtaAhorros) - (monto);
                    alert(`Retiro exitoso\nMonto retiro = $${monto}\nSaldo disponible en cuenta de Ahorros $${saldoCtaAhorrosNew}`);
                    actualizarSaldo(undefined, saldoCtaAhorrosNew);
                } else retirar();
                break;
            default:
                if (opcion != null) {
                    alert(`Opcion no valida.`);
                    retirar();
                };
                break;
        };
    };
};

function consultar() {
    let opcion = prompt(`Que cuenta desea consultar?
    1.Cuenta Corriente
    2.Cuenta de Ahorros`);
    if (opcion != null) {
        if (opcion == "1") {
            if (saldoCtaCorrienteNew === undefined) {
                alert(`Saldo Cuenta de Corriente: $${saldoCtaCorriente}`);
            } else {
                alert(`Saldo Cuenta de Corriente: $${saldoCtaCorrienteNew}`);
            }
        } else if (opcion == "2") {
            if (saldoCtaAhorrosNew === undefined) {
                alert(`Saldo Cuenta de Ahorros: $${saldoCtaAhorros}`);
            } else {
                alert(`Saldo Cuenta de Ahorros: $${saldoCtaAhorrosNew}`);
            }

        } else {
            alert(`Opcion no valida`);
            consultar;
        }
    }
    menu();
};

function depositar() {

    let opcion = prompt(`A que cuenta desea realizar su deposito ?
    1.Cuenta Corriente
    2.Cuenta de Ahorros`);

    if (opcion != null) {
        switch (opcion) {
            case "1":
                monto = prompt("Ingresa monto a depositar en Cuenta Corriente");
                if ((isNaN(monto) === true) && monto !== null) {
                    alert(`Por favor, solo ingresar numeros (${monto})`);
                } else if (monto) {
                    monto = +monto;
                    saldoCtaCorrienteNew = (saldoCtaCorriente) + (monto);
                    alert(`Deposito exitoso\nMonto deposito = $${monto}\nSaldo disponible en cuenta corriente $${saldoCtaCorrienteNew}`);
                    actualizarSaldo(saldoCtaCorrienteNew, undefined);
                } else depositar();
                break;
            case "2":
                monto = prompt("Ingresa monto a depositar en su Cuenta de Ahorros");
                if ((isNaN(monto) === true) && monto !== null) {
                    alert(`Por favor, solo ingresar numeros (${monto})`);
                } else if (monto) {
                    monto = +monto;
                    saldoCtaAhorrosNew = (saldoCtaAhorros) + (monto);
                    alert(`Deposito exitoso\nMonto deposito = $${monto}\nSaldo disponible en cuenta de Ahorros $${saldoCtaAhorrosNew}`);
                    actualizarSaldo(undefined, saldoCtaAhorrosNew);
                } else depositar();
                break;
            default:
                if (opcion != null) {
                    alert(`Opcion no valida.`);
                    depositar();
                };
                break;
        };
    };
};

function transferir() {

    let opcion = prompt(`Escoja el tipo de transferencia que desea realizar:
    1.Corriente a Ahorros (Corriente -> Ahorros)
    2.Ahorros a Corriente (Ahorros -> Corriente)`);

    switch (opcion) {
        case "1":
            corrienteAhorro(saldoCtaAhorros, saldoCtaAhorrosNew, saldoCtaCorriente, saldoCtaCorrienteNew);
            break;
        case "2":
            ahorroCorriente(saldoCtaAhorros, saldoCtaAhorrosNew, saldoCtaCorriente, saldoCtaCorrienteNew);
            break;
        default:
            if (opcion != null) {
                alert(`Opcion no valida.`);
                transferir();
            };
            break;
    };
};

function cambiarClave(clave, claveNew) {
    claveUsuario = prompt(`Ingresa clave actual`);
    if ((claveUsuario) && claveUsuario == clave) {
        claveNew = prompt(`Crea tu nueva clave`);
        if (claveNew) {
            alert(`Clave actualizada`);
            clave = claveNew;
            alert(`Valores actualizados\nclave = ${clave}\nclaveNew = ${claveNew}`);
            alert(`Por favor ingresa de nuevo con tu nueva clave`);
        } else {
            alert(`La nueva clave no puede estar en blanco`);
            cambiarClave(clave, claveNew);
        }
    } else {
        alert("Clave incorrecta");
        cambiarClave(clave, claveNew);
    }
    validarClave(claveNew);
};

function salir() {
    alert("Gracias por usar este cajero, bye.");
};

function actualizarSaldo(saldoCtaCorrienteNew, saldoCtaAhorrosNew) {
    if (saldoCtaAhorrosNew === undefined) {
        saldoCtaCorriente = saldoCtaCorrienteNew;
        alert(`Valores actualizados\nsaldoCtaCorriente = ${saldoCtaCorriente}\nsaldoCtaCorrienteNew = ${saldoCtaCorrienteNew}`);
    } else if (saldoCtaCorrienteNew === undefined) {
        saldoCtaAhorros = saldoCtaAhorrosNew;
        alert(`Valores actualizados\nsaldoCtaAhorros = ${saldoCtaAhorros}\nsaldoCtaAhorrosNew = ${saldoCtaAhorrosNew}`);
    } else if (saldoCtaCorrienteNew !== undefined && saldoCtaAhorrosNew !== undefined) {
        saldoCtaCorriente = saldoCtaCorrienteNew;
        saldoCtaAhorros = saldoCtaAhorrosNew;
        alert(`Valores actualizados\nsaldoCtaCorriente = ${saldoCtaCorriente}\nsaldoCtaCorrienteNew = ${saldoCtaCorrienteNew}\nsaldoCtaAhorros = ${saldoCtaAhorros}\nsaldoCtaAhorrosNew = ${saldoCtaAhorrosNew}`);
    }
    menu();
};

function corrienteAhorro(saldoCtaAhorros, saldoCtaAhorrosNew, saldoCtaCorriente, saldoCtaCorrienteNew) {
    monto = prompt(`Ingresa monto a transferir a tu cuenta de ahorro\nSaldo disponible en cuenta corriente = $${saldoCtaCorriente}`);
    if (monto != null && monto !== undefined && (isNaN(monto) !== true)) {
        saldoCtaAhorrosNew = (saldoCtaAhorros) + (+monto);
        saldoCtaCorrienteNew = (saldoCtaCorriente) - (+monto);
        actualizarSaldo(saldoCtaCorrienteNew, saldoCtaAhorrosNew);
    }

};

function ahorroCorriente(saldoCtaAhorros, saldoCtaAhorrosNew, saldoCtaCorriente, saldoCtaCorrienteNew) {
    monto = prompt(`Ingresa monto a transferir a tu cuenta corriente\nSaldo disponible en cuenta de ahorros = $${saldoCtaAhorros}`);
    if (monto != null && monto !== undefined && (isNaN(monto) !== true)) {
        saldoCtaAhorrosNew = (saldoCtaAhorros) - (+monto);
        saldoCtaCorrienteNew = (saldoCtaCorriente) + (+monto);
        actualizarSaldo(saldoCtaCorrienteNew, saldoCtaAhorrosNew);
    }

};