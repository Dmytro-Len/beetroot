// fetch('https://jsonplaceholder.typicode.com/albums')
// .then(rerere => rerere.json())
// .then(data => {
//     console.log(data)
// })
// fetch('https://api.themoviedb.org/3/movie/popular?api_key=1f80d4c305d80b975143b4f48f76901b&page=2')
// .then(response => response.json())
// .then(data => {
//     const movieList = document.querySelector('.box__result');

//     const items = data.map(item => {
//         const id = item.id
//         return `<li>${item.name} <button class="info-btn" onclick="fetchUserById(${id})">Show info ${item.id}</button></li>`
//     });
//     const listItems = `<ul>${items.toString().split(',').join('')}</ul>`
//     movieList.insertAdjacentHTML('afterbegin', movieList)
// })
// .catch(error => console.log('error --->', error))

$(function() {
    const API_KEY = '1f80d4c305d80b975143b4f48f76901b';
    const lang = 'en-US';
    

    $('form').submit(function(e) {
        e.preventDefault();
        const value = $('input').val();

        $.ajax({
            url: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=${lang}&query=${value}&page=1&include_adult=false`
        }).done(function(data) {
            console.log(data)
            if (data.results.length === 0) {
                alert('results did not found')
            } else {
                $.each(data.results, function(index, item) {
                    $('#list').append(`<details><summary>${item.title}</summary><p class='movieDetails'>${item.overview}</p></details>`)

                }) 
            }
        })

    })

})

//pattern

    // if (data.results.length > 10) {
    //     data.results.slice(0, 9)
    //     $('#list').append(`<div>${item.title}</div>`)
    // }