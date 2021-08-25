const producto = {
    nombre: 'monitor 20 pulgadas',
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}


const producto2 = {
    nombre: 'Tablet',
    precio: 3000,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}

producto.mostrarInfo;
producto2.mostrarInfo;

//La palabra reservada 'This' le ordena a la función que busque las variables desde el mismo objeto que estamos trabajando 