"use strict"
//Para tener un codigo mucho más estricto habilitamos ' use strict 'en el inicio del codigo..


const producto = {
    nombre: 'monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}
Object.freeze( producto ); 
/*FREEZE es un metodo: para congelar el objeto completo..
Es decir, que no se podría modificar ninguna propiedad dentro del objeto*/


console.log(Object.isFrozen(producto));
// Object.isFrozen lo utilizamos para saber si un objeto está congelado o no... 

