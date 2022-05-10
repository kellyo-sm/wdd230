
const datefield = document.getElementsByClassName("date");
const datefieldUK = document.querySelector("aside");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full"}).format(
    now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", { dateStyle: "full"}).format(now);

datefield.innerHTML = `<em>${fulldate}</em>`;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;



var date = (new Date().getFullYear());
document.getElementById("year").innerHTML = date;


var currentdate = new Date().toLocaleDateString('en-GB', {weekday:"long", year:"numeric", month:"long", day:"numeric"});
document.getElementById("currentdate").innerHTML = currentdate;


document.write("Last Modified: " + document.lastModified);

