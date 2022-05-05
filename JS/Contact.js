"use strict"


// Adds eventlistener to the form's send button
function formListner() {
    let btn = document.getElementById("send-btn");
    btn.addEventListener("click", onSendForm);
}

// When the form's send button is clicked
function onSendForm() {
    if (document.querySelector("form input").value.length == 0 ||
        document.querySelector("form textarea").value.length == 0) { alert("En eller flera av områdena är tomma, vänligen fyll i alla rutor."); }
    else {
        alert("Tack för ditt meddelande! Vi återkommer så fort vi kan.")
        let form = document.querySelector("form");
        form.reset();
    }
}

// Initializes eventlistener-function
formListner()