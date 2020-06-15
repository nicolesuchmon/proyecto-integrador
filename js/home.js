


    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        
        //trabajo con los datos
        let albums = datos.albums.data;
        //capturamos al elemento html que queremos hacer innerHTML
        let contenedorAlbums = document.querySelector('.container1');
        //recorro el array y lo voy imprimiendo
        for (const album of albums) {
            //creen un contador e incrementenlo
            //var a = 0;
            //a++
            //console.log(a)
            contenedorAlbums.innerHTML += `<div>
                                <h3> ${album.artist.name}</h3>
                                <a href="detalleAlbum.html?id=${album.id}">
                                    <img class= "contenedor" src="${album.cover_medium}" alt="">
                                </a>
                                <h4>  ${album.title} </h4>
                            </div>`;
       
        }

        let artists = datos.artists.data;
        //capturamos al elemento html que queremos hacer innerHTML
        let contenedorArtistas = document.querySelector('.containerartist');
        
        //recorro el array y lo voy imprimiendo
        for (const artist of artists) {
            
            //creen un contador e incrementenlo
            //var a = 0;
            //a++
            //console.log(a)
            contenedorArtistas.innerHTML += `<div>
                                <h3> ${artist.name}</h3>
                                <a href="detalleartista.html?id=${artist.id}">
                                    <img class= "contenedor" src="${artist.picture_medium}" alt="">
                                </a>
                                <h4>  ${artist.type}a </h4>
                            </div>`
       
        }
        let tracks = datos.tracks.data;
        let contenedorTracks = document.querySelector('.container2')
    var datos = 0
    for (const track of tracks)  {
       
             datos= datos + 1;
        contenedorTracks.innerHTML += `<div>
                    <a href="detalletrack.html?id=${track.id}">
                        <img class= "contenedor" src="${track.album.cover_medium}" alt=""></a>
                    <h4>  ${track.title_short} </h4>
                   
                    
               </div>`
               
               if (datos > 11){
                   break; 
               }
               
            }



        
     
    })
    .catch(function(error){
        console.error(error);
    })
