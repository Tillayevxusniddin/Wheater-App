const cityInput = document.getElementById('city');
const fetchButton = document.getElementById('fetch-button');
const cityNameElement = document.getElementById('city-name');
const countryNameElement = document.getElementById('country-name');
const tempElement = document.getElementById('current-temp');
const tempMinElement = document.getElementById('temp-min');
const tempMaxElement = document.getElementById('temp-max');
const weatherDescElement = document.getElementById('weather-desc');
const humidityElement = document.getElementById('humidity');
const windSpeedElement = document.getElementById('wind-speed');
const weatherIconElement = document.getElementById('weather-icon');
const errorMessageDiv = document.getElementById('errorMessage');

const apiKey = 'ce52d75f7286b6004e33ee5cc45fc5ce';

fetchButton.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        fetchWeatherData(city);
        errorMessageDiv.textContent = '';
    } else {
        errorMessageDiv.textContent = 'Please Enter City\'s name.';
        clearWeatherData();
    }
});

cityInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        fetchButton.click();
    }
});

function fetchWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=uz`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP xatosi: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            displayWeatherData(data);
        })
        .catch(error => {
            console.error('Error retrieving weather data', error);
            errorMessageDiv.textContent = 'There was an error retrieving weather information. Please enter a valid city name.';
            clearWeatherData();
        });
}

function displayWeatherData(data) {
    cityNameElement.textContent = data.name;
    countryNameElement.textContent = data.sys.country;
    tempElement.textContent = Math.round(data.main.temp);
    tempMinElement.textContent = Math.round(data.main.temp_min);
    tempMaxElement.textContent = Math.round(data.main.temp_max);
    weatherDescElement.textContent = data.weather[0].description;
    humidityElement.textContent = data.main.humidity;
    windSpeedElement.textContent = data.wind.speed;

    const iconCode = data.weather[0].icon;
    weatherIconElement.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherIconElement.alt = data.weather[0].description;
}

function clearWeatherData() {
    cityNameElement.textContent = '';
    countryNameElement.textContent = '';
    tempElement.textContent = '';
    tempMinElement.textContent = '';
    tempMaxElement.textContent = '';
    weatherDescElement.textContent = '';
    humidityElement.textContent = '';
    windSpeedElement.textContent = '';
    weatherIconElement.src = '';
    weatherIconElement.alt = '';
}