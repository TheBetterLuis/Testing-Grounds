const iniciopage = document.querySelector('.comienzo');

const verdepage = document.querySelector('.verdeP');
const verdeAce = document.querySelector('.verdeWrongAcelerar');
const verdeclap = document.querySelector('.verdeWelldone');
const verdeEspe = document.querySelector('.verdeWrongEsperar');

const amarillopage = document.querySelector('.amarilloP');
const amarilloclap = document.querySelector('.amarilloWelldone');
const amarilloPasa = document.querySelector('.amarilloWrongPasarNormalmente');
const amarilloEspe = document.querySelector('.amarilloWrongEsperar');

const rojopage = document.querySelector('.rojoP');
const rojoAce = document.querySelector('.rojoWrongAcelerar');
const rojoPasa = document.querySelector('.rojoWrongPasarNormalmente');
const rojoclap = document.querySelector('.rojoWelldone');

verdepage.style.display = 'none';
verdeAce.style.display = 'none';
verdeclap.style.display = 'none';
verdeEspe.style.display = 'none';

amarillopage.style.display = 'none';
amarilloclap.style.display = 'none';
amarilloPasa.style.display = 'none';
amarilloEspe.style.display = 'none';


rojopage.style.display = 'none';
rojoAce.style.display = 'none';
rojoPasa.style.display = 'none';
rojoclap.style.display = 'none';





// function hidethat() {
//     iniciopage.forEach((elemento) => {
//         elemento.classList.toggle('hidden');
//     });
// };

// testing = () => { alert(`a message`); };

// function hideTitle() {
//     const title = document.querySelector('.title');

//     if (title.style.display === 'none') {
//         title.style.display = 'block';
//     } else {
//         title.style.display = 'none';
//     }

// }

function startGame() {
    const elemento = document.querySelector('.comienzo');
    if (elemento.style.display === 'none') {
        elemento.style.display = 'grid';
    } else {
        elemento.style.display = 'none';
    }

    rng();
};

function rng() {
    min = 1; max = 4;
    resultado = Math.trunc(Math.random() * (max - min) + min);
    switch (resultado) { case 1: verde(); break; case 2: amarillo(); break; case 3: rojo(); break; };
};

// verde
function verde() {
    verdepage.style.display = 'grid';
};

function verdeAcelerar() {
    verdeAce.style.display = 'grid';
    verdepage.style.display = 'none';
};

function verdeContinue() {
    verdeclap.style.display = 'none';
    verdeAce.style.display = 'none';
    verdeEspe.style.display = 'none';
    rng();
};

function verdePasarNormalmente() {
    verdeclap.style.display = 'grid';
    verdepage.style.display = 'none';
};

function verdeEsperar() {
    verdeEspe.style.display = 'grid';
    verdepage.style.display = 'none';
};

// amarillo
function amarillo() {
    amarillopage.style.display = 'grid';
};

function amarilloAcelerar() {
    amarilloclap.style.display = 'grid';
    amarillopage.style.display = 'none';

};

function amarilloContinue() {
    amarilloclap.style.display = 'none';
    amarilloPasa.style.display = 'none';
    amarilloEspe.style.display = 'none';
    rng();
};

function amarilloPasarNormalmente() {
    amarillopage.style.display = 'none';
    amarilloPasa.style.display = 'grid';
};

function amarilloEsperar() {
    amarillopage.style.display = 'none';
    amarilloEspe.style.display = 'grid';
};

// rojo
function rojo() {
    rojopage.style.display = 'grid';
};


function rojoAcelerar() {
    rojopage.style.display = 'none';
    rojoAce.style.display = 'grid';


};

function rojoPasarNormalmente() {
    rojopage.style.display = 'none';
    rojoPasa.style.display = 'grid';
};

function rojoEsperar() {
    rojoclap.style.display = 'grid';
    rojopage.style.display = 'none';
};

function rojoContinue() {
    rojoAce.style.display = 'none';
    rojoPasa.style.display = 'none';
    rojoclap.style.display = 'none';
    rng();
};


function exitGame() {
    verdepage.style.display = 'none';
    verdeAce.style.display = 'none';
    verdeclap.style.display = 'none';
    verdeEspe.style.display = 'none';

    amarillopage.style.display = 'none';
    amarilloclap.style.display = 'none';
    amarilloPasa.style.display = 'none';
    amarilloEspe.style.display = 'none';


    rojopage.style.display = 'none';
    rojoAce.style.display = 'none';
    rojoPasa.style.display = 'none';
    rojoclap.style.display = 'none';

    iniciopage.style.display = 'grid';


};