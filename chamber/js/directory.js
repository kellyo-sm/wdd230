const requestURL = "https://github.com/kellyo-sm/wdd230/blob/main/chamber/json/data.json";
const cards = document.querySelector(".cards");

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);

        const directory = jsonObject["directory"];
        

        directory.forEach(business => {
            let image = document.createElement("img");
            let card = document.createElement("div");
            let businessName = document.createElement("h2");
            let address = document.createElement("p");
            let phone = document.createElement("p");
            let url = document.createElement("p");
            let membership = document.createElement("p");


            image.setAttribute("src", "images/" + business.logo);
            image.setAttribute("alt", `${business.businessName}`);
            image.setAttribute("loading", "lazy");

            card.appendChild(businessName);
            card.appendChild(image);
            card.appendChild(url);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(membership);

            // cards.append(card);
            document.querySelector(cards).appendChild(card)
            
        });

        directory.forEach(displayCards);

    });



const gridbtn = document.querySelector("#grid");
const listbtn = document.querySelector("#list");
const display = document.querySelector(".cards");


gridbtn.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbtn.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}