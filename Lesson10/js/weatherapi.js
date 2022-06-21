// select HTML elements to edit
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');



const url = "https://api.openweathermap.org/data/2.5/weather?id=5861897&appid=4c30c204135027cef9944117fb3a6fbc";



fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // this is temporary for development only
  });