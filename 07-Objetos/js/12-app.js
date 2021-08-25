const producto = {
    nombre: 'monitor 20 pulgadas',
    precio: 300,
    disponible: true,
   
}

//Object constructor

function producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new producto('Monitor 20 pulgadas', 500);
console.log(producto2); 

const producto3 = new producto('Televisor', 1000);
console.log(producto3);
