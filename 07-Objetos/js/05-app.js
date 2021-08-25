const producto = {
    nombre: 'monitor 20 pulgadas',
    precio: 300,
    disponible: true,
    informacion : {
        medidas :{
            peso: '1kg',
            medida: '1m'
        },
        fabricación: {
            pais: 'china',
            ciudad: 'hasdk'
        }
    }
}
console.log(producto.informacion.fabricación.pais);

//con los puntos se va accediendo a los diferentes objetos 