import './style.css';

const content = document.querySelector("#content");
const btnHome = document.querySelector(".Home");
const btnMenu = document.querySelector(".Menu");
const btnAbout = document.querySelector(".About");

const home = function() {
    let box = document.createElement("div");
    content.appendChild(box)
    box.className = "box";
    box.textContent = "Milliways"
}

const menu = function() {
    let box = document.createElement("div");
    content.appendChild(box)
    box.className = "box";
    box.textContent = "Menu"
    box.style.fontSize = "24px"
    box.style.justifyContent = "start"
}

const about = function() {
    let box = document.createElement("div");
    content.appendChild(box)
    box.className = "box";
    box.textContent = "About"
    box.style.fontSize = "24px"
    box.style.justifyContent = "start"
}


btnHome.addEventListener("click", () => {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
      }
    home();
})

btnMenu.addEventListener("click", () => {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
      }
    menu();
})

btnAbout.addEventListener("click", () => {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
      }
    about();
})


home()