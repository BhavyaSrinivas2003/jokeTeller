let jokeTextEl = document.getElementById("jokeText");
let spinnerEl = document.getElementById("spinner");
let jokeBtnEl = document.getElementById("jokeBtn");

function displayJoke(jsonData) {
    spinnerEl.classList.add("d-none");
    jokeTextEl.classList.remove("d-none");
    jokeTextEl.textContent = jsonData.value;
}

function display() {
    jokeTextEl.classList.add("d-none");
    spinnerEl.classList.remove("d-none");
    let id = 0;
    let options = {
        method: "GET"
    };
    let url = "https://apis.ccbp.in/jokes/random";
    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            displayJoke(jsonData)

        })

}
jokeBtnEl.addEventListener("click", display);