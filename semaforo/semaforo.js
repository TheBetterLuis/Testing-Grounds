/* Ejercicio para realizar en casa - Juego del semaforo.

    Crea un mensaje en pantalla que muestre 3 colores a elegir: 
    VERDE, AMARILLO, ROJO.
    Guarda la respuesta en una variable llamada color.

    Ejemplo: Elige un color para iniciar:
    1) VERDE
    2) AMARILLO
    3) ROJO
    OTRO) Opcion no valida


    Luego crea otro mensaje en pantalla que muestre una situacion con el color ingresado previamente
    y 3 opciones a elegir: Pasar normalmente, Acelerar y Esperar.
    Guarda la respuesta en una variable llamada accion.

    Ejemplo: 
        - El semaforo esta de color ROJO, ¿Que desea hacer?
        1) Pasar normalmente
        2) Acelerar
        3) Esperar
        OTRO) Opcion invalida


    Luego crea la logica con Switch-Case que evalue las respuestas ingresadas en el navegador
    y en base a ello inicie un caso.


    Si la luz es VERDE evaluar:
    - Si el jugador pasa normalmente:
        mostrar un mensaje que diga: Bien hecho!, pasaste en el momento adecuado ✅, ¡Has ganado! 😁
    - Sino, Si el jugador acelera:
        mostrar un mensaje que diga: Oh no!, Aceleraste demasiado y chocaste 💥, ¡Has perdido! 😞
    - Sino, Si el jugador espera:
        mostrar un mensaje que diga: Oh no!, Creaste un bloqueo y los demas conductores estan furiosos 🤬, ¡Has Perdido! ❌
    - De lo contrario
        mostrar un mensaje que diga: Respuesta no valida.
    
    
    Si la luz es AMARILLO evaluar:
    - Si el jugador pasa normalmente:
        mostrar un mensaje que diga: Oh no!, No aceleraste lo suficiente y te han chocado 💥, ¡Has perdido! ❌
    - Sino, Si el jugador acelera:
        mostrar un mensaje que diga: Bien hecho!, pasaste en el momento justo ✅, ¡Has ganado! 😁
    - Sino, Si el jugador espera:
        mostrar un mensaje que diga: Oh no!, Creaste un bloqueo y los demas conductores estan furiosos 🤬, ¡Has Perdido! 😞
    - De lo contrario
        mostrar un mensaje que diga: Respuesta no valida.


    Si la luz es ROJO evaluar:
    - Si el jugador pasa normalmente:
        mostrar un mensaje que diga: Oh no!, Pasaste en el momento indebido ❌, ¡Has perdido! 😞
    - Sino, Si el jugador acelera:
        mostrar un mensaje que diga: Oh no!, Crusaste mientras autos en otra direccion pasaban y chocaste 💥, ¡Has Perdido! ❌
    - Sino, Si el jugador espera:
        mostrar un mensaje que diga: Bien hecho!, Esperaste en el momento adecuado ✅, ¡Has ganado! 😁
    - De lo contrario
        mostrar un mensaje que diga: Respuesta no valida.


    PISTA: en algun momento necesitaras usar if y AND/&&
    PISTA 2: Para los mensajes de retorno puedes usar alert() o console.log()
*/
function elegirColor() {
    let color = prompt(`Elige un color para iniciar:
    🟢 🟡 🔴
    1) VERDE       
    2) AMARILLO 
    3) ROJO
     🟢 🟡 🔴`);

    switch (color) {
        case "1":
            alert("Elegiste El Color Verde 🟢");
            verde();
            break;
        case "2":
            alert("Elegiste El Color Amarillo 🟡");
            amarillo();
            break;
        case "3":
            alert("Elegiste El Color Rojo 🔴");
            rojo();
            break;
        case null:
            break;
        default:
            alert(`Opcion no valida.`);
            elegirColor();
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
            elegirColor();
            break;
        case "2":
            alert(`Oh no!, Aceleraste demasiado y chocaste 💥\n¡Has perdido! 😞 (Acelerar)`);
            elegirColor();
            break;
        case "3":
            alert(`Oh no!\nCreaste un bloqueo y los demas conductores estan furiosos 🤬\n¡Has Perdido! ❌ (Esperar)`);
            elegirColor();
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
            elegirColor();
            break;
        case "2":
            alert(`Bien hecho!, pasaste en el momento justo ✅\n¡Has ganado! 😁 (Acelerar)`);
            elegirColor();
            break;
        case "3":
            alert(`Oh no!\nCreaste un bloqueo y los demas conductores estan furiosos 🤬\n¡Has Perdido! 😞 (Esperar)`);
            elegirColor();
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
            elegirColor();
            break;
        case "2":
            alert(`Oh no!\nCruzaste mientras autos en otra direccion pasaban y chocaste 💥\n¡Has Perdido! ❌ (Acelerar)`);
            elegirColor();
            break;
        case "3":
            alert(`Bien hecho!, Esperaste en el momento adecuado ✅\n¡Has ganado! 😁 (Esperar)`);
            elegirColor();
            break;
        case null:
            break;
        default:
            alert(`Respuesta no valida.`);
            rojo();
            break;
    };
};

