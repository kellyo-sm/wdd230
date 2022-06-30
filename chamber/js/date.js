var date = new Date();

document.getElementById("date").time = date.toDateString();

var hours = date.getHours();
var mins = date.getMinutes();
var seconds = date.getSeconds();
document.getElementById("time").value = hours + ":" + mins + ":" + seconds;