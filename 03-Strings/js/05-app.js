const producto = 'Monitor 20\"';
 
// Utilizamos .replace para reemplazar 

console.log(producto);
console.log(producto.replace('"' , ' pulgadas'));
     
console.log(producto.replace('Monitor' , 'Monitor Curvo'));

// Utilizamos .slice para cortar
    // Fijamos punto de inicio y final. 
console.log(producto.slice(0, 7));

let usuario = 'sebastian',
edad = '18',
nacionalidad = 'colombiano'; 

console.log(`el usuario ${usuario} tiene ${edad} años de edad y es ${nacionalidad}`);
console.log(usuario.charAT(0));
