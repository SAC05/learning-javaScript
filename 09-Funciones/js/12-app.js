const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'Televisión', precio: 5100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700},
]

carrito.map( producto =>  `${producto.nombre} - Precio: ${producto.precio } `);

carrito.forEach( producto => `${producto.nombre} - Precio: ${producto.precio } `); 
