"use strict";
let menu = document.querySelector(".menu")


// !!!!! DO NOT CHANGE ICON NAMES !!!!! 
// Color changing of menu icons depend on icon file names
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
        iconClicked: "../Images/Icons/contact-clicked.png",
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

function toTopFunction() {
    let body = document.querySelector("body")
    let toTopBtn = document.createElement("a");
    toTopBtn.setAttribute("href", "#");
    toTopBtn.classList.add("to-top");
    body.appendChild(toTopBtn);

    let toTop = document.querySelector(".to-top");
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
            toTop.classList.add("to-top-active")
        } else {
            toTop.classList.remove("to-top-active")
        }
    })
}




buildMenu();
toTopFunction();