//obtengo el query string
let queryString = window.location.search

//paso de ese texto a un objeto
let objetoQuery = new URLSearchParams(queryString);

//ahora si obtengo el id del album
let trackId = objetoQuery.get('id');

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

                
    </div>
    `


    })
    .catch(function(error){
        console.error(error);
    })