const key = "94983edcce42ec6b74517e2aef4ada08";
const url =
  "https://api.openweathermap.org/data/2.5/weather?q=india&units=metric&";

async function checkWeather() {
  const response = await fetch(url + "&appid=${key}");
  var data = await response.json();
  console.log(data);
}
checkWeather();
