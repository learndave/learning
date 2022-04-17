let ratingButtons = Array.from(document.querySelectorAll(".rating-value"));

let rating = 5;

for (let ratingButton of ratingButtons) {
    ratingButton.addEventListener('click',(e) => toggleRatingClick(e.target))
}

function toggleRatingClick(target) {
    for (let rating of ratingButtons) {
        rating.classList.remove("clicked")
    }
    target.classList.toggle("clicked");
    rating = target.textContent;
}

let submitButton = document.querySelector(".submit-button");

submitButton.addEventListener('click', () => toggleRatingEnd())

function toggleRatingEnd() {
    document.querySelector('.rating-start').style.display = 'none';
    document.querySelector('.rating-end').style.display = 'flex';
    document.querySelector('.rating-actual').innerHTML = rating;
    // console.log(document.querySelector('.rating-actual').textValue);
}