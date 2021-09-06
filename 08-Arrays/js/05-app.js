const meses = ['Enero','Febrero','Marzo'];

//Agregar un valor al final del arreglo -->.Push
meses.push('Abril');
meses.push('Mayo');

//----------------------------------------

const carrito = [];

//Creamos los objetos como diferentes productos y luego los agregamos al array utilizando .push o .unshift 

const producto = {
    nombre: 'Monitor 32 pulgadas',
    precio: 400,
};

const producto2 = {
    nombre: 'Celular',
    precio: '800',
};

//.Push agrega nuevo objeto al final de un carrito 

carrito.push(producto);
carrito.push(producto2);

const producto3 ={
    nombre: 'Teclado',
    precio: 50,
};

//.Unshift agrega el valor al Inicio de un carrito 
carrito.unshift(producto3);

console.table(carrito);


