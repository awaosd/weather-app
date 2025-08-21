function searchCity(event) {
  event.preventDefault();
  let formCity = document.querySelector("#search-city");
  let city = document.querySelector("#forecast-city");
  city.innerHTML = `${formCity.value}`;
}

let SearchForm = document.querySelector("#search-form");
SearchForm.addEventListener("submit", searchCity);
