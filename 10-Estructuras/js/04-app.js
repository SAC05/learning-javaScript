 // el else se va a ejecutar siempre y cuando las anteriores funciones no se cumplan...

 const dinero = 100;
 const totalApagar = 500;
 const tarjeta = false;
 const cheque= false;
 
 if ( dinero >= totalApagar) {
     console.log('Si podemos pagar');
}   else if (cheque) {
        console.log('si tengo un cheque');
}
    else if (tarjeta) {
        console.log('si puedo pagar porque tengo la tarjeta');
}
    else {
     console.log('Fondos insuficientes');
 }
 