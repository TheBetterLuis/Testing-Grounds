function rng() {
    min = 1; max = 4;
    resultado = Math.trunc(Math.random() * (max - min) + min);
    switch (resultado) { case 1: verde(); break; case 2: amarillo(); break; case 3: rojo(); break; };
};

const Outcomes = [
    [`Bien hecho!, pasaste en el momento adecuado ✅\n¡Has ganado! 😁 (Pasar normalmente)`, `Oh no!, Aceleraste demasiado y chocaste 💥\n¡Has perdido! 😞 (Acelerar)`, `Oh no!\nCreaste un bloqueo y los demas conductores estan furiosos 🤬\n¡Has Perdido! ❌ (Esperar)`],
    [`Oh no!\nNo aceleraste lo suficiente y te han chocado 💥\n¡Has perdido! ❌ (Pasar normalmente)`, `Bien hecho!, pasaste en el momento justo ✅\n¡Has ganado! 😁 (Acelerar)`, `Oh no!\nCreaste un bloqueo y los demas conductores estan furiosos 🤬\n¡Has Perdido! 😞 (Esperar)`],
    [`Oh no!, Pasaste en el momento indebido ❌\n¡Has perdido! 😞 (Pasar normalmente)`, `Oh no!\nCruzaste mientras autos en otra direccion pasaban y chocaste 💥\n¡Has Perdido! ❌ (Acelerar)`, `Bien hecho!, Esperaste en el momento adecuado ✅\n¡Has ganado! 😁 (Esperar)`],
    `Respuesta no valida.`];

function enunciado(string) {
    let valor = prompt(`El semaforo esta de color ${string}\n¿Que desea hacer?\n1) Pasar normalmente\n2) Acelerar\n3) Esperar`); return valor;
}

function verde() {
    let decision = enunciado(`Verde🟢`);
    switch (decision) {
        case "1": alert(`${Outcomes[0][decision - 1]}`); rng(); break;
        case "2": alert(`${Outcomes[0][decision - 1]}`); break;
        case "3": alert(`${Outcomes[0][decision - 1]}`); break;
        case null: break;
        default: alert(`${Outcomes[3]}`); verde(); break;
    };
};

function amarillo() {
    let decision = enunciado(`Amarillo 🟡`);
    switch (decision) {
        case "1": alert(`${Outcomes[1][decision - 1]}`); break;
        case "2": alert(`${Outcomes[1][decision - 1]}`); rng(); break;
        case "3": alert(`${Outcomes[1][decision - 1]}`); break;
        case null: break;
        default: alert(`${Outcomes[3]}`); amarillo(); break;
    };
};


function rojo() {
    let decision = enunciado(`Rojo 🔴`);
    switch (decision) {
        case "1": alert(`${Outcomes[2][decision - 1]}`); break;
        case "2": alert(`${Outcomes[2][decision - 1]}`); break;
        case "3": alert(`${Outcomes[2][decision - 1]}`); rng(); break;
        case null: break;
        default: alert(`${Outcomes[3]}`); rojo(); break;
    };
};

