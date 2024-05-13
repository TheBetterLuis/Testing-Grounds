let claveCreada;

function createPassword() {
    claveCreada = prompt(`Ingresa tu clave\nRequerimientos para la clave:
    -Longitud mínima de 8 caracteres.
    -Combinación de letras minúsculas y mayúsculas.
    -Inclusión de al menos un símbolo como @, !, $, %, #, ^, &, *, .
    -Presencia de al menos un número.
    Ejemplo de clave segura: MiClaveSegura123#`);
    claveCreada = claveCreada.toString();
    numberverify(claveCreada);
    symbolverify(claveCreada);
    lengthverify(claveCreada);
    upperlowerverify(claveCreada);
    //     alert(`Tiene numeros? = ${numberverify(claveCreada)} (${claveCreada})
    // Tiene simbolos? = ${symbolverify(claveCreada)} (${claveCreada})
    // Tiene 8 caracteres o mas? = ${lengthverify(claveCreada)} (${claveCreada})
    // Tiene letras minusculas y mayusculas? = ${upperlowerverify(claveCreada)} (${claveCreada})`);

    if (numberverify(claveCreada) === true && symbolverify(claveCreada) === true && lengthverify(claveCreada) === true && upperlowerverify(claveCreada) === true) {
        alert(`Congratuleishons has creado tu clave (${claveCreada})`);
    } else {
        alert(`Tu clave no cumple con los requisitos, intentalo de nuevo (${claveCreada})`);
        createPassword();
    }
};

function upperlowerverify(claveCreada) {
    let uppercont = 0;
    let lowercont = 0;

    for (let i = 0; i < claveCreada.length; i++) {

        if ((claveCreada.charAt(i)) == (claveCreada.charAt(i).toUpperCase(i))) {
            if (claveCreada.charAt(i) === "@" || claveCreada.charAt(i) === "$" || claveCreada.charAt(i) === "." || claveCreada.charAt(i) === "&" || claveCreada.charAt(i) === "*" || claveCreada.charAt(i) === "^" || claveCreada.charAt(i) === "%" || claveCreada.charAt(i) === "#" || claveCreada.charAt(i) === "!" || claveCreada.charAt(i) === "1" || claveCreada.charAt(i) === "2" || claveCreada.charAt(i) === "3" || claveCreada.charAt(i) === "4" || claveCreada.charAt(i) === "5" || claveCreada.charAt(i) === "6" || claveCreada.charAt(i) === "7" || claveCreada.charAt(i) === "8" || claveCreada.charAt(i) === "9" || claveCreada.charAt(i) === "0") {
                continue
            } else {
                uppercont++;
            }
        } else if (claveCreada.charAt(i) === "@" || claveCreada.charAt(i) === "$" || claveCreada.charAt(i) === "." || claveCreada.charAt(i) === "&" || claveCreada.charAt(i) === "*" || claveCreada.charAt(i) === "^" || claveCreada.charAt(i) === "%" || claveCreada.charAt(i) === "#" || claveCreada.charAt(i) === "!" || claveCreada.charAt(i) === "1" || claveCreada.charAt(i) === "2" || claveCreada.charAt(i) === "3" || claveCreada.charAt(i) === "4" || claveCreada.charAt(i) === "5" || claveCreada.charAt(i) === "6" || claveCreada.charAt(i) === "7" || claveCreada.charAt(i) === "8" || claveCreada.charAt(i) === "9" || claveCreada.charAt(i) === "0") {
            continue
        } else {
            lowercont++;
        }
    }

    if (uppercont >= 1 && lowercont >= 1) {
        return true;
        // return (`${uppercont}, ${lowercont}`);
    } else {
        return false;
        // return (`${uppercont}, ${lowercont}`);
    }
};


function symbolverify(claveCreada) {


    if (claveCreada.includes("@") || claveCreada.includes("$") || claveCreada.includes(".") || claveCreada.includes("&") || claveCreada.includes("*") || claveCreada.includes("^") || claveCreada.includes("%") || claveCreada.includes("#") || claveCreada.includes("!")) {
        return true;
    } else {
        return false;
    }
};

function lengthverify(claveCreada) {
    if (claveCreada.length >= 8) {
        return true;
    } else {
        return false;
    }
};

function numberverify(claveCreada) {
    if (claveCreada.includes("0") || claveCreada.includes("1") || claveCreada.includes("2") || claveCreada.includes("3") || claveCreada.includes("4") || claveCreada.includes("5") || claveCreada.includes("6") || claveCreada.includes("7") || claveCreada.includes("8") || claveCreada.includes("9")) {
        return true;
    } else {
        return false;
    }
};

console.log(numberverify("Luis"));
console.log(lengthverify("Luis1232"));
console.log(symbolverify("Luis123!2"));
console.log(upperlowerverify("eT#@!#$%^&*"));
console.log("123".toString());



