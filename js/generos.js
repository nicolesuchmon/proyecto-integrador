
fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/' )
    
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(data){
        console.log(data)

    let generos = data.data
    let contenedorData = document.querySelector('.generos')
    console.log(generos);
    var contador= 2

    for (const genero of generos)  {
contador= contador 
             contenedorData.innerHTML +=
        `<div>
                                <h3> ${genero.name}</h3>
                                
                            
                                 <a href="detallegenero.html?id=${genero.id}">
                                   <img  class= ".img-genero" src="${genero.picture_medium}" alt="">
                                </a>
                
                               
                               
  
                               </div>`;
                               if (contador<=0 ){
                                break;
                            }                   
    }
})

  