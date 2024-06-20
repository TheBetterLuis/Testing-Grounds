const empleados = [
    {
        nombre: "Juan",
        apellido: "Pérez",
        edad: 30,
        pais: "Venezuela",
        ciudad: "Maracaibo",
        profesion: "Programador",
        salario: 2500,
        estadoCivil: "Soltero",
        hobbies: ["Fútbol", "Leer", "Jugar videojuegos"],
        fechaNacimiento: "15/08/1994",
        genero: "M",
        codigoEmpleado: "EF-001"
    },
    {
        nombre: "María",
        apellido: "García",
        edad: 28,
        pais: "Argentina",
        ciudad: "Buenos Aires",
        profesion: "Diseñadora",
        salario: 3000,
        estadoCivil: "Casada",
        hobbies: ["Dibujar", "Bailar", "Viajar"],
        fechaNacimiento: "07/10/1996",
        genero: "F",
        codigoEmpleado: "ET-001"
    },
    {
        nombre: "Pedro",
        apellido: "López",
        edad: 42,
        pais: "España",
        ciudad: "Madrid",
        profesion: "Tester",
        salario: 4000,
        estadoCivil: "Divorciado",
        hobbies: ["Ciclismo", "Cocinar", "Ver películas"],
        fechaNacimiento: "22/01/1982",
        genero: "M",
        codigoEmpleado: "EF-002"
    },
    {
        nombre: "Ana",
        apellido: "Martínez",
        edad: 25,
        pais: "México",
        ciudad: "Ciudad de México",
        profesion: "Analista",
        salario: 2700,
        estadoCivil: "Soltera",
        hobbies: ["Leer", "Ir al cine", "Hacer yoga"],
        fechaNacimiento: "12/03/1999",
        genero: "F",
        codigoEmpleado: "ET-002"
    },
    {
        nombre: "Carlos",
        apellido: "Romero",
        edad: 35,
        pais: "Colombia",
        ciudad: "Bogotá",
        profesion: "Programador",
        salario: 3200,
        estadoCivil: "Casado",
        hobbies: ["Jugar videojuegos", "Practicar deportes", "Salir con amigos"],
        fechaNacimiento: "04/06/1989",
        genero: "M",
        codigoEmpleado: "EF-003"
    },
    {
        nombre: "Isabel",
        apellido: "Flores",
        edad: 27,
        pais: "Perú",
        ciudad: "Lima",
        profesion: "Diseñadora",
        salario: 2800,
        estadoCivil: "Soltera",
        hobbies: ["Pintar", "Escribir", "Escuchar música"],
        fechaNacimiento: "18/11/1996",
        genero: "F",
        codigoEmpleado: "ET-003"
    },
    {
        nombre: "Diego",
        apellido: "Gómez",
        edad: 40,
        pais: "Chile",
        ciudad: "Santiago",
        profesion: "Tester",
        salario: 4500,
        estadoCivil: "Divorciado",
        hobbies: ["Viajar", "Cocinar", "Leer libros de historia"],
        fechaNacimiento: "09/05/1984",
        genero: "M",
        codigoEmpleado: "EF-004"
    },
    {
        nombre: "Andrea",
        apellido: "Álvarez",
        edad: 32,
        pais: "Ecuador",
        ciudad: "Quito",
        profesion: "Analista",
        salario: 3100,
        estadoCivil: "Casada",
        hobbies: ["Hacer senderismo", "Ir al gimnasio", "Ver series"],
        fechaNacimiento: "20/02/1992",
        genero: "F",
        codigoEmpleado: "ET-004"
    },

];

let empleados2 = [];

class Persona {
    constructor(nombre, apellido, edad, pais, ciudad, salario, codigoEmpleado) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.pais = pais;
        this.ciudad = ciudad;
        this.salario = salario;
        this.codigoEmpleado = codigoEmpleado;
    }
}

/*
    La promesa debe retornar un array de objetos con la siguiente estructura:
    - Nombre
    - Apellido
    - Edad
    - Pais
    - Ciudad
    - Salario
    - Codigo de empleado

*/

function buscarEmpleados() {
    document.getElementById('loader').classList.remove('hidden');
    document.getElementById("buscar").removeEventListener('click', buscarEmpleados);
    const tomarEmpleados = new Promise((resolve, reject) => {
        setTimeout(() => {
            empleados2 = empleados.map((empleado) => {
                return new Persona(empleado.nombre, empleado.apellido, empleado.edad, empleado.pais, empleado.ciudad, empleado.salario, empleado.codigoEmpleado)
            });

            if (empleados2.length > 0) {
                resolve();
            } else {
                reject();
            }
        }, 1500);
    });

    tomarEmpleados
        .then(() => {
            console.table(empleados2);
        })
        .then(() => {
            document.getElementById('loader').classList.add('hidden');
            let tabla = document.getElementById('tbody');
            empleados2.forEach((empleado) => {
                //creamos los nodos(fila y celdas)
                let fila = document.createElement('tr');
                let celdaNombre = document.createElement('td');
                let celdaApellido = document.createElement('td');
                let celdaEdad = document.createElement('td');
                let celdaPais = document.createElement('td');
                let celdaCiudad = document.createElement('td');
                let celdaSalario = document.createElement('td');
                let celdacodigoEmpleado = document.createElement('td');

                //Estilizamos las celdas
                celdaNombre.classList.add("border-2", "border-solid", "border-black", "px-5", "font-semibold", "text-center");
                celdaApellido.classList.add("border-2", "border-solid", "border-black", "px-5", "font-semibold", "text-center");
                celdaEdad.classList.add("border-2", "border-solid", "border-black", "px-5", "font-semibold", "text-center");
                celdaPais.classList.add("border-2", "border-solid", "border-black", "px-5", "font-semibold", "text-center");
                celdaCiudad.classList.add("border-2", "border-solid", "border-black", "px-5", "font-semibold", "text-center");
                celdaSalario.classList.add("border-2", "border-solid", "border-black", "px-5", "font-semibold", "text-center");
                celdacodigoEmpleado.classList.add("border-2", "border-solid", "border-black", "px-5", "font-semibold", "text-center");

                //cargamos la info 
                celdaNombre.innerText = empleado.nombre;
                celdaApellido.innerText = empleado.apellido;
                celdaEdad.innerText = empleado.edad;
                celdaPais.innerText = empleado.pais;
                celdaCiudad.innerText = empleado.ciudad;
                celdaSalario.innerText = empleado.salario;
                celdacodigoEmpleado.innerText = empleado.codigoEmpleado;

                fila.appendChild(celdaNombre);
                fila.appendChild(celdaApellido);
                fila.appendChild(celdaEdad);
                fila.appendChild(celdaPais);
                fila.appendChild(celdaCiudad);
                fila.appendChild(celdaSalario);
                fila.appendChild(celdacodigoEmpleado);

                tabla.appendChild(fila);
            })
        })
        // En caso de que la promesa sea rechazada, mostramos un mensaje de error en la consola.
        .catch((error) => {
            console.log(error);
        })
        // Por ultimo, mostramos un mensaje en la consola indicando que la promesa ha finalizado.
        .finally(() => {
            console.log('La promesa ha finalizado');
            document.getElementById('laTabla').classList.remove('hidden');
            document.getElementById("buscar").classList.add('hidden');
        });
}

document.getElementById("buscar").addEventListener('click', buscarEmpleados);

