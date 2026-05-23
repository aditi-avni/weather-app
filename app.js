const screen1 = document.querySelector(".search-container");

const screen2 = document.querySelector(".weather-container");

const searchButton = document.getElementById("search-button");

const backButton = document.getElementById("back-button");



// SEARCH BUTTON

searchButton.addEventListener("click", () => {

    console.log("button clicked");

    screen1.style.display = "none";

    screen2.style.display = "flex";
});



// BACK BUTTON

backButton.addEventListener("click", () => {

    screen2.style.display = "none";

    screen1.style.display = "flex";

});