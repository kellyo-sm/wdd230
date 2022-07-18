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
  let card = document.createElement('section');
  let picture = document.createElement('img');        
  let group = document.createElement('div');
  let templeName = document.createElement('h2');
  let label1 = document.createElement('h3');
  let address = document.createElement('p');
  let label2 = document.createElement('h3');
  let phoneNumber = document.createElement('p');
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
  let button = document.createElement('a');
  let link = document.createElement('a');

  // Build the image attributes by using the setAttribute mefor the src, alt, and loading attribute values. (Fill inblank with the appropriate variable).
  picture.setAttribute('src', temple.picture);
  picture.setAttribute('alt', `${temple.templeName}`);
  picture.setAttribute('loading', 'lazy');
  picture.classList.add("tImg");

  // if (temple.url == "N/A") {
  //     lTwo.innerHTML = `${temple.phone}`;
  //   } else {
  //     lTwo.innerHTML = `${temple.phone} | <a href="${temple.url}" target="_blank">Website</a>`;
  //   }

          
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
  button.textContent = `${temple.button}`;
  link.textContent = `${temple.link}`;
           
          
  // Add/append the section(card) with the h2 element
  group.appendChild(picture);
  group.appendChild(templeName);
  group.appendChild(title1);
  group.appendChild(address);
  group.appendChild(title2);
  group.appendChild(phoneNumber);
  group.appendChild(title3);
  group.appendChild(email);
  group.appendChild(title4);
  group.appendChild(services);
  group.appendChild(title5);
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
