const requestURL = "https://kellyo-sm.github.io/wdd230/chamber/json/data.json";
const spotlt = document.querySelector(".spotlight");

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const business = jsonObject['directory'];
        shuffleArray(business)
        business.forEach(displayBusiness);
    });

function displayBusiness(business) {
    if (business.membershipLevel == "Gold") {
        let card = document.createElement("section");
        let name = document.createElement("h1");
        let img = document.createElement("img");
        let footer = document.createElement('div');
        let lOne = document.createElement('p');
        let lTwo = document.createElement('p');

        console.log(business)

        name.textContent = business.businessName;

        img.setAttribute('src', business.logo);
        img.setAttribute('alt', `${business.businessName} Logo`);
        img.setAttribute('loading', 'lazy');

        lOne.textContent = business.address;

        if(business.website == "N/A") {

            lTwo.innerHTML = `${business.phone} | <strong>No Website</strong>`;

        } else {

            lTwo.innerHTML = `${business.phone} | <a href="${business.website = "https://kellyo-sm.github.io/wdd230/chamber/404.html"}  target="_blank">Website</a>`;
        };

        

        footer.appendChild(lOne);
        footer.appendChild(lTwo);
        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(footer);

        document.querySelector("div.spotlight").appendChild(card);
    }
};

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};

