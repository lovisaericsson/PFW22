//function for building menu

let menu = document.getElementById("menu");

const menuElements = [

    {
        icon: "../Images/Icons/home.png",
        iconClicked: "../Images/Icons/home-clicked.png",
        url: "Home.html" 
        
    },

    {
        icon: "../Images/Icons/search.png",
        iconClicked: "../Images/Icons/search-clicked.png",
        url: "Search.html"
        
    },

    {
        icon: "../Images/Icons/about.png", //will be changed to @ sign
        iconClicked: "../Images/Icons/about-clicked.png",
        url: "Contact.html"
        
    },

    {
        icon: "../Images/Icons/faq.png",
        iconClicked: "../Images/Icons/faq-clicked.png",
        url: "FAQ.html"
        
    },
]

function buildMenu () { 
    
    for (let i = 0 ; i < 4 ; i++) {

        let div = document.createElement("div"); 
        div.innerHTML = `<img src="${menuElements[i].icon}">`
        div.classList.add("menuElement")
        
        menu.appendChild(div);
    }
}
