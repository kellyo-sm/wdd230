const currentOutlook = document.querySelector('#current');
const weatherIcon = document.querySelector('.weather-icon');
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


const latitude = 38.981
const longitude = -77.100

const url = `https://api.openweathermap.org/data/2.5/onecall?lat={latitude}&lon={longitude}&appid=4c30c204135027cef9944117fb3a6fbc`;

apiFetch(url);

async function apiFetch(apiURL) {
  try {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
        console.log(error);
  }
}

function displayResults (weatherData) {
  currentOutlook.innerHTML = `<strong>${weatherData.current.temp.toFixed(0)} &#8457;</strong>`;

  const iconsrc =  `https://openweathermap.org/img/w/${weatherData.current.weather[0].icon}.png`;
  const desc = toTitleCase(weatherData.current.weather[0].description);

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;

  currentHumidity.innerHTML = `Current Humidity: <strong>${weatherData.current.humidity}</strong>`;

  const d1Img1 = `https://openweathermap.org/img/w/${weatherData.daily[0].weather[0].icon}.png`;
  const d1Desc = weatherData.daily[0].weather[0].description;

  img1.setAttribute('src', d1Img1);
  img1.setAttribute('alt', d1Desc);

  day1.innerHTML = `Temp: <strong>${weatherData.daily[0].temp.day}</strong> | Humidity: <strong>${weatherData.daily[0].humidity}</strong>`;

  const d2Img = `https://openweathermap.org/img/w/${weatherData.daily[1].weather[0].icon}.png`;
  const d2Desc = weatherData.daily[1].weather[0].description;

  img2.setAttribute('src', d2Img);
  img2.setAttribute('alt', d2Desc);

  day2.innerHTML = `Temp: <strong>${weatherData.daily[1].temp.day}</strong> | Humidity: <strong>${weatherData.daily[1].humidity}</strong>`;

  const d3Img = `https://openweathermap.org/img/w/${weatherData.daily[2].weather[0].icon}.png`;
  const d3Desc = weatherData.daily[2].weather[0].description;

  img3.setAttribute('src', d3Img);
  img3.setAttribute('alt', d3Desc);

  day3.innerHTML = `Temp: <strong>${weatherData.daily[2].temp.day}</strong> | Humidity: <strong>${weatherData.daily[2].humidity}</strong>`;

  try {
    let uTime = weatherData.alerts[0].end;
    let date = new Date(uTime * 1000);

    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();

    const formattedTime = hours + ":" + minutes.substring(-2) + ":" + seconds.substring(-2);

    alertText.innerHTML = `There is a current ${weatherData.alerts[0].event} in this area until ${formattedTime}`
    } catch (error) {
        document.querySelector(".ebroad").classList.add("closed");
    }
}

function closeAlert() {
    document.querySelector(".ebroad").classList.add("closed");
}

apiFetch();
document.querySelector(".alert").addEventListener('click', closeAlert);



