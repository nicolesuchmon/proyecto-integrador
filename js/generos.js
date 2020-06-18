
fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/' )
    
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(data){
        console.log(data)

    let generos = data.generos.datos
    let contenedorData = document.querySelector('.generos')

    for (const genero of generos)  {

             contenedorData.innerHTML +=
        `<div>
                                <h3> ${genero.data.name}</h3>
                                
                               <img  src="${genero.picture_medium}" alt="">
                               
                                <h4>  ${genero.type} </h4>
  
                               </div>`;
    }
})

  