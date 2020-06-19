// Consultamos el playlist al localStorage
// Accediendo al playlist en localstorage
var playlist = localStorage.getItem('playlist');

// Si es la primera vez usando playlist en el localStorage, creamos el array pero vacio para evitar errores de null
if(playlist=='null' || playlist==null){
    console.log('es null')
    var playlist = []
    localStorage.setItem('playlist', JSON.stringify(playlist));
    var playlist = localStorage.getItem('playlist');
}

// Como se guarda en string, lo Parseamos
playlist = JSON.parse(playlist)

// Seleccionando el contenedor
var cont = document.getElementById('cont-canciones')

var html = ''

for(song in playlist){

var trackId = playlist[song]

    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/' + trackId)
        .then(function(respuesta){
            return respuesta.json();
        })
        .then(function(data){
            console.log(data);

            // Asegurandonos que no de undefined
            let contenedorData = document.querySelector(".trackdetalle");
            let track = data
            console.log(track);
            if(track.id != null){
                    html += '<a href="detalletrack.html?id='+track.id+'"><div class="cancion">'+track.title+'</div></a>'
                    console.log(html)
                    cont.innerHTML = html
            }            


        })
        .catch(function(error){
            console.error(error);
        })


}