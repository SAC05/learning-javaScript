"use strict"

const producto = {
    nombre: 'monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}

Object.seal( producto );
//El metodo .seal es similar a .freeze, solo que .seal nos permite modificar las llaves existentes dentro de un objecto.
//pero no deja ni eliminar ni agregar llaves.

console.log(Object.isSealed(producto));
//Object.isSealed la utilizamos para verificar si un objeto está sellado. 

//Seal = sellar
