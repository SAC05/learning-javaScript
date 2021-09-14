const efectivo = 300;
const credito = 400;
const disponible = credito + efectivo;
const totalPagar = 600;

if( efectivo > totalPagar || credito > totalPagar || disponible > totalPagar ) {
        console.log('si podemos pagar')
} else {
        console.log('Fondos insuficientes ')
    }
