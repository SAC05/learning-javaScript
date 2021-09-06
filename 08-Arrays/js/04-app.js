const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio', 'Julio'];


//A pesar de que el arreglo se declare con una constante, sí se pueden modificar con un nuevo o más valores...
//podemos modificar un valor especifico agregando el numero de posicion entre corchetes...

meses[0] = 'Nuevo mes';

meses[8] = 'Ultimo mes';

meses[16] = 'Otro mes';

console.table(meses); 