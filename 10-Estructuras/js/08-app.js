const autenticado = true;

if (autenticado) {
    console.log('el usuario está autenticado');
}

const puntaje = 450;

function revisarpuntaje() {

    if (puntaje > 400 ) {
        console.log('Exelente!!')
        return;
    }

    if (puntaje > 300) {
        console.log('Buen puntaje')
        return;
    }
}

revisarpuntaje();

