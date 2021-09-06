function saludar (nombre = 'Desconocido', apellido = ''){
    console.log (`Hola ${nombre} ${apellido}`); 
}

saludar('Sebastian', 'Alcaraz');
saludar();

//Los parámetros por default se pueden definir con un string vacío o un mensaje y así no recibimos el valor 'undefined'