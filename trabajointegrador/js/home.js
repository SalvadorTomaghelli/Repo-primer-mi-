let container = document.querySelector(".section1")
container2 = document.querySelector("#series")
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
                            <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt=${data.results[i].title} class="img">
                            <h3 class="descripcion">${data.results[i].title}<br>${data.results[i].release_date}</h3>
                        </a>
        </article>
        `}
    console.log(data)
})
.catch(function(error){
    console.log(error)
})



fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`)
.then(function(response){
    return response.json()
})
.then(function(data){
    for(let i = 0; i < 5; i++){
        container2.innerHTML +=`
        <article class="articles">
                        <a href="./detailserie.html"><img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt=${data.results[i].name} class="img">
                            <h3 class="descripcion">${data.results[i].name}<br>${data.results[i].first_air_date}</h3></a>
                    </article>
        `
    }
    console.log(data)
})
