//function for building menu

let menu = document.getElementById("menu");

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
            div.innerHTML = `<img src="${menuElements[i].iconClicked}">`
        } else {
            div.innerHTML = `<img src="${menuElements[i].icon}">`
        }
        div.classList.add("menuElement");
        menu.appendChild(div);
    }
}

buildMenu()
