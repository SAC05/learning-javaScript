const producto = {
    nombre: 'monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}

 //Para agregar nuevas propiedades al objeto 

 producto.imagen = 'imagen.jpg';

 //Eliminar propiedades del objeto 
 delete producto.disponible;
 
 console.log(producto);
