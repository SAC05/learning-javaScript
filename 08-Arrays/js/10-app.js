const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'Televisión', precio: 5100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700},
]

carrito.map(function(producto){
    console.log(`${producto.nombre} - Precio: ${producto.precio } `)
} );


carrito.forEach(function(producto){
    console.log(`${producto.nombre} - Precio: ${producto.precio } `)
} );