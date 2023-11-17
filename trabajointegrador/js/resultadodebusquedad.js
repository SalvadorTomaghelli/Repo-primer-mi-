let container = document.querySelector('#lol')
let queryBusquedad = location.search
let queryString = new URLSearchParams (queryBusquedad)
let peliculaOSerieBuscada= queryString.get('busqueda')
let apiKey= '26cb00ba0e4d52cae073a420c45e2d99'
fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${peliculaOSerieBuscada}`)
.then(function(resp){
    return resp.json()
})
fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${peliculaOSerieBuscada}`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
    for(i=0; i<data.results.length; i++){
        let propiedadNombre
        let propiedadLanzamiento
        let redireccion
        if(data.results[i].title != undefined){
            propiedadNombre = data.results[i].title
            propiedadLanzamiento = data.results[i].release_date
            redireccion= "movie"
        }else{
            propiedadNombre = data.results[i].name
            propiedadLanzamiento = data.results[i].first_air_date
            redireccion= "serie"
        }
        container.innerHTML +=`
        <article class= "articles">
            <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt=${data.results[i].title} class="img">
            <h3 class="descripcion">${propiedadNombre}</h3> 
            <h3 class="descripcion">${propiedadLanzamiento} </h3>
            <a href="./favorites.html">
                <button type="button" class="boton">Favoritos</button>
            </a>
            <a href="./detail${redireccion}.html?id=${data.results[i].id}" > 
                <button type="button" class= "boton"> Ir a detalles </button>
            </a>
        </article>`
    }
    container.innerHTML +=`<h1>Resultado de ${propiedadNombre}</h1>`
})
.catch(function(err){
    console.log(err)
})
