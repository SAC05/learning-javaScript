const producto = {
    nombre: 'monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}

producto.disponible = false;

delete producto.precio;

console.log(producto);


/* El valor de la constante no se puede cambiar... 
Pero si está en un objeto sus valores pueden ser reasignados o eliminados */

