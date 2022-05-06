"use strict";

//Search function
let countryBtn = document.getElementById("countries-btn");
let cityBtn = document.getElementById("cities-btn");
let programmeBtn = document.getElementById("courses-btn");

// Filter subject buttons
let filter = document.querySelector(".filterprogram");
let filterDropdown = document.querySelector(".filters-dropdown")
let filterBtn = document.querySelector(".filter-program-btn")
let designBtn = document.getElementById("designBtn");
let techBtn = document.getElementById("techBtn");
let mathBtn = document.getElementById("mathBtn");
let lawBtn = document.getElementById("lawBtn");
let filoBtn = document.getElementById("filoBtn");
let medicineBtn = document.getElementById("medicineBtn");
let sociologyBtn = document.getElementById("sociologyBtn");


// Event handlers for country, city, programme, filter buttons
function addEventHandlers() {
    countryBtn.addEventListener("click", function () {
        countryBtn.classList.toggle("active");
        toggleOptions();
    })
    cityBtn.addEventListener("click", function () {
        cityBtn.classList.toggle("active");
        toggleOptions();
    })
    programmeBtn.addEventListener("click", function () {
        programmeBtn.classList.toggle("active");
        toggleOptions();
    })

    //Filter subject handlers
    filterBtn.addEventListener("click", function () {
        filterBtn.classList.toggle("active");
        toggleOptions();
    })

    designBtn.addEventListener("click", function () {
        designBtn.classList.toggle("active");
        toggleOptions();
    })

    techBtn.addEventListener("click", function () {
        techBtn.classList.toggle("active");
        toggleOptions();
    })

    mathBtn.addEventListener("click", function () {
        mathBtn.classList.toggle("active");
        toggleOptions();
    })

    lawBtn.addEventListener("click", function () {
        lawBtn.classList.toggle("active");
        toggleOptions();
    })

    filoBtn.addEventListener("click", function () {
        filoBtn.classList.toggle("active");
        toggleOptions();
    })

    medicineBtn.addEventListener("click", function () {
        medicineBtn.classList.toggle("active");
        toggleOptions();
    })

    sociologyBtn.addEventListener("click", function () {
        sociologyBtn.classList.toggle("active");
        toggleOptions();
    })

    // Filter level handlers
    bachelorsBtn.addEventListener("click", function () {
        bachelorsBtn.classList.toggle("active");
        toggleOptions();
    })

    mastersBtn.addEventListener("click", function () {
        mastersBtn.classList.toggle("active");
        toggleOptions();
    })

    doctorateBtn.addEventListener("click", function () {
        doctorateBtn.classList.toggle("active");
        toggleOptions();
    })
}

// //Untoggled fetch results for each category (COUNTRIES, CITIES, PROGRAMMES)
// function unToggled() {
//     const DATABASE = [];

//     DATABASE.push(COUNTRIES, CITIES, PROGRAMMES)

//     return DATABASE;
// }

// Stores ALL countries in an array
function getAllCountries() {

    const allCountries = [];

    for (let i = 0; i < COUNTRIES.length; i++) {
        allCountries.push(COUNTRIES[i]);
    }

    return allCountries;
}

// Stores ALL cities in an array
function getAllCities() {

    const allCities = [];

    for (let i = 0; i < CITIES.length; i++) {
        allCities.push(CITIES[i]);
    }

    return allCities;
}

// Stores ALL programmes in an array
function getAllProgrammes() {

    const allProgrammes = [];

    for (let i = 0; i < PROGRAMMES.length; i++) {
        allProgrammes.push(PROGRAMMES[i]);
    }

    return allProgrammes;
}

//Toggle results for each category (COUNTRIES, CITIES, PROGRAMMES)
function toggleOptions() {
    let results = [];

    // If country is toggled, get all countries
    if (countryBtn.classList.contains("active") == true) {
        results = [...getAllCountries()]
    }

    // If city is toggled, get all cities
    if (cityBtn.classList.contains("active") == true) {
        results = [...results, ...getAllCities()]
    }

    // If programme is toggled...
    if (programmeBtn.classList.contains("active") == true) {
        //...show filter
        filter.classList.remove("no-display");
        // If filter btn is untoggled, dont show filters
        if (filterBtn.classList.contains("active") == false) {
            filterDropdown.classList.add("no-display");
            filterBtn.style.backgroundImage = "url('../Images/arrow-up.png')";
        }
        // If filter btn is toggled, show filters
        if (filterBtn.classList.contains("active") == true) {
            filterDropdown.classList.remove("no-display");
            filterBtn.style.backgroundImage = "url('../Images/arrow-down.png')";
        }

        // Calls programs function and filters the programs in turn
        results = [...results, ...getAllProgrammes()]
        results = [...filterDesign(results)]
        results = [...filterTech(results)]
        results = [...filterMath(results)]
        results = [...filterLaw(results)]
        results = [...filterFilo(results)]
        results = [...filterMedicine(results)]
        results = [...filterSociology(results)]
    }

    // If programme is not toggled, dont show filters
    if (programmeBtn.classList.contains("active") == false) {
        filter.classList.add("no-display");
    }

    // If nothing is toggled, show all
    if (results.length == 0) {
        results = [...getAllCountries(), ...getAllCities(), ...getAllProgrammes()]
    }
    toggleColors();
    console.log(results)
    return results;
}

function toggleColors() {
    // Colors for city, country, program, programfilter
    let mainButtons = [countryBtn, cityBtn, programmeBtn, filterBtn];
    for (let i = 0; i < mainButtons.length; i++) {
        // If active, background color is lightgray
        if (mainButtons[i].classList.contains("active") == true) {
            mainButtons[i].style.backgroundColor = "lightgray";
        } // If inactive, background color is darkgray 
        else if (mainButtons[i].classList.contains("active") == false) {
            mainButtons[i].style.backgroundColor = "rgb(135, 135, 135)";
        }
    }
    // Colors for filter subject and level
    let filterButtons = [designBtn, techBtn, mathBtn, lawBtn, filoBtn, medicineBtn, sociologyBtn];
    for (let j = 0; j < filterButtons.length; j++) {
        // If active, background color is darkgray
        if (filterButtons[j].classList.contains("active") == true) {
            filterButtons[j].style.backgroundColor = "darkgray";
        } // If inactive, background color is darkgray
        else if (filterButtons[j].classList.contains("active") == false) {
            filterButtons[j].style.backgroundColor = "lightgray";
        }
    }
}




// Program filter subject functions
function filterDesign(results) {
    // If button is not toggled, the belonging subject results will not show
    if (designBtn.classList.contains("active") == false) {
        results = results.filter((result) => result.subjectID !== 6);
    }
    return results;
}
function filterTech(results) {
    // If button is not toggled, the belonging subject results will not show
    if (techBtn.classList.contains("active") == false) {
        results = results.filter((result) => result.subjectID !== 1);
    }
    return results;
}
function filterMath(results) {
    // If button is not toggled, the belonging subject results will not show
    if (mathBtn.classList.contains("active") == false) {
        results = results.filter((result) => result.subjectID !== 0);
    }
    return results;
}
function filterLaw(results) {
    // If button is not toggled, the belonging subject results will not show
    if (lawBtn.classList.contains("active") == false) {
        results = results.filter((result) => result.subjectID !== 2);
    }
    return results;
}
function filterFilo(results) {
    // If button is not toggled, the belonging subject results will not show
    if (filoBtn.classList.contains("active") == false) {
        results = results.filter((result) => result.subjectID !== 5);
    }
    return results;
}
function filterMedicine(results) {
    // If button is not toggled, the belonging subject results will not show
    if (medicineBtn.classList.contains("active") == false) {
        results = results.filter((result) => result.subjectID !== 3);
    }
    return results;
}
function filterSociology(results) {
    // If button is not toggled, the belonging subject results will not show
    if (sociologyBtn.classList.contains("active") == false) {
        results = results.filter((result) => result.subjectID !== 4);
    }
    return results;
}

//Direct code
addEventHandlers()
toggleOptions()