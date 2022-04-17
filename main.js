let cityInput = document.getElementById("cityInput");
let addInput = document.getElementById("add");
let cityOutput = document.getElementById("cityOutput");
let descriptionOutput = document.getElementById("descriptionOutput");
let tempOutput = document.getElementById("tempOutput");
let windOutput = document.getElementById("windOutput");

const apiKey = "3045dd712ffe6e702e3245525ac7fa38";

function KelvinToCelsius(value) {
     return (value - 273.15).toFixed(2);
}

async function GetWeather() {
    let weatherResult = await (
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
        ${cityInput.value}&appid=${apiKey}`)
    ).json();

    setInfo(weatherResult);
}

function setInfo(data) {
    let cityName = data["name"];
    let description = data["weather"][0]["description"];
    let temp = data["main"]["temp"];
    let wind = data["wind"]["speed"];

    cityOutput.innerHTML= `City: ${cityName}`;
    descriptionOutput.innerHTML= `Description: ${description}`;
    tempOutput.innerHTML= `Temprature: ${KelvinToCelsius(temp)}°C`;
    windOutput.innerHTML= `Wind Speed: ${wind} m/s`;
}

addInput.addEventListener("click",GetWeather);