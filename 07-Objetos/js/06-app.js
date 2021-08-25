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

//Destructuring con objetos 

const {nombre, informacion, informacion: {fabricación, fabricación: { pais } } } = producto;

console.log(nombre);
console.log(informacion);
console.log(fabricación);
console.log(pais);





