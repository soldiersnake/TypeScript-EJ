"use strict";
let saludo = 'Hola Mundo';
let nombre = 'Mariano';
let numero;
let booleano = true;
let colores = ['pink', 'blue', 'yellos', 'red'];
let animales = ['Dog', 'Cat', 'Monkey'];
let arrNumber = [1, 2, 4, 5];
let arrObj = [1, 2, 'pepito', [1, 3, 'naranja mecanica'], 'Uma Chancho'];
var diasSemana;
(function (diasSemana) {
    diasSemana[diasSemana["lunes"] = 0] = "lunes";
    diasSemana[diasSemana["martes"] = 1] = "martes";
    diasSemana[diasSemana["miercoles"] = 2] = "miercoles";
    diasSemana[diasSemana["jueves"] = 3] = "jueves";
    diasSemana[diasSemana["viernes"] = 4] = "viernes";
    diasSemana[diasSemana["sabado"] = 5] = "sabado";
    diasSemana[diasSemana["domingo"] = 6] = "domingo";
})(diasSemana || (diasSemana = {}));
;
let hoy = diasSemana.martes;
nombre = 'Damian',
    numero = 238894.23;
//FUNCIONES
function saludar(nombre) {
    return `Hola como estas ${nombre}`;
}
;
function saludar2(nombre) {
    console.log(`Hola como estas ${nombre}`);
}
//CLASES
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    mostrarDetalles() {
        console.log(`Producto: ${this.nombre}, Precio: ${this.precio}`);
    }
}
let colors = 'Verde';
//USO DE TIPO GENERICO
function duplicar(valor) {
    return valor;
}
const numeroDuplicado = duplicar(5);
console.log('Numero Duplicado', numeroDuplicado);
const textoDuplicado = duplicar('Holis');
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
saludar2('Pepe');
let producto = new Producto('banana', 243);
producto.mostrarDetalles();
console.log(colors);
;
const persona = {
    nombre: 'Mariano',
    apellido: 'Macias Gandulfo',
    edad: 32,
    direccion: {
        calle: 'Herrera',
        numero: 2026,
    }
};
;
;
const Tortuga = {
    nombre: 'Margarita',
    tipo: 'Reptil'
};
const Ornero = {
    nombre: 'Carlo',
    tipo: 'Volador',
    color: 'Blue',
    aniosVida: 45,
};
