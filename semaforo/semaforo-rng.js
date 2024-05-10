function rng() {

    min = 1;
    max = 4;
    resultado = Math.trunc(Math.random() * (max - min) + min);

    // alert(`numero random ${resultado}`);

    switch (resultado) {
        case 1:
            verde();
            break;
        case 2:
            amarillo();
            break;
        case 3:
            rojo();
            break;
    };

};



function verde() {
    let decision = prompt(`El semaforo esta de color Verde🟢\n¿Que desea hacer?
    1) Pasar normalmente
    2) Acelerar
    3) Esperar
    `);

    switch (decision) {
        case "1":
            alert(`Bien hecho!, pasaste en el momento adecuado ✅\n¡Has ganado! 😁 (Pasar normalmente)`);
            rng();
            break;
        case "2":
            alert(`Oh no!, Aceleraste demasiado y chocaste 💥\n¡Has perdido! 😞 (Acelerar)`);
            break;
        case "3":
            alert(`Oh no!\nCreaste un bloqueo y los demas conductores estan furiosos 🤬\n¡Has Perdido! ❌ (Esperar)`);
            break;
        case null:
            break;
        default:
            alert(`Respuesta no valida.`);
            verde();
            break;
    };
};



function amarillo() {
    let decision = prompt(`El semaforo esta de color Amarillo 🟡\n¿Que desea hacer?
    1) Pasar normalmente
    2) Acelerar
    3) Esperar
    `);

    switch (decision) {
        case "1":
            alert(`Oh no!\nNo aceleraste lo suficiente y te han chocado 💥\n¡Has perdido! ❌ (Pasar normalmente)`);
            break;
        case "2":
            alert(`Bien hecho!, pasaste en el momento justo ✅\n¡Has ganado! 😁 (Acelerar)`);
            rng();
            break;
        case "3":
            alert(`Oh no!\nCreaste un bloqueo y los demas conductores estan furiosos 🤬\n¡Has Perdido! 😞 (Esperar)`);
            break;
        case null:
            break;
        default:
            alert(`Respuesta no valida.`);
            amarillo();
            break;
    };
};


function rojo() {
    let decision = prompt(`El semaforo esta de color Rojo 🔴\n¿Que desea hacer?
    1) Pasar normalmente
    2) Acelerar
    3) Esperar
    `);

    switch (decision) {
        case "1":
            alert(`Oh no!, Pasaste en el momento indebido ❌\n¡Has perdido! 😞 (Pasar normalmente)`);
            break;
        case "2":
            alert(`Oh no!\nCruzaste mientras autos en otra direccion pasaban y chocaste 💥\n¡Has Perdido! ❌ (Acelerar)`);
            break;
        case "3":
            alert(`Bien hecho!, Esperaste en el momento adecuado ✅\n¡Has ganado! 😁 (Esperar)`);
            rng();
            break;
        case null:
            break;
        default:
            alert(`Respuesta no valida.`);
            rojo();
            break;
    };
};

