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

const producto3 ={
    nombre: 'Teclado',
    precio: 50,
};
 //Crear un nuevo arreglo con el Spread operator
 
let resultado;
    resultado = [...carrito, producto];
    resultado = [producto2, ...resultado];
    resultado = [producto3, ...resultado];

console.table(resultado); 



