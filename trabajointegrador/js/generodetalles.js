let titulo = document.querySelector(".h1")
let container = document.querySelector(".section")
let query = location.search;
let objbusqueda = new URLSearchParams(query);
let id= objbusqueda.get("id")
let type = objbusqueda.get("type")

let query1 = location.search;
let objbusqueda1 = new URLSearchParams(query1);
let nameGenre= objbusqueda1.get("nameGenre")

let apiKey= '26cb00ba0e4d52cae073a420c45e2d99'
fetch(`https://api.themoviedb.org/3/discover/${type}/?api_key=${apiKey}&with_genres=${id}`)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    titulo.innerHTML+= `
    
    ${nameGenre}
    `
    for(let i = 0; i < data.results.length; i++){
        container.innerHTML += `
        <article class="articles">
                        <a href="./detailserie.html?id=${data.results[i].id}">
                            <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt=${data.results[i].title} class="img">
                        </a>
                        <h3 class="descripcion">${data.results[i].title}<br>${data.results[i].release_date}</h3>
        </article>
        `
    }
    
})
.catch(function (err){
    console.log(err)
})




/*
let query2 = location.search;
let objbusqueda2 = new URLSearchParams(query2);
let id1= objbusqueda2.get("idd")

let query3 = location.search;
let objbusqueda3 = new URLSearchParams(query2);
let nameGenre1= objbusqueda3.get("nameGenree")
fetch(`https://api.themoviedb.org/3/genre/tv/list/?api_key=${apiKey}&with_genres=${id1}`)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    titulo.innerHTML+= `
    
    ${data.results[id].nameGenree}
    `
    for(let i = 0; i < data.results.length; i++){
        container.innerHTML += `
        <article class="articles">
                        <a href="./detailserie.html?id=${data.results[i].id}">
                            <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt=${data.results[i].title} class="img">
                        </a>
                        <h3 class="descripcion">${data.results[i].title}<br>${data.results[i].release_date}</h3>
        </article>
        `
    }
    
})
.catch(function (err){
    console.log(err)
})
*/