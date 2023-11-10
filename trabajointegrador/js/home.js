let container = document.querySelector(".section1")
let apiKey= '26cb00ba0e4d52cae073a420c45e2d99'
fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
.then(function(response){
    return response.json()
})
.then(function(data){
    for(let i = 0; i < 5; i++){
        container.innerHTML += `
        <article class="articles">
                        <a href="./detailmovie.html">
                            <img src="./PeliculasPoster/oppen.jpg" alt=${data.results[i].title} class="img">
                            <h3 class="descripcion">${data.results[i].title}<br>${data.results[i].release_date}</h3>
                        </a>
        </article>
        `}
})
.catch(function(error){
    console.log(error)
})