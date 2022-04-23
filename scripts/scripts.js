var date = (new Date().getFullYear());
document.getElementById("year").innerHTML = date;

// from CodePen example to help me figure out how to make the date work:

// const day = [
// 	"Sunday",
// 	"Monday",
// 	"Tuesday",
// 	"Wednesday",
// 	"Thursday",
// 	"Friday",
// 	"Saturday"
// ];
// const months = [
// 	"January",
// 	"February",
// 	"March",
// 	"April",
// 	"May",
// 	"June",
// 	"July",
// 	"August",
// 	"September",
// 	"October",
// 	"November",
// 	"December"
// ];
// const d = new Date();
// const dayName = day[d.getDay()];
// const monthName = months[d.getMonth()];
// const year = d.getFullYear();

// const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;
// // using getElementById
// document.getElementById("currentdate").textContent = fulldate;

var currentdate = new Date().toLocaleDateString('en-GB', {weekday:"long", year:"numeric", month:"long", day:"numeric"});
document.getElementById("currentdate").innerHTML = currentdate;


document.write("Last Modified: " + document.lastModified);