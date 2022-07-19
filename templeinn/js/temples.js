const requestURL = "https://kellyo-sm.github.io/wdd230/templeinn/json/temples.json";
const groups = document.querySelector(".cards");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const temples = jsonObject['temples'];
    temples.forEach(displayTemples); 
  });  

function displayTemples(temple) {
  // Create elements to add to the document 
  let card = document.createElement('article');
  let img = document.createElement('img');        
  let group = document.createElement('div');
  let templeName = document.createElement('h2');
  let label1 = document.createElement('h3');
  let address = document.createElement('p');
  let city = document.createElement('p');
  let country = document.createElement('p');
  let label2 = document.createElement('h3');
  let phone = document.createElement('p');
  let label3 = document.createElement('h3');
  let email = document.createElement('p');
  let label4 = document.createElement('h3');
  let services = document.createElement('p');
  let label5 = document.createElement('h3');
  let announcement = document.createElement('p');
  let label6 = document.createElement('h3');
  let groundbreaking = document.createElement('p');
  let label7 = document.createElement('h3');
  let dedication = document.createElement('p');
  let closures = document.createElement('h4');
  let cl1 = document.createElement('p');
  let cl2 = document.createElement('p');
  let cl3 = document.createElement('p');
  let cl4 = document.createElement('p');
  let cl5 = document.createElement('p');
  let cl6 = document.createElement('p');
  let cl7 = document.createElement('p');
  let cl8 = document.createElement('p');
  let cl9 = document.createElement('p');




  // Build the image attributes by using the setAttribute mefor the src, alt, and loading attribute values. (Fill inblank with the appropriate variable).
  img.setAttribute('src', temple.img);
  img.setAttribute('alt', `${temple.templeName}`);
  img.setAttribute('loading', 'lazy');
  img.classList.add("img");

          
  // Change the textContent property of the h3 element to conthe companies full name
  // templeName.textContent = `${temple.templeName}`;
  templeName.textContent = temple.templeName;
  templeName.classList.add("tName");
  label1.textContent = temple.label1;
  label1.classList.add("label1");
  address.textContent = `${temple.address}`;
  city.textContent = `${temple.city}`;
  country.textContent = `${temple.country}`;
  label2.textContent = `${temple.label2}`;
  phone.textContent = `${temple.phone}`;
  label3.textContent = `${temple.label3}`;
  email.textContent = `${temple.email}`;
  label4.textContent = `${temple.label4}`;
  services.textContent = `${temple.services}`;
  label5.textContent = `${temple.label5}`;
  announcement.textContent = `${temple.announcements}`;
  label6.textContent = `${temple.label6}`;
  groundbreaking.textContent = `${temple.groundbreaking}`;
  label7.textContent = `${temple.label7}`;
  dedication.textContent = `${temple.dedication}`;
  closures.textContent = `${temple.clschedule}`;
  cl1.textContent = `${temple.cl1}`;
  cl2.textContent = `${temple.cl2}`;
  cl3.textContent = `${temple.cl3}`;
  cl4.textContent = `${temple.cl4}`;
  cl5.textContent = `${temple.cl5}`;
  cl6.textContent = `${temple.cl6}`;
  cl7.textContent = `${temple.cl7}`;
  cl8.textContent = `${temple.cl8}`;
  cl9.textContent = `${temple.cl9}`;
  
          
  // Add/append the section(card) with the h2 element
  group.appendChild(img);
  group.appendChild(templeName);
  group.appendChild(label1);
  group.appendChild(address);
  group.appendChild(label2);
  group.appendChild(phone);
  group.appendChild(label3);
  group.appendChild(email);
  group.appendChild(label4);
  group.appendChild(services);
  group.appendChild(label5);
  group.appendChild(announcement);
  group.appendChild(groundbreaking);
  group.appendChild(dedication);
  group.appendChild(button);
  group.appendChild(link);
            
          
  // Add/append the existing HTML div with the cards class the section(card)
  //document.querySelector('div.cards').appendChild(card);
  // groups.append(group);
  document.querySelector(".cards").appendChild(card);
          
};
