const requestURL = "https://kellyo-sm.github.io/wdd230/templeinn/json/temples.json";
const spotlt = document.querySelector("#spotlight");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temple = jsonObject["temples"];
    shuffleArray(temple);
    temple.forEach(displayTemple);
  });

function displayTemple(temple) {
  
    let card = document.createElement("section");
    let name = document.createElement("h1");
    let img = document.createElement("img");
    let footer = document.createElement("div");
    let lOne = document.createElement("p");
    let lTwo = document.createElement("p");

    console.log(temple);

    name.textContent = temple.templeName;

    lOne.textContent = temple.address;


    footer.appendChild(lOne);
    footer.appendChild(lTwo);
    card.appendChild(name);
    card.appendChild(img);
    card.appendChild(footer);

    document.querySelector("div.spotlight");
  }


function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
