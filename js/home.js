


    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){
        
        //trabajo con los datos
        let albums = datos.albums.data;
        //capturamos al elemento html que queremos hacer innerHTML
        let contenedorAlbums = document.querySelector('.container1');
        var conteo= 0
        //recorro el array y lo voy imprimiendo
        for (const album of albums) {
            //creen un contador e incrementenlo
            //var a = 0;
            //a++
            //console.log(a)
            conteo= conteo +1
            contenedorAlbums.innerHTML += `<div>
                                <h3> ${album.artist.name}</h3>
                                <a href="detalleAlbum.html?id=${album.id}">
                                    <img class= "contenedor" src="${album.cover_medium}" alt="">
                                </a>
                                <h4>  ${album.title} </h4>
                            </div>`;
                        if (conteo > 8){
                            break;
                        }
       
        }

        let artists = datos.artists.data;
        let contenedorArtistas = document.querySelector('.containerartist');
        var contador= 0
        for (const artist of artists) {
            contador= contador + 1
            
            contenedorArtistas.innerHTML += `<div>
                                <h3> ${artist.name}</h3>
                                <a href="detalleartista.html?id=${artist.id}">
                                    <img class= "contenedor" src="${artist.picture_medium}" alt="">
                                </a>
                                <h4>  ${artist.type}a </h4>
                            </div>`
                if (contador>8){
                    break;
                }            
       
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
               
               if (datos > 8){
                   break; 
               }
               
            }



        
     
    })
    .catch(function(error){
        console.error(error);
    })
