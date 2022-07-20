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
    

    const today = new Date()

    for (let i = 0; i < 3; i++) {
        const dayForecast = jsObject.daily[i];
        const idNumber = i + 2;
        const dayTemp = dayForecast.temp.day;

        const dayDate = new Date(today.getTime());
        dayDate.setUTCHours(24 * (i+1), 0 ,0);
        

    document.querySelector('#temp' + idNumber).textContent = dayTemp.toFixed(0);
    document.querySelector('#weather-icon' + idNumber).src = imgurl + dayForecast.weather[0].icon+".png";
    document.querySelector('#day1' + idNumber).textContent =  dayDate.toLocaleDateString('en-us', { weekday: 'long'})
    document.querySelector('#day2' + idNumber).textContent =  dayDate.toLocaleDateString('en-us', { weekday: 'long'})
    document.querySelector('#day3' + idNumber).textContent =  dayDate.toLocaleDateString('en-us', { weekday: 'long'})
        
    }
    

   

});


