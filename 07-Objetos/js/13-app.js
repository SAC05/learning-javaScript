const producto = {
    nombre: 'monitor 20 pulgadas',
    precio: 300,
    disponible: true,
   
}

//Utilizamos Tres metodos para Objetos 

console.log(Object.keys( producto ));
/*Object.keys la utilizamos para saber si un objeto tiene o no tiene información 
Pero nos retorna las llaves, es decir solo la parte de la izquierda*/


console.log(Object.values(producto));
//Object.values nos retorna los valores, es decir la parte de la derecha

console.log(Object.entries(producto));
//Object.entries Te retorna toda la información en pares 