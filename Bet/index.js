
function selection(number, boolean) {

    const elemento = document.getElementById(`${number}`);
    const allLinks = document.querySelectorAll('.col-2.offset-1.iconogris');
    allLinks.forEach(link => link.classList.remove('seleccion'));
    elemento.classList.toggle('seleccion');
    animation(number, boolean);
};


const sectionTodos = document.getElementById(`sectionTodos`);
const sectionSuper6 = document.getElementById(`sectionSuper6`);
const sectionLoterias = document.getElementById(`sectionLoterias`);
const sectionAnimalitos = document.getElementById(`sectionAnimalitos`);
const sectionParlay = document.getElementById(`sectionParlay`);
const sectionAmericanas = document.getElementById(`sectionAmericanas`);
const sectionMacuare = document.getElementById(`sectionMacuare`);
const sectionGanadores = document.getElementById(`sectionGanadores`);


function animation(number, boolean) {
    switch (number) {
        case 1:
            if (boolean === false) {

                sectionTodos.classList.add('d-none');
                sectionSuper6.classList.add('d-none');
                sectionLoterias.classList.add('d-none');
                sectionAnimalitos.classList.add('d-none');
                sectionParlay.classList.add('d-none');
                sectionAmericanas.classList.add('d-none');
                sectionMacuare.classList.add('d-none');
                sectionGanadores.classList.add('d-none');
            } else {
                sectionTodos.classList.add('d-none');
                sectionSuper6.classList.add('d-none');
                sectionLoterias.classList.add('d-none');
                sectionAnimalitos.classList.add('d-none');
                sectionParlay.classList.add('d-none');
                sectionAmericanas.classList.add('d-none');
                sectionMacuare.classList.add('d-none');
                sectionGanadores.classList.add('d-none');
                setTimeout(() => {
                    sectionTodos.classList.remove('d-none');
                    sectionSuper6.classList.remove('d-none');
                    sectionLoterias.classList.remove('d-none');
                    sectionAnimalitos.classList.remove('d-none');
                    sectionParlay.classList.remove('d-none');
                    sectionAmericanas.classList.remove('d-none');
                    sectionMacuare.classList.remove('d-none');
                    sectionGanadores.classList.remove('d-none');
                }, 200);
            }
            break;
        case 2:
            animation(1, false);
            setTimeout(() => { sectionSuper6.classList.remove('d-none'); }, 200);
            break;
        case 3:
            animation(1, false);
            setTimeout(() => {
                sectionLoterias.classList.remove('d-none');
            }, 200);
            break;
        case 4:
            animation(1, false);
            setTimeout(() => {
                sectionAnimalitos.classList.remove('d-none');
            }, 200);

            break;
        case 5:
            animation(1, false);
            setTimeout(() => {
                sectionParlay.classList.remove('d-none');
            }, 200);

            break;
        case 6:
            animation(1, false);
            setTimeout(() => {
                sectionAmericanas.classList.remove('d-none');
            }, 200);

            break;
        case 7:
            animation(1, false);
            setTimeout(() => {
                sectionMacuare.classList.remove('d-none');
            }, 200);

            break;
        case 8:
            animation(1, false);
            setTimeout(() => {
                sectionGanadores.classList.remove('d-none');
            }, 200);

            break;
    }
};

// Icono Contrasena
/*
esta causando que las animaciones de las secciones no funcionen

const eyeIcon1 = document.getElementById('eyeIcon1');
const eyeIcon2 = document.getElementById('eyeIcon2');
const eyeIcon3 = document.getElementById('eyeIcon3');

let isPasswordVisible1 = false;
let isPasswordVisible2 = false;
let isPasswordVisible3 = false;

eyeIcon1.addEventListener('click', function () {
    isPasswordVisible1 = !isPasswordVisible1;
    eyeIcon1.classList.toggle('bi-eye-slash');
    eyeIcon1.classList.toggle('bi-eye');
});

eyeIcon2.addEventListener('click', function () {
    isPasswordVisible2 = !isPasswordVisible2;
    eyeIcon2.classList.toggle('bi-eye-slash');
    eyeIcon2.classList.toggle('bi-eye');
});

eyeIcon3.addEventListener('click', function () {
    isPasswordVisible3 = !isPasswordVisible3;
    eyeIcon3.classList.toggle('bi-eye-slash');
    eyeIcon3.classList.toggle('bi-eye');
});

*/