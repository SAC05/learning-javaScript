const dirección = 'carrera 71b #80 a 97';
const barrio = 'Robledo Cordoba';

// Formas de unir cadenas de texto
 
console.log(dirección.concat(barrio));
console.log(dirección.concat(' barrio robledo cordoba'));

//////

console.log(dirección + ' Ubicado en el Barrio: ' + barrio);
console.log('la dirección solicitada es ' , dirección , 'Ubicada en el Barrio ' , barrio); 





/////
    //sintaxis más recomendada para utilizar esta función

console.log(`la dirección solicitada es ${dirección} ubicada en el Barrio ${barrio}`);  

let names = 'Sebas';
let animal = 'Gallina';
let sebasMessage = `${names} es la propia ${animal} enferma`;
console.log(sebasMessage);

// alt gr + } `_`  