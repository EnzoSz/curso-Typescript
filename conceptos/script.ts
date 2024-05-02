console.log("Hello World mi primer script en Typescript");

//tipos de datos 
//tipos primitivos
//booleanos
let estudiasteJavascript: boolean = true;

if (estudiasteJavascript) {
    console.log("Estudiaste Javascript");
    
} else {
    console.log("No estudiaste Javascript");
    
}

//number
let interMiami: number = 10;
let fcDallas: number = 11;
let messi: number = 1;
let juegaMessi: boolean = true;
function jugar(equipo1: number, equipo2: number, juegaMessi: boolean): void {
    if (juegaMessi) equipo1++;
    if (equipo1 > equipo2) console.log("Gano el equipo 1");
    if (equipo1 == equipo2) console.log("Empate");
    if (equipo1 < equipo2) console.log("Gano el equipo 2");
}

jugar(interMiami, fcDallas, juegaMessi);

//string
let nombre: string = "Enzo";

//any
let disney: any; //puede ser cualquier cosa

disney = 'Star Wars y Marvel';
console.log(disney);

disney = 10;
console.log(disney);
disney = true;
console.log(disney);

//arrays

let arreglo: number[] = [1, 2, 3, 4, 5];

let matriz2: Array<number> = [1, 2, 3, 4, 5]; //otra forma de definir un array de tipo number
let arreglo2: string[] = ['a', 'b', 'c', 'd'];

//objetos
let programador = {
    nombre: 'Enzo',
    edad: 25,
    tecnologias: ['Javascript', 'Typescript'],
    developer: true
}

programador = {
    nombre: 'Enzo',
    edad: 25,
    tecnologias: ['Javascript', 'Typescript'],
    developer: false
}

console.log(programador);

//type
type Developer = {
    nombre: string,
    edad: number,
    tecnologias: string[],
    developer: boolean
}
//ejemplo de type
let programador2: Developer = {
    nombre: 'Enzo',
    edad: 25,
    tecnologias: ['Javascript', 'Typescript'],
    developer: true
}

//interface
interface Developers {
    nombre: string,
    edad: number,
    tecnologias: string[],
    developer: boolean
}

//ejemplo de interface
let dev: Developers = {
    nombre: 'Enzo',
    edad: 25,
    tecnologias: ['Javascript', 'Typescript'],
    developer: true
}
function enviarCurriculum(programador: Developers): void {
    console.log(`Este es el curriculum de ${programador.nombre}`);
    
}

enviarCurriculum(dev);

//clases

class Pelicula {
    public nombre: string;
    public director: string;
    public estreno: number;
    constructor(nombre: string, director: string, estreno: number) {
        this.nombre = nombre;
        this.director = director;
        this.estreno = estreno;
    }
}

const pelicula = new Pelicula('Star Wars', 'George Lucas', 1977);

console.log(pelicula);

//encapsulamiento
class Sorteo<T> {
private numero? : T;
    constructor(private nombre: string) {}
    setNumero(numero: T) {
        this.numero = numero;
    }
    getNumero() {
        return this.numero;
    }

    public sortear(): string {
        return `Para ${this.nombre} el ticket es: ${this.getNumero()}`;
    }
}

let sorteo = new Sorteo<number>('Enzo');
sorteo.setNumero(10);
console.log(sorteo.sortear());