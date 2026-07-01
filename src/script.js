let daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let apiKey = "5bac517fb09b890c4230d5t470ofe359";

function displayWeather(response) {
  let cityElement = document.querySelector("#city");
  let temperatureElement = document.querySelector("#current-temperature-value");
  let detailsElement = document.querySelector("#current-details");

  let city = response.data.city;
  let temperature = Math.round(response.data.temperature.current);

  cityElement.innerHTML = city;
  temperatureElement.innerHTML = temperature;

  let date = new Date();

  let currentDay = daysOfWeek[date.getDay()];

  let currentHour = date.getHours();
  let currentMinutes = date.getMinutes();

  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }

  let currentTime = document.querySelector("#current-time");
  currentTime.innerHTML = `${currentDay} ${currentHour}:${currentMinutes}`;
}

function searchCity(event) {
  event.preventDefault();

  let cityInput = document.querySelector("#city-form");
  let city = cityInput.value.trim();

  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
}

let cityForm = document.querySelector("#city-search");
cityForm.addEventListener("submit", searchCity);
