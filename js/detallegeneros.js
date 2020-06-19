let queryString = window.location.search
let objetoQuery = new URLSearchParams(queryString);
let generosId = objetoQuery.get('id');
fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/' + generosId)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(data){
        console.log(data);
        
        let contenedorData = document.querySelector(".detallegeneros");
        let generos= data
        console.log(generos);
        
        contenedorData.innerHTML =
    `
    <div>
            <div>
                <img src="${generos.picture_big}"">
            </div>
            <div >
                <h3>Tipo de género:${generos.name}</h3>
                <h3 >${generos.type}</h3>
                <h3 >${generos.id}</h3>
                
    </div>
    `


    })
    .catch(function(error){
        console.error(error);
    })