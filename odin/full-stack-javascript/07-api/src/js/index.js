const img = document.querySelector("img#cat-gif");

refresh();

function refresh() {
    let search = document.querySelector('input#search').value;

    if (search === '') {
        search = 'cat';
    }

    // console.log(search);

    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=hpp94moPowgmHP7zaEK40qBsxytZ0WeW&s=${search}`,
        {mode: 'cors'})
    .then(function(response) {
        // console.log(response.json);
        return response.json();   
    })
    .then(function(response) {
        // console.log(response.data.images.original.url);
        img.src = response.data.images.original.url;
    })
    .catch( function(err) {
        // console.log(err)
        img.alt = `There is no match for ${search}.`;
    });

    return false;
}