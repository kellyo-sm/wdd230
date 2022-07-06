// ******************

// Header Date

// ******************

const datefield = document.getElementsByClassName("date");
const datefieldUK = document.querySelector("aside");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full"}).format(
    now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", { dateStyle: "full"}).format(now);

datefield.innerHTML = `<em>${fulldate}</em>`;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;


// **********************

// Responsive Navigation

// **********************

function toggleMenu() {
    document.getElementById("primNav").classList.toggle("open");
}
const x = document.getElementById("hambtn")
x.onclick = toggleMenu;


// ***********************

// Footer Copyright Date

// ***********************

var date= (new Date().getFullYear());
document.getElementById("year").innerHTML = date;

// ***********************

// Footer Copyright Date

// ***********************

var currentdate = new Date().toLocaleDateString('en-GB', {weeday:"long", year:"numeric", month:"long", day:"numeric"});
document.getElementById("currentdate").innerHTML = currentdate;