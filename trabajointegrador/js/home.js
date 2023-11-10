let container = document.querySelector(".section1")
let apiKey= '26cb00ba0e4d52cae073a420c45e2d99'
fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    for(let i = 0; i < 5; i++){
        container.innerHTML += `
        <article class = "articles">
            <h2>${data.results[i].title}</h2>
            <h2>${data.results[i].status}</h2>
        <article>
        `  
    }
    console.log(data)
})
.catch(function(error){
    console.log(error)
})