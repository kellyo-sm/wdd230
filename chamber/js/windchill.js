const temp = parseFloat(document.querySelector("#temp").innerHTML);
const wind = parseFloat(document.querySelector("#speed").innerHTML);
const windchill = document.querySelector("#chill");

if ((temp <= 50) && (wind > 3)) {
  const wc = 35.74 + (0.6215 * temp) - (35.775 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16));
  windchill.innerHTML = wc.toFixed(1) + "°F";
} else {
  windchill.innerHTML = "N/A"
}
