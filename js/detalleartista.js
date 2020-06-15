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
                        
                    </div>`


    })
    .catch(function(error){
        console.error(error);
    })