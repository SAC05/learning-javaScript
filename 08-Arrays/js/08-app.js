

const producto = {
    nombre: 'monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}

//Destructuring

const { disponible } = producto;
console.log(disponible);

//Destructuring con arreglos

const numeros = [10, 20, 30, 40, 50];

const[ , , , cuarto] = numeros;

console.log(cuarto);

