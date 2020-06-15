var query = new URLSearchParams(location.search);
var resultadoBuscador = query.get('resultados')
var i=0;

function apis () {

  fetch("https://api.deezer.com/track/ + resultadoBuscador")
    .then(function(response) {
      return response.json()
    })

    .then(function(resultado) {
      console.log(resultado.results);
      for(i=0; i<20; i++) {
        document.querySelector("resultados").innerHTML +="<a href=detalletrack.html" + "resultado.results[i].id ></a>";
      }
      document.querySelector("resultados h1").innerHTML += resultadoBuscador;
    })
}

window.onload = apis;