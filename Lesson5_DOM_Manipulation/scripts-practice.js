const input = document.querySelector("input")
const button = document.querySelector("button")
const list = document.querySelector("ul")
const main = document.querySelector("main")
const h1 = document.querySelector("h1")


main.style.backgroundColor = "#c8d0c4";
main.style.padding = "2rem";
main.style.border = "5px double #66715f";
h1.style.borderBottom = "5px double #66715f";
button.style.borderRadius = "15px";
input.style.borderRadius = "15px";
button.style.borderColor = "#66715f";

button.addEventListener("click", () => {
    const scripture = input.value;
    input.value = " ";

    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = scripture;
    listItem.appendChild(listBtn);
    listBtn.textContent = "\u274C";
    listBtn.style.fontSize = "1rem";
    list.appendChild(listItem);

    listBtn.addEventListener("click", () => {
        list.removeChild(listItem);
    });

    input.focus();
})