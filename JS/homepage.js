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
        icon: "../Images/Icons/about.png", //will be changed to @ sign
        iconClicked: "../Images/Icons/about-clicked.png",
        url: "Contact.html"
        
    },

    { //FAQ
        icon: "../Images/Icons/faq.png",
        iconClicked: "../Images/Icons/faq-clicked.png",
        url: "FAQ.html"
        
    },
]

function currentURL (filename) {
    let path = window.location.pathname;
    let page = path.split("/").pop();


    if (page == filename) {
        return true;
    } 
}

function buildMenu () { 
    
    for (let i = 0 ; i < 4 ; i++) {

        let checker = currentURL("Home.html");

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
