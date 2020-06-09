window.onload= function(){



fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0")
.then(function(response){
    return response.json(); 
    })
.then(function(data){
    console.log(data);
    let albumes= data.albumes.data
    let artistas= document.querySelector("seccionalbumes");
    for (const album of albumes){

        albumes.innerHTML += 
        ` <div class="container1">
        <div>
            <img src="img/images.jpeg" alt="">
            <p><a id="container1" href="detallealbum.html">La tribu, Camilo</a></p>
        </div>
        <div>
            <img src="img/albummorat.jpeg" alt="">
           <p> <a id="container1" href="detallealbum.html">Amor y sus efectos secundarios, Morat</a></p> 
        </div>
        <div>
            <img src="img/lanadelrey.jpeg" alt="">
            <p><a id="container1" href="detallealbum.html">Honeymoon, Lana del Rey</a></p>
        </div> `
    } 
    let tracks = data.tracks.data
    let containertracks = document.querySelector ("secciontracks");
    for (const track of tracks) {
        tracks.innerHTML +=
        `   <div class="container2">
        <div>
            <img src="img/supalonely.jpeg" alt="">
            <p><a id="container2" href="detalletrack.html">Supalonely</a> </p>
        </div>
        <div>
            <img src="img/canibehim.jpeg" alt="">
            <p> <a id="container2" href="detalletrack.html">Can i be him</a> </p>
        </div>
        <div>
            <img src="img/getyouthemoon.jpeg" alt="">
            <p><a id="container2" href="detalletrack.html">Get you the moon</a> </p>
        </div>
    </div>`
    }
    let artists data.artistas
    let contenedorArtistas =document.querySelector("seccionartistas");
    for (const artista of artistas){
        contenedorArtistas.innerHTML += 
        ` <div class="container">
         
        <li>
            <img src="img/camilo.jpg" alt="">
            <p> <a id="container" href="detalleartista.html">Camilo </a></p>
        </li>
        <li>
            <img src="img/olivia.jpg" alt="">
            <p> <a id="container" href="detalleartista.html">Olivia O' Brien</a></p>
        </li>
       <li>
           <img src="img/sebastian yatra.jpg" alt="">
           <p> <a id="container" href="detalleartista.html">Sebastian Yatra</a></p>
       </li>
    
    </div>`
    }
})

    
}
