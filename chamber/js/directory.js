const requestURL = "json/data.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);

        const directory = jsonObject["directory"];
        const groups = document.querySelector(".groups");

        directory.forEach(company => {
            let image = document.createElement("img");
            let group = document.createElement("div");
            let businessName = document.createElement("h2");
            let address = document.createElement("p");
            let phone = document.createElement("p");
            let url = document.createElement("p");
            let membership = document.createElement("p");


            image.setAttribute("src", "images/" + business.logo);
            image.setAttribute("alt", `${business.businessName}`);
            image.setAttribute("loading", "lazy");

            group.appendChild(businessName);
            group.appendChild(image);
            group.appendChild(url);
            group.appendChild(address);
            group.appendChild(phone);
            group.appendChild(membership);

            groups.append(group);
            
        });
    });