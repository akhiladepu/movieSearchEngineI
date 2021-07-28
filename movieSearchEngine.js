function searchForMovie() {
    var movieName = document.getElementById("inputBox").value;
    // console.log(movieName);

    fetch(`https://www.omdbapi.com/?apikey=33e2cec9&t=${movieName}&type=movie`).then(function (res) {
        res.json().then(function (data) {
            console.log(data);
        })
    })
    
    .catch(function (err) {
        console.log(err);
    })
}

//http://www.omdbapi.com/?apikey=[yourkey]/?t=avengers

//http://www.omdbapi.com/?i=tt3896198&apikey=33e2cec9