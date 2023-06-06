let currentTime = new Date();

let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentTime.getDay()];
let header4 = document.querySelector("h4");
header4.innerHTML = `${day} ${hours}:${minutes}`;

function showTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  let header2 = document.querySelector(".h2");
  header2.innerHTML = temperature;
}

function showCity(event) {
  event.preventDefault();
  let citySearch = document.querySelector(".text");
  let header1 = document.querySelector("h1");
  header1.innerHTML = `${citySearch.value}`;
  let apiKey = "2513f3c728b1b5ff4f4347e1a6af22b8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch.value}&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemp);
}
let search = document.querySelector(".form");
search.addEventListener("submit", showCity);

function positioning(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey2 = "2513f3c728b1b5ff4f4347e1a6af22b8";
  let apiUrl2 = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey2}`;
  axios.get(apiUrl2).then(display);
}
navigator.geolocation.getCurrentPosition(positioning);

function display(response) {
  let headerName = document.querySelector("h1");
  headerName.innerHTML = response.data.name;
  let temper = Math.round(response.data.main.temp);
  let headerTemp = document.querySelector(".h2");
  headerTemp.innerHTML = temper;
  console.log(response);
}

let current = document.querySelector(".current");
current.addEventListener("click", display);
