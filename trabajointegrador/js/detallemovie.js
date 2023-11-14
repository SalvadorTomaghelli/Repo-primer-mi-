let container = document.querySelector("#funciona")
let query = location.search;
let objbusqueda = new URLSearchParams(query);
let id= objbusqueda.get("id")
let apiKey = '26cb00ba0e4d52cae073a420c45e2d99'
fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)
        container.innerHTML += `
            <article>
                <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" />
                <h2>${data.title}</h2>
                <h3>${data.overview}</h3>
                <h3>${data.runtime}</h3>
                <h3>${data.release_date}</h3>
                <h3>${data.genres[0].name}</h3>
                <h3>${data.vote_average}</h3>
                <a href="./favorites.html">
                            <button type="button">Favoritos</button>
                </a>
            </article>`
    })
    .catch(function(error) {
        console.log('Error! Intente mas tarde');
    })
