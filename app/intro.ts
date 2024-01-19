let saludo = 'Hola Mundo';
let nombre : string = 'Mariano';
let numero : number;
let booleano : boolean = true;
let colores:  Array<string> = ['pink', 'blue', 'yellos', 'red']
let animales: string[] = ['Dog', 'Cat', 'Monkey'];
let arrNumber: number[] = [ 1, 2, 4, 5];
let arrObj: unknown[] = [1,2 ,'pepito', [1,3, 'naranja mecanica'], 'Uma Chancho'];
enum diasSemana {
    lunes,
    martes,
    miercoles,
    jueves,
    viernes,
    sabado,
    domingo
};
let hoy:diasSemana = diasSemana.martes;

nombre = 'Damian',
numero = 238894.23;

//FUNCIONES
function saludar(nombre: string) : string{
    return `Hola como estas ${nombre}`;
};
function saludar2(nombre: string) : void{ //cuando no retorna nada
    console.log(`Hola como estas ${nombre}`);
}

//CLASES
class Producto{
    constructor(public nombre: string, public precio: number){}
    mostrarDetalles(): void{
        console.log(`Producto: ${this.nombre}, Precio: ${this.precio}`);
    }
}

//TYPE
type Color = 'Rojo' | 'Verde' | 'Amarillo';
let colors: Color = 'Verde';

//USO DE TIPO GENERICO
function duplicar<T>(valor : T){
    return valor;
}
const numeroDuplicado : number = duplicar(5);
console.log('Numero Duplicado', numeroDuplicado);
const textoDuplicado : string = duplicar('Holis');
console.log(textoDuplicado);



console.log(saludo);
console.log(nombre);
console.log(numero);
console.log(booleano);
console.log(colores);
console.log(animales);
console.log(arrNumber);
console.log(arrObj);
console.log('hoy', hoy);
console.log(saludar('Manolo'));
saludar2('Pepe')
let producto = new Producto('banana', 243);
producto.mostrarDetalles();
console.log(colors);


//INTERFAZ

interface Persona  {
    nombre: string;
    apellido: string;
    edad: number;
    direccion: Direccion;
};

interface Direccion  {
    calle: string;
    numero: number;
}

const persona:Persona = {
    nombre: 'Mariano',
    apellido: 'Macias Gandulfo',
    edad: 32,
    direccion:{
        calle: 'Herrera',
        numero: 2026,
    }
}

interface Animal{
    nombre: string;
    tipo: string;
};

interface Pajaro extends Animal{
    color: string;
    aniosVida: number;
};

const Tortuga: Animal = {
    nombre: 'Margarita',
    tipo: 'Reptil'
}

const Ornero: Pajaro = {
    nombre: 'Carlo',
    tipo: 'Volador',
    color: 'Blue',
    aniosVida: 45,
}




