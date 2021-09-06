const reproductor = {
    reproducir: id => (`Reproduciendo canción con el id ${id}`),
    pausar: id => ('pausando...'),
    borrar: id => (`Borrando canción... ${id}`),
    crearPlayList: nombre => (`Creando PlayList ${nombre}`),
    reproduciendoPlaylist: nombre => (`Reproduciendo PlayList ${nombre}`),
} 

reproductor.reproducir(30);
reproductor.pausar(15);
reproductor.crearPlayList('Heavy Metal');
reproductor.reproduciendoPlaylist('Rock 90s');