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
  
    let card = document.createElement("article");
    let name = document.createElement("h2");
    let img = document.createElement("img");
    let footer = document.createElement("div");
    let address = document.createElement("h4");
    let city = document.createElement("h4");
    let country = document.createElement("h4");
    let serviceslabel = document.createElement("h4");
    let services = document.createElement("p");
    let services2 = document.createElement("p");
  

    console.log(temple);

    img.setAttribute('src', temple.img);
    img.setAttribute('alt', `${temple.templeName}`);
    img.setAttribute('loading', 'lazy');
    img.classList.add("img");

    name.textContent = temple.templeName;
    address.textContent = temple.address;
    city.textContent = temple.city;
    country.textContent = temple.country;
    serviceslabel.textContent = temple.label4;
    services.textContent = temple.services;
    services2.textContent = temple.services2;
    

    footer.appendChild(address);
    footer.appendChild(city);
    footer.appendChild(country);
    card.appendChild(name);
    card.appendChild(img);
    card.appendChild(footer);
    card.appendChild(serviceslabel);
    card.appendChild(services);
    card.appendChild(services2);
    

    document.querySelector("div#spotlight").appendChild(card);
  }


// function shuffleArray(array) {
//   for (var i = array.length - 1; i > 0; i--) {
//     var j = Math.floor(Math.random() * (i + 1));
//     var temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }
// }


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// function shuffleArray(array) {
//   let spotLight = array.length;
//   while (0 !== spotLight) {
//     let randId = Math.floor(Math.random() * spotLight);
//     spotLight -= 1;
//     let tmp = array[spotLight];
//     array[spotLight] = array[randId];
//     array[randId] = tmp;
//   }
//   return array;
// }
