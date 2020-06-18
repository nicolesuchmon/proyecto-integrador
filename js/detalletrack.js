//obtengo el query string
let queryString = window.location.search

//paso de ese texto a un objeto
let objetoQuery = new URLSearchParams(queryString);

//ahora si obtengo el id del album
let trackId = objetoQuery.get('id');

// Accediendo al playlist en localstorage
var playlist = localStorage.getItem('playlist');

// Como se guarda en string, lo Parseamos
playlist = JSON.parse(playlist)
console.log(playlist)

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/' + trackId)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(data){
        console.log(data);
        
        let contenedorData = document.querySelector(".trackdetalle");
        let track = data
        console.log(track);
        
        contenedorData.innerHTML =
    `
    <div>
            <div>
                <img class="imagen-track" src="${track.artist.picture_big}" alt="Imagen de Album ${track.title}">
            </div>
            <div >
        
                <h3>${track.title}</h3>
                <h3>Duración de la canción: ${track.duration} segundos</h3>
                <h3> Publicado el ${track.release_date}</h3>
                <h3>Ranking número ${track.rank} </h3>
                <h3> Reproducir</h3> <audio src="${track.preview}" controls ></audio>
                <h3 id="anadir${track.id}" onclick="anadir(${track.id})" class="anadir">Añadir a Playlist</h3>
                <h3 id="eliminar${track.id}" onclick="eliminar(${track.id})" class="eliminar">Eliminar del Playlist</h3>

                
    </div>
    `

    // Seleccionando los botoncitos para luego
    var btnAgregar = document.getElementById('anadir'+track.id)
    var btnEliminar = document.getElementById('eliminar'+track.id)

    // Si esta cancion se encuentra en la playlist, que diga eliminar, sino, que diga agregar
    if(playlist.includes(track.id)){
        // Ponemos visible el eliminar
        console.log('esta en el playlist!')
        btnAgregar.style.display = "none";
        btnEliminar.style.display = "block";
    }else{
        // Ponemos visible el anadir
        console.log('no esta en el playlist!')
        btnAgregar.style.display = "block";
        btnEliminar.style.display = "none";

    }

    })
    .catch(function(error){
        console.error(error);
    })




// Cuando cliquean en anadir al playlist
function anadir(id){

    // Seleccionando los botoncitos para luego
    var btnAgregar = document.getElementById('anadir'+id)
    var btnEliminar = document.getElementById('eliminar'+id)
    
    // Pusheando el id de la cancion clickeada al array de localStorage
    playlist.push(id)

    // Guardo el objeto como un string
    localStorage.setItem('playlist', JSON.stringify(playlist));

    // Escupimos el array actualizado por propositos de debugging
    console.log(JSON.parse(localStorage.getItem('playlist')))

    // Oculto el botoncito de agregar y muestro el de eliminar
    btnAgregar.style.display = "none";
    btnEliminar.style.display = "block";

}

// Cuando cliquean en eliminar
function eliminar(id){

    // Seleccionando los botoncitos para luego
    var btnAgregar = document.getElementById('anadir'+id)
    var btnEliminar = document.getElementById('eliminar'+id)

    // Recorriendo el playlist para encontrar y eliminar esta cancion
    for(song in playlist){
        if(playlist[song]==id){
            // Encontramos el id asi que lo eliminamos
            playlist.splice(song, 1);
        }
    }
    
    console.log(playlist)

    //Guardo el objeto como un string
    localStorage.setItem('playlist', JSON.stringify(playlist));

    // Escupimos el array actualizado por propositos de debugging
    console.log(JSON.parse(localStorage.getItem('playlist')))

    // Oculto el botoncito de agregar y muestro el de eliminar
    btnAgregar.style.display = "block";
    btnEliminar.style.display = "none";

}