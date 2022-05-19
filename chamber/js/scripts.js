// header date
const datefield = document.getElementsByClassName("date");
const datefieldUK = document.querySelector("aside");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full"}).format(
    now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", { dateStyle: "full"}).format(now);

datefield.innerHTML = `<em>${fulldate}</em>`;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;



// message showing on Mondays or Tuesdays only
let d = new Date().getDay();
const banner = document.getElementById("banner");
if (d === 1 || d === 2) {
  banner.style.display = "block";
} 

const close = document.querySelector("#close");

close.addEventListener("click", () => {
  banner.style.display = "none";
});



// responsive navigation
function toggleMenu()  {
  document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById("hambtn")
x.onclick = toggleMenu;







// footer date/time/last updated
var date = (new Date().getFullYear());
document.getElementById("year").innerHTML = date;


var currentdate = new Date().toLocaleDateString('en-GB', {weekday:"long", year:"numeric", month:"long", day:"numeric"});
document.getElementById("currentdate").innerHTML = currentdate;


document.write("Last Modified: " + document.lastModified);

