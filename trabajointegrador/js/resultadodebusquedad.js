let container = document.querySelector('#lol')
let queryBusquedad = location.search
let queryString = new URLSearchParams (queryBusquedad)
let peliculaOSerieBuscada= queryString.get('busqueda')
let apiKey= '26cb00ba0e4d52cae073a420c45e2d99'
fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${peliculaOSerieBuscada}`)
.then(function(resp){
    return resp.json()
})
.then(function(data){
    for(i=0; i< data.results.length; i++){
        container.innerHTML +=`
        <article class= "articles">
            <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt=${data.results[i].title} class="img">
            <h3 class="descripcion">${data.results[i].title}<br> ${data.results[i].release_date}
            </h3>
        <article>
        
            <ul class="ul">
                <p>
                    
                    <a href="./favorites.html">
                        <button type="button" class="boton">Favoritos</button>
                    </a>
                </p>
            </ul>   
        </article>
        </article>
        
     `
    }
})
.catch(function(err){
    console.log(err)
})
