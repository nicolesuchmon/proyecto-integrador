var playlist = localStorage.getItem('playlist');


playlist = JSON.parse(playlist)


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