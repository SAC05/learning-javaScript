// Ventajas de Arrow functions
//Pasar parámetros a un Arrow function

const aprendiendo = function(tecnología) {
    console.log(`Aprendiendo ${tecnología}`);
}
aprendiendo('JavaScript'); 


const aprendiendo2 = nombre => `${nombre} está aprendiendo JavaScript`;
    console.log (aprendiendo2('sebastian'));

//Los parentesis que encierran un parametro (EN EL ARROW FUNCTION) pueden ser eliminados en caso de ser un solo parámetro...
//En caso de ser dos o mas parámetros (EN EL ARROW FUNCTION) los parentesis serán obligatorios...

const aprendiendo3 = (tecnologia1, tecnologia2) => `Aprendiendo ${tecnologia1} y ${tecnologia2}`;
    console.log(aprendiendo3('JavaScript', 'Nose.js'));
