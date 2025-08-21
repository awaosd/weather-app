function findWeather(response) {
  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = `${Math.round(
    response.data.temperature.current
  )}`;
  let city = document.querySelector("#forecast-city");
  city.innerHTML = `${response.data.city}`;
}

function findCity(city) {
  let apiKey = "3t7b46o8f5d3a094fe4a456f3ea46695";
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(url).then(findWeather);
}

function searchCity(event) {
  event.preventDefault();
  let formCity = document.querySelector("#search-city");

  findCity(formCity.value);
}

let SearchForm = document.querySelector("#search-form");
SearchForm.addEventListener("submit", searchCity);

findCity("London");
