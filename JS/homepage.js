//function for building menu

let body = document.querySelector("body");
let background = document.getElementById("background");


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

function runBackground () {

    setBackground();
    setBgShape();
    setIcon();
}

runBackground();
