const weatherIcon = document.querySelector(".weather-icon");
const temp = document.querySelector("#temp");
const wind = document.querySelector("#speed");
// const temp = parseFloat(document.querySelector("#temp").innerHTML);
// const wind = parseFloat(document.querySelector("#speed").innerHTML);
const windchill = document.querySelector("#chill");
const captionDesc = document.querySelector('figcaption');

const latitude = 43.182
const longitude = -99.292

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=4c30c204135027cef9944117fb3a6fbc';

apiFetch(url);


async function apiFetch(apiURL) {
  try {
    const response = await fetch(apiURL);
    if (Response.ok) {
      const data = await response.json();
      console.log(data); // testing call
      displayResults(data);

    } else {
      throw Error(await response.text());
    }
  }catch (error) {
    console.log(error);
  }
}

function displayResults(weatherData) {
  const t = weatherData.main.temp.toFixed(0);
  const s = weatherData.main.wind.speed;


  if ((t <= 50) && (s >= 3)) {
    const f = 35.74 + (0.6215 * t) - (35.775 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
    windchill.textContent = f.toFixed(1) + "°F";
  } 
  // else {
  //   windchill.innerHTML = "N/A"
  // }

  temp.innerHTML = `<strong>${t}</strong>`;
  wind.innerHTML = s;

  const iconsrc = `https://openweathermap.or/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc;
}