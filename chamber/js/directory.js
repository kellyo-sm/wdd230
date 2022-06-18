const requestURL = "https://kellyo-sm.github.io/wdd230/chamber/json/data.json";
const cards = document.querySelector(".cards");


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject)
        const business = jsonObject['directory'];
        business.forEach(displayBusiness);
    });

function displayBusiness(business) {
    let card = document.createElement("section");
    let img = document.createElement("img");
    let name = document.createElement("h1");
    let pNum = document.createElement("p");
    let Addr = document.createElement("p");
    let website = document.createElement("a");
    let membership = document.createElement("p");


    
    img.setAttribute('src', business.logo);
    img.setAttribute('alt', `${business.businessName} Logo`);
    img.setAttribute('loading', 'lazy');
    img.classList.add("bImg");

    name.textContent = business.businessName;
    name.classList.add("bName");
    Addr.textContent = business.address;
    Addr.classList.add("bAddr");
    pNum.textContent = business.phone;
    pNum.classList.add("bNum");
    website.textContent = business.url;
    membership.textContent = business.membershipLevel;

    if(business.website == "N/A") {
        business.website = "https://www.mcdonalds.com/us/en-us.html";
    };

    website.setAttribute('href', business.website);
    website.classList.add("bWeb");

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(Addr);
    card.appendChild(pNum);
    card.appendChild(website);
    card.appendChild(membership);

    document.querySelector(".cards").appendChild(card);
};
        // directory.forEach(displayCards);

   

// grid and list

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");



gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // 

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
