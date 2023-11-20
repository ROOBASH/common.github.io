const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
const searchButton = document.getElementById('search-button');
const locationInput = document.getElementById('location');
const locationName = document.getElementById('location-name');
const weatherDescription = document.getElementById('weather-description');
const temperature = document.getElementById('temperature');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    getWeatherData(location);
});

function getWeatherData(location) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            displayWeatherData(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeatherData(data) {
    locationName.textContent = data.name;
    weatherDescription.textContent = data.weather[0].description;
    temperature.textContent = `${data.main.temp}°C`;
}
