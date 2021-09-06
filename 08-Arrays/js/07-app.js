const carrito = [];

//Definir producto 

const producto = {
    nombre: 'Monitor 32 pulgadas',
    precio: 400,
};

const producto2 = {
    nombre: 'Celular',
    precio: '800',
};

//.Push agrega al final de un carrito 

carrito.push(producto);
carrito.push(producto2);

const producto3 ={
    nombre: 'Teclado',
    precio: 50,
};

//.Unshift agrega al Inicio de un carrito 
carrito.unshift(producto3);

console.table(carrito);


//Para eliminar último elemento de un arreglo...
carrito.pop();
console.table(carrito);


//Para eliminar primer elemento de un arreglo 
carrito.shift();
console.table(carrito);

//Para usar ambas funciones de forma imperactiva 

carrito.splice(1, 1);
console.table(carrito);

//Utilizamos el metodo .splice y definimos la posicion de el elemento que queremos eliminar