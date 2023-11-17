let container = document.querySelector("#generospeli")

let apiKey= '26cb00ba0e4d52cae073a420c45e2d99'
fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    for (let i = 0; i < data.genres.length; i++){
        container.innerHTML += `
        <div class = "bloque">
                <a href="./generodetalles.html?id=${data.genres[i].id}&nameGenre=${data.genres[i].name}">
                    <p class="palabra">${data.genres[i].name}</p>
                </a>
            </div>
        `
    }
})
.catch(function (err){
    console.log(err)
})

let container2 = document.querySelector("#generosseries")

fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}`)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    for (let i = 0; i < data.genres.length; i++){
        container2.innerHTML += `
        <div class = "bloque">
                <a href="./generodetalles.html?idd=${data.genres[i].id}&nameGenree=${data.genres[i].name}">
                    <p class="palabra">${data.genres[i].name}</p>
                </a>
            </div>
        `
    }
})
.catch(function (err){
    console.log(err)
})

    {}