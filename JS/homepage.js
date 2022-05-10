//function for building menu

let body = document.querySelector("body");
let menu = document.getElementById("menu");
let background = document.getElementById("background");

const menuElements = [

    { //Home
        icon: "../Images/Icons/home.png",
        iconClicked: "../Images/Icons/home-clicked.png",
        url: "Home.html"

    },

    { //Search
        icon: "../Images/Icons/search.png",
        iconClicked: "../Images/Icons/search-clicked.png",
        url: "Search.html"

    },

    { //Contact
        icon: "../Images/Icons/contact.png",
        iconClicked: "../Images/Icons/about-clicked.png", //Will be changed to "clicked" mail
        url: "Contact.html"

    },

    { //FAQ
        icon: "../Images/Icons/faq.png",
        iconClicked: "../Images/Icons/faq-clicked.png",
        url: "FAQ.html"

    },
]

// Checks is html-name is the same as image-name
function check(i) {
    let path = window.location.pathname;
    let pagename = path.split("/").pop().split(".")[0].toLocaleLowerCase();
    let image = menuElements[i].icon;
    let imagename = image.split("/").pop().split(".")[0];

    if (pagename == imagename) {
        return true
    }
}

// Builds menu
function buildMenu() {
    for (let i = 0; i < 4; i++) {
        let checker = check(i);
        let div = document.createElement("div");
        if (checker == true) {
            div.innerHTML = `<a href="${menuElements[i].url}"> <img src="${menuElements[i].iconClicked}"> </a>`
        } else {
            div.innerHTML = `<a href="${menuElements[i].url}"> <img src="${menuElements[i].icon}"> </a>`
        }
        div.classList.add("menuElement");
        menu.appendChild(div);
    }
}


function setBackground () {
    
    let bgDiv = document.createElement("div");
    background.appendChild(bgDiv);

    var d = new Date();
    var hours = d.getHours();

    if (hours <= 18 && hours >= 7) {
        bgDiv.innerHTML = `<img src="../Images/Startpage_GIFs/day.gif">`
    } else {
        bgDiv.innerHTML =`<img src="../Images/Startpage_GIFs/night.gif">`
    }

    bgDiv.classList.add("bgImage");

}

function setBgShape () {

    let bgShape = document.createElement("div");

    bgShape.classList.add("bgShape");

    body.appendChild(bgShape);

}

function setIcon () {
    let icon = document.createElement("div");

    icon.classList.add("icon");

    body.appendChild(icon);
}

buildMenu()

setBackground();

setBgShape();

setIcon();
