const currentOutlook = document.querySelector('#current');
const weatherIcon = document.querySelector('#weather-icon');
const temperature = document.querySelector('#temp');
const humidity = document.querySelector('#humidity');
const captionDesc = document.querySelector('figcaption');
const img1 = document.querySelector('#img1');
const day1 = document.querySelector('#day1');
const img2 = document.querySelector('#img2');
const day2 = document.querySelector('#day2'); 
const img3 = document.querySelector('#img3');
const day3 = document.querySelector('#day3');
const alertText = document.querySelector('.eText');


const url = `https://api.openweathermap.org/data/2.5/onecall?lat=38.9807&lon=-77.1003&units=imperial&exclude=minutely,hourly&appid=4c30c204135027cef9944117fb3a6fbc`;

const imgurl = `https://openweathermap.org/img/wn/`;

fetch(url)
.then((response) => response.json())
.then((jsObject) => {

    const temp = jsObject.current.temp.toFixed(0);
    const humidity =jsObject.current.humidity;

    document.querySelector('#current').textContent = temp;
    document.querySelector('#weather-icon').src = imgurl+jsObject.current.weather[0].icon+".png";
    document.querySelector('figcaption').textContent = jsObject.current.weather[0].description;
    document.querySelector("#humidity").innerHTML = humidity;
    
   const d1Img = `https://openweathermap.org/img/w/${weatherData.daily[0].weather[0].icon}.png`;
   const d1Desc = weatherData.daily[0].weather[0].description;

  img1.setAttribute('src', d1Img);
  img1.setAttribute('alt', d1Desc);

  day1.innerHTML = `<strong>Temp:</strong> ${weatherData.daily[0].temp.day} | <strong>Humidity: </strong>${weatherData.daily[0].humidity}`;

  const d2Img = `https://openweathermap.org/img/w/${weatherData.daily[1].weather[0].icon}.png`;
  const d2Desc = weatherData.daily[1].weather[0].description;

  img2.setAttribute('src', d2Img);
  img2.setAttribute('alt', d2Desc);

  day2.innerHTML = `<strong>Temp:</strong> ${weatherData.daily[1].temp.day} | <strongHumidity:/strong> >${weatherData.daily[1].humidity}<`;

  const d3Img = `https://openweathermap.org/img/w/${weatherData.daily[2].weather[0].icon}.png`;
  const d3Desc = weatherData.daily[2].weather[0].description;

  img3.setAttribute('src', d3Img);
  img3.setAttribute('alt', d3Desc);

  day3.innerHTML = `<strong>Temp: </strong>${weatherData.daily[2].temp.day} | <strong>Humidity: </strong>${weatherData.daily[2].humidity}`;


});


