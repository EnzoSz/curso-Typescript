"use strict";
console.log("Hello World mi primer script en Typescript");
//tipos de datos 
//tipos primitivos
//booleanos
let estudiasteJavascript = true;
if (estudiasteJavascript) {
    console.log("Estudiaste Javascript");
}
else {
    console.log("No estudiaste Javascript");
}
//number
let interMiami = 10;
let fcDallas = 11;
let messi = 1;
let juegaMessi = true;
function jugar(equipo1, equipo2, juegaMessi) {
    if (juegaMessi)
        equipo1++;
    if (equipo1 > equipo2)
        console.log("Gano el equipo 1");
    if (equipo1 == equipo2)
        console.log("Empate");
    if (equipo1 < equipo2)
        console.log("Gano el equipo 2");
}
jugar(interMiami, fcDallas, juegaMessi);
//string
let nombre = "Enzo";
//any
let disney; //puede ser cualquier cosa
disney = 'Star Wars y Marvel';
console.log(disney);
disney = 10;
console.log(disney);
disney = true;
console.log(disney);
//arrays
let arreglo = [1, 2, 3, 4, 5];
let matriz2 = [1, 2, 3, 4, 5]; //otra forma de definir un array de tipo number
let arreglo2 = ['a', 'b', 'c', 'd'];
//objetos
let programador = {
    nombre: 'Enzo',
    edad: 25,
    tecnologias: ['Javascript', 'Typescript'],
    developer: true
};
programador = {
    nombre: 'Enzo',
    edad: 25,
    tecnologias: ['Javascript', 'Typescript'],
    developer: false
};
console.log(programador);
//ejemplo de type
let programador2 = {
    nombre: 'Enzo',
    edad: 25,
    tecnologias: ['Javascript', 'Typescript'],
    developer: true
};
//ejemplo de interface
let dev = {
    nombre: 'Enzo',
    edad: 25,
    tecnologias: ['Javascript', 'Typescript'],
    developer: true
};
function enviarCurriculum(programador) {
    console.log(`Este es el curriculum de ${programador.nombre}`);
}
enviarCurriculum(dev);
//clases
class Pelicula {
    constructor(nombre, director, estreno) {
        this.nombre = nombre;
        this.director = director;
        this.estreno = estreno;
    }
}
const pelicula = new Pelicula('Star Wars', 'George Lucas', 1977);
console.log(pelicula);
//encapsulamiento
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    getNumero() {
        return this.numero;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es: ${this.getNumero()}`;
    }
}
let sorteo = new Sorteo('Enzo');
sorteo.setNumero(10);
console.log(sorteo.sortear());
