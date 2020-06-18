var query = new URLSearchParams(location.search);
var resultadoBuscador = query.get('resultados')
var i=0;

function apis () {

  fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/")
    .then(function(response) {
      return response.json()
    })

    .then(function(resultado) {
      console.log(resultado);
      for(i=0; i<20; i++) {
        document.querySelector(".resultado").innerHTML +="<a href=detalletrack.html" + "resultado.results[i].id ></a>";
      }
      document.querySelector(".resultado.results").innerHTML += resultadoBuscador;
    })
}



