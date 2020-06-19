//obtengo el query string
let queryString = window.location.search

//paso de ese texto a un objeto
let objetoQuery = new URLSearchParams(queryString);

//ahora si obtengo el id del album
let artistId = objetoQuery.get('id');

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/' + artistId)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(data){
        console.log(data);
        
        let contenedorData = document.querySelector(".artistadetalle");
        let artist = data
        console.log(artist);
        
        contenedorData.innerHTML =
    `
                    <div>
                        <img class="imagen" src="${artist.picture_big}" alt="">
                        
                        <h3>${artist.name} </h3>
                        <h3> Es un ${artist.type}a</h3>
                        <h3>Seguidores: ${data.nb_fan} - Número de álbumes: ${data.nb_album} </h3>
                    </div>`


    })
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/'+artistId+'/albums')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        console.log (datos)
        let album = datos.data
        let albumsContenedor = document.querySelector ('.artistadetallejs');
        for (const albumslista of album){
            albumsContenedor.innerHTML +=  
            `
                    <div>
                    <a  class= "linkalbum" href="detallealbum.html?id=${album.id}"> <img class="imagen" src="${albumslista.cover_medium}" alt="">
                        <h4 class="tituloartista">${albumslista.title} <br>${albumslista.fans} Likes</h4>
                    </div>`
        }


    })
    .catch(function(error){
        console.error(error);
    })
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/"+artistId+"/top")
    .then(function(response){
        return response.json()
    })
    .then (function(data){
        console.log(data);
        let playlist = data.data
        let contenedorPlaylist = document.querySelector(".cancionesartista");

        for (const cancion of playlist) {
            contenedorPlaylist.innerHTML +=`
            
            
            <div class="song">
                
                <p><a href="detalletrack.html?id=${cancion.id}" class="cancionArtista" >${cancion.title_short}</a> </p>
                <p ><a href="detallealbum.html?id=${cancion.album.id}" class="cancionArtista" >${cancion.album.title}</a></p> 
                <p><audio class="previewArtista" src="${cancion.preview}" controls></audio></p>
            </div>
            
            
            
            `
        }
        
    }).catch(function(error){
        console.error(error)
    })