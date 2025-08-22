function findWeather(response) {
  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = `${Math.round(
    response.data.temperature.current
  )}`;
  let city = document.querySelector("#forecast-city");
  city.innerHTML = `${response.data.city}`;
  let details = document.querySelector("#details");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  let date = new Date(response.data.time * 1000);

  details.innerHTML = `${response.data.condition.description}`;
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  wind.innerHTML = `${response.data.wind.speed}km/h`;
  dateElement.innerHTML = formatDate(date);
}
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
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
