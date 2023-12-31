let container = document.querySelector("#funciona")
let query = location.search;
let objbusqueda = new URLSearchParams(query);
let id= objbusqueda.get("id")
let apiKey = '26cb00ba0e4d52cae073a420c45e2d99'
let propiedadNombre
let propiedadLanzamiento
fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)
        container.innerHTML += `
            <article class="article">
                <img class="poster" src="https://image.tmdb.org/t/p/w500/${data.poster_path}" />
                <ul class="ul">
                    <p>
                        Nombre: ${data.title}<br> 
                        Fecha de estreno: ${data.release_date}<br>
                        Calificacion: ${data.vote_average}<br>
                        sinopsis: ${data.overview}<br>
                        genero: ${data.genres.name}<br>
                        <a href="./favorites.html">
                            <button type="button" class="boton">Favoritos</button>
                        </a>
                    </p>
                </ul>   
            </article>`
    
    })
    .catch(function(error) {
        console.log('Error! Intente mas tarde');
    })
let container2 = document.querySelector("#pelicularecomendaciones")
fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apiKey}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        for (let i = 0; i < 5; i++){
            container2.innerHTML += `
                <a href='./detailmovie.html?id=${data.results[i].id}'> 
                </a>
                    <article class="article">
                        <img class="poster" src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" />
                        <ul class="ul">
                            <p>
                                Nombre: ${data.results[i].title}<br> 
                                Fecha de estreno: ${data.results[i].release_date}<br>
                                Calificacion: ${data.results[i].vote_average}<br>
                                sinopsis: ${data.results[i].overview}<br>
                                <a href="./favorites.html">
                                    <button type="button" class="boton">Favoritos</button>
                                </a>
                            </p>
                        </ul>   
                    </article>
                `
        } 
    })
    .catch(function(err){
        console.log('error! intente mas tarde')
    })