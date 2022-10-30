let key = "e4f04b6d1b4e27d819f811e996dfde63";
let ipaK = `https://api.openweathermap.org/data/2.5/weather?&appid=${key}&q=poznan&units=metric`;
let start = new Date();
let day = start.getDay();
let time1 = start.getHours();
let time2 = start.getMinutes();
let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let dayTime = document.querySelector(".DayTime");
if (time2 < 10) {
  time2 = `0${time2}`;
}
dayTime.innerHTML = days[day - 1] + " " + time1 + ":" + time2;
let city = document.querySelector(".city");
let temperature = document.querySelector(".temperature");
let cityV = document.querySelector(".Enter");
let button = document.querySelector(".submit");
let clouds = document.querySelector("#clouds");
let precip = document.querySelector("#pr");
let hum = document.querySelector("#hum");
let wind = document.querySelector("#wind");
let button1 = document.querySelector(".button1");
button1.addEventListener("click", function (event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(function (position) {
    console.log(position.coords.longitude);
    console.log(position.coords.latitude);
  });
});
button.addEventListener("click", function (event) {
  event.preventDefault();
  city.innerHTML = cityV.value;
  axios.get(ipaK).then(function (response) {
    console.log(response.data.main.temp);
    wind.innerHTML += response.data.wind.speed;
    clouds.innerHTML = response.data.weather[0].description;
    precip.innerHTML = `Pressure:${response.data.main.pressure}`;
    hum.innerHTML += response.data.main.humidity;
    temperature.innerHTML = Math.round(response.data.main.temp);
    let cel = document.querySelector(".cel");
    cel.addEventListener("click", function () {
      temperature.innerHTML = Math.round(response.data.main.temp);
    });
    let far = document.querySelector(".far");
    far.addEventListener("click", function () {
      temperature.innerHTML = Math.round(
        (response.data.main.temp * 9) / 5 + 32
      );
    });
  });
});
