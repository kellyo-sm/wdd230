const windSpeed = parseFloat(document.getElementById("speed").textContent);
const temperature = parseFloat(document.getElementById("temp").textContent);

let tempFahrenheit = (temperature * 1.8) + 32;
let speedMph = windSpeed / 1.609344;

let windChill = 0;
if (tempFahrenheit <= 50 && speedMph > 3.0) {
    let f = 35.74 + (0.6215 * tempFahrenheit) - (35.73 * (speedMph ** 0.16)) + (0.4275 * (tempFahrenheit * (speedMph ** 0.16)));
    windChill = f;
} else {
    windChill = "N/A";
}

document.getElementById("chill").textContent = windChill;