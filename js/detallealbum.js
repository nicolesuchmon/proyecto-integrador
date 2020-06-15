//obtengo el query string
let queryString = window.location.search

//paso de ese texto a un objeto
let objetoQuery = new URLSearchParams(queryString);

//ahora si obtengo el id del album
let albumId = objetoQuery.get('id');

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/' + albumId)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(data){
        console.log(data);
        
        let contenedorData = document.querySelector(".albumdetalle");
        let album = data
        console.log(album);
        
        contenedorData.innerHTML =
    `
    <div>
            <div>
                <img class="imagen-album" src="${album.cover_big}" alt="Imagen de Album ${album.title}">
            </div>
            <div >
                <h3 class="texto-detallealbum">${album.type}</h3>
                <h3>Nombre del album: ${album.title}</h3>
                <a href="detalleartista.html?id=${album.artist.id}" class="texto-artista">${album.artist.name} </a>
                <h3 class="texto-detallealbum">Este album contiene ${album.tracks.data.length} canciones</h3>
                <h3> Duración del album: ${album.duration} segundos</h3>
                <h3> Publicado el ${album.release_date} </h3>
                <h3> Cantidad de fans: ${album.fans} fans</h3>
                
    </div>
    `


    })
    .catch(function(error){
        console.error(error);
    })