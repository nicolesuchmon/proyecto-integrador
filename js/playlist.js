window.onload = function(){

//playlist entrenar
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/155017031")
    .then(function(response){
        return response.json(); 
        })
    .then(function(playlist){
        console.log(playlist);

    for (let i = 0; i < 20; i++) {
        
        document.querySelector("#playlist_entrenar").innerHTML += <li> <a href='detalletrack.html?id=" + playlist.tracks.data[i].id + "'>" + playlist.tracks.data[i].title + " </a> - <a href='detalleartista.html?id=" + playlist.tracks.data[i].artist.id + "'>"+ playlist.tracks.data[i].artist.name +"</a></li>
    }
    })
//playlist estudiar
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/7034293724")
    .then(function(response){
        return response.json(); 
        })
    .then(function(playlist){
        console.log(playlist);

    for (let i = 0; i < 20; i++) {
        
        document.querySelector("#playlist_estudiar").innerHTML += <li> <a href='detalletrack.html?id=" + playlist.tracks.data[i].id + "'>" + playlist.tracks.data[i].title + " </a> - <a href='detalleartista.html?id=" + playlist.tracks.data[i].artist.id + "'>"+ playlist.tracks.data[i].artist.name +"</a></li>
    })
//playlist manejar
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/7710941222")
    .then(function(response){
        return response.json(); 
        })
    .then(function(playlist){
        console.log(playlist);

    for (let i = 0; i < 20; i++) {
        
        document.querySelector("#playlist_manejar").innerHTML += <li> <a href='detalletrack.html?id=" + playlist.tracks.data[i].id + "'>" + playlist.tracks.data[i].title + " </a> - <a href='detalleartista.html?id=" + playlist.tracks.data[i].artist.id + "'>"+ playlist.tracks.data[i].artist.name +"</a></li>
    })
//playlist dormir
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/4063118602")
    .then(function(response){
        return response.json(); 
        })
    .then(function(playlist){
        console.log(playlist);

    for (let i = 0; i < 20; i++) {
        
        document.querySelector("#playlist_dormir").innerHTML += <li> <a href='detalletrack.html?id=" + playlist.tracks.data[i].id + "'>" + playlist.tracks.data[i].title + " </a> - <a href='detalleartista.html?id=" + playlist.tracks.data[i].artist.id + "'>"+ playlist.tracks.data[i].artist.name +"</a></li>
    }
    })

}