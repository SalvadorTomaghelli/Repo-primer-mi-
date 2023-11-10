let apiKey= '26cb00ba0e4d52cae073a420c45e2d99'
fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
.then(function(response){
    return response.json()
})
.then(function(data){
    for(let i = 0; i < 5; i++){
        articles.innerHTML += `
        <article class = "articles">
            <h2>${data.results[i].name}</h2>
            <h2>${data.results[i].status}</h2>
        <article>
        `
    }
})
.catch(function(error){
    console.log(error)
})