const screen1 = document.querySelector(".search-container");

const screen2 = document.querySelector(".weather-container");

const searchButton = document.getElementById("search-button");

const backButton = document.getElementById("back-button");


// SEARCH BUTTON

searchButton.addEventListener("click", () => {

    //fetch ewather 
    //update ui
    console.log("search button clicked");

    //take the input value of city 
    const city = cityInput.value.trim();
    getWeather(city); //calling the api fn aftre getting city input 

    screen1.style.display = "none";

    screen2.style.display = "flex";
});



// BACK BUTTON

backButton.addEventListener("click", () => {

    screen2.style.display = "none";

    screen1.style.display = "flex";

});

//selecting html elements

const cityInput = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const mainTemp = document.getElementById("main-temp");
const tempValue = document.getElementById("temp-value");
const humidity = document.getElementById("humidity-value");
const windSpeed = document.getElementById("wind-value");
const aqi = document.getElementById("aqi-value");

//api setup 

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

//api fucntion 

async function getWeather(city) {
const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    console.log("API URL:", url); // Log the constructed URL

    const response = await fetch(url);
    const data = await response.json();
    console.log("API Data:", data); // Log the API response
}




