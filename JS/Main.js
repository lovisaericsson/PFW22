"use strict";

let wrapper = document.getElementById("results");

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

let bachelorsBtn = document.getElementById("bachelorsBtn");
let mastersBtn = document.getElementById("mastersBtn");
let doctorateBtn = document.getElementById("doctorateBtn");


// Event handlers for country, city, programme, filter buttons
function addEventHandlers() {
    countryBtn.addEventListener("click", function () {
        countryBtn.classList.toggle("active");
        renderResults();
    })
    cityBtn.addEventListener("click", function () {
        cityBtn.classList.toggle("active");
        renderResults();
    })
    programmeBtn.addEventListener("click", function () {
        programmeBtn.classList.toggle("active");
        renderResults();
    })

    //Filter subject handlers
    filterBtn.addEventListener("click", function () {
        filterBtn.classList.toggle("active");
        renderResults();
    })

    designBtn.addEventListener("click", function () {
        designBtn.classList.toggle("active");
        renderResults();
    })

    techBtn.addEventListener("click", function () {
        techBtn.classList.toggle("active");
        renderResults();
    })

    mathBtn.addEventListener("click", function () {
        mathBtn.classList.toggle("active");
        renderResults();
    })

    lawBtn.addEventListener("click", function () {
        lawBtn.classList.toggle("active");
        renderResults();
    })

    filoBtn.addEventListener("click", function () {
        filoBtn.classList.toggle("active");
        renderResults();
    })

    medicineBtn.addEventListener("click", function () {
        medicineBtn.classList.toggle("active");
        renderResults();
    })

    sociologyBtn.addEventListener("click", function () {
        sociologyBtn.classList.toggle("active");
        renderResults();
    })

    // Filter level handlers
    bachelorsBtn.addEventListener("click", function () {
        bachelorsBtn.classList.toggle("active");
        renderResults();
    })

    mastersBtn.addEventListener("click", function () {
        mastersBtn.classList.toggle("active");
        renderResults();
    })

    doctorateBtn.addEventListener("click", function () {
        doctorateBtn.classList.toggle("active");
        renderResults();
    })
}

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

function renderResults() {
    let results = toggleOptions();
    sortAlphabetical(results);

    //Build the search result with divs 
    wrapper.innerHTML = ""
    for (let j = 0; j < results.length; j++) {
        // Every five iterations, ads are rendered
        if (j != 0 && j % 5 == 0) {
            renderAdvertisement()
        }
        if ("languageID" in results[j]) {
            createDiv("country", results[j], wrapper)
        }
        if ("countryID" in results[j]) {
            createDiv("city", results[j], wrapper)
        }
        if ("universityID" in results[j]) {
            createDiv("program", results[j], wrapper)
        }

    }

}

// Renders a single ad
function renderAdvertisement() {
    let div = document.createElement("div");
    div.classList.add("ad");
    div.style.backgroundImage = `url("../Advertising-images/${randomizeAdNumber()}.png")`;
    wrapper.appendChild(div);
}

// Randomize a number from 1-11
function randomizeAdNumber() {
    let nr = Math.floor(Math.random() * 11) + 1;
    return nr
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

    // If programme is not toggled, or if cities/cointries is toggled along with programme, get all programmes
    if (programmeBtn.classList.contains("active") == true && (cityBtn.classList.contains("active") == true || countryBtn.classList.contains("active") == true)) {
        results = [...results, ...getAllProgrammes()]
    }

    // If ONLY programme is toggled...
    if (programmeBtn.classList.contains("active") == true && cityBtn.classList.contains("active") == false && countryBtn.classList.contains("active") == false) {
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
        if ((doctorateBtn.classList.contains("active") == true || (mastersBtn.classList.contains("active") == true || (bachelorsBtn.classList.contains("active") == true)))) {
            results = [...filterBacherlors(results)]
            results = [...filterMasters(results)]
            results = [...filterDoctorate(results)]
        }

        // If no subject filters are selected
        if (results.length == 0) {
            results = [...getAllProgrammes()]

            if ((doctorateBtn.classList.contains("active") == true || (mastersBtn.classList.contains("active") == true || (bachelorsBtn.classList.contains("active") == true)))) {
                results = [...filterBacherlors(results)]
                results = [...filterMasters(results)]
                results = [...filterDoctorate(results)]
            }
        }

    }

    // If programme is not toggled, or if cities/cointries is toggled along with programme, dont show filters
    if (programmeBtn.classList.contains("active") == false || (programmeBtn.classList.contains("active") == true && ((cityBtn.classList.contains("active") == true) || countryBtn.classList.contains("active") == true))) {
        filter.classList.add("no-display");
    }

    // If nothing is toggled, show all
    if (results.length == 0) {
        results = [...getAllCountries(), ...getAllCities(), ...getAllProgrammes()]
    }
    toggleColors();

    // if search is not empty 

    if (getInputValue() !== 0) {
        results = results.filter((result) => result.name.toLowerCase().includes(getInputValue()));
    }

    console.log(results);
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
    let filterButtons = [designBtn, techBtn, mathBtn, lawBtn, filoBtn, medicineBtn,
        sociologyBtn, bachelorsBtn, mastersBtn, doctorateBtn];

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

// Program filter level functions
function filterBacherlors(results) {
    // If button is not toggled, the belonging subject results will not show
    if (bachelorsBtn.classList.contains("active") == false) {
        results = results.filter((result) => result.level !== 0);
    }
    return results;
}
function filterMasters(results) {
    // If button is not toggled, the belonging subject results will not show
    if (mastersBtn.classList.contains("active") == false) {
        results = results.filter((result) => result.level !== 1);
    }
    return results;
}
function filterDoctorate(results) {
    // If button is not toggled, the belonging subject results will not show
    if (doctorateBtn.classList.contains("active") == false) {
        results = results.filter((result) => result.level !== 2);
    }
    return results;
}

// Get input value
function getInputValue() {
    let inputValue = document.getElementById("inputfield").value.toLowerCase();
    return inputValue;
}

function sortAlphabetical(result) {
    result.sort(function (a, b) {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    })
    return result
}

// Create div 
function createDiv(typeDiv, result, wrapper) {
    let createDiv = document.createElement("div");
    createDiv.classList.add("box");
    wrapper.appendChild(createDiv);

    if (typeDiv == "country") {
        createDiv.innerHTML = result.name
        let cities = getCitiesFromCountry(result.id);
        let divWithCities = createCityDivs(cities);
        // "initializes" arrow
        createDiv.classList.add("country-arrow-down");
        createDiv.style.backgroundImage = "url('../Images/arrow-down.png')";
        createDiv.appendChild(divWithCities);

        createDiv.addEventListener("click", function () {
            divWithCities.classList.toggle("city-result")
            // When clicked, show arrow up
            if (divWithCities.classList.contains("city-result")) {
                createDiv.classList.add("country-arrow-up");
                createDiv.classList.remove("country-arrow-down");
                createDiv.style.backgroundImage = "url('../Images/arrow-up.png')";
            }
            // When not clicked, show arrow down
            else {
                createDiv.classList.remove("country-arrow-up");
                createDiv.classList.add("country-arrow-down");
                createDiv.style.backgroundImage = "url('../Images/arrow-down.png')";
            }
        })
    }

    if (typeDiv == "city") {
        createDiv.classList.add("city-arrow-out")
        createDiv.style.backgroundImage = "url('../Images/arrow-right.png')";
        let createButton = document.createElement("button");
        createButton.setAttribute('id', 'myBtn');
        createButton.innerHTML = result.name
        createDiv.appendChild(createButton);

        let popUp = document.getElementById("popup-City");
        let popUpcontent = document.getElementsByClassName("popup-content");
        let span = document.getElementsByClassName("close")[0];

        createButton.addEventListener("click", function () {

            popUp.style.display = "block";
            popUpcontent[0].innerHTML = `
            <img src = "../Images/${getCityPicturePath(result)}"</img> 
            <h2> ${result.name.toUpperCase()}</h2> 
            <p>${getCityDescription(result)}</p>
            <br>
            <div><h3>OUT: ${getOutRating(result)} / 5</h3></div> 
            <div><h3>FOOD: ${getFoodRating(result)} / 5</h3></div> 
            <div><h3>ACCOMODATION: ${getAccomodationRating(result)} / 5</h3></div> 
            <br>`
        })

        span.addEventListener("click", function () {
            popUp.style.display = "none";
        })

        // When the user clicks anywhere of the popup, close it 

        window.onclick = function (event) {
            if (event.target == popUp) {
                popUp.style.display = "none";
            }
        }
    }

    if (typeDiv == "program") {

        let location = getProgramLocation(result);
        let subject = getProgramSubject(result);
        let level = getProgramLevel(result);

        createDiv.classList.add("program-arrow-down");
        createDiv.style.backgroundImage = "url('../Images/arrow-down.png')";

        // Top tags (subject, level)
        let topTags = document.createElement("div");
        topTags.innerHTML = `<p>${subject[0].toUpperCase()}</p> <p>${level[0].toUpperCase()}</p>`
        createDiv.appendChild(topTags);
        topTags.classList.add("topTag");

        // Program name
        let programName = document.createElement("div");
        programName.innerHTML = result.name;
        createDiv.appendChild(programName);

        // Bottom location tag
        let bottomTag = document.createElement("div");
        bottomTag.innerHTML = `<img src="../Images/Icons/marker.png"> ${location}`
        createDiv.appendChild(bottomTag);
        bottomTag.classList.add("bottomTag");

        // Dropdown of program
        let programDropDown = document.createElement("div");
        programDropDown.classList.add("program-dropdown");
        programDropDown.innerHTML =
            `<h2>${result.name.toUpperCase()}</h2>
        <div><h3>TEACHERS:</h3><div>${createStars(getTeachersRatingAverage(result))}(${getTeachersRatingAverage(result)}/5)</div></div>
        <div><h3>STUDENTS:</h3><div>${createStars(getStudentsRatingAverage(result))}(${getStudentsRatingAverage(result)}/5)</div></div>
        <div><h3>COURSES:</h3> <div>${createStars(getProgramRatingAverage(result))}(${getProgramRatingAverage(result)}/5)</div></div>
        <div><h3>LEVEL: ${getProgramLevel(result)}</h3></div>
        <br>
        <div><h3>COUNTRY: ${location[0].split(",").pop()}</h3></div>
        <div><h3>CITY: ${location[0].split(",")[0]}</h3></div>
        <div><h3>LANGUAGE: ${getProgramLanguage(result)}</h3></div>
        <div><h3>UNIVERSITY: ${getProgramUniversity(result)}</h3></div>
        `
        programDropDown.classList.add("no-display");
        createDiv.appendChild(programDropDown);
        createDiv.addEventListener("click", function () {
            programDropDown.classList.toggle("no-display");
            if (programDropDown.classList.contains("no-display")) {
                createDiv.classList.add("program-arrow-down");
                createDiv.classList.remove("program-arrow-up");
                createDiv.style.backgroundImage = "url('../Images/arrow-down.png')";
            }
            // When not clicked, show arrow down
            else {
                createDiv.classList.remove("program-arrow-down");
                createDiv.classList.add("program-arrow-up");
                createDiv.style.backgroundImage = "url('../Images/arrow-up.png')";
            }

        })

    }

    return createDiv
}


function createCityDivs(cities) {
    let cityContainer = document.createElement("div");
    cityContainer.classList.add("hidden-city-result");

    for (let city of cities) {
        //let cityDiv = document.createElement("div");
        //cityDiv.innerHTML = city.name
        //cityContainer.appendChild(cityDiv);
        createDiv("city", city, cityContainer);
    }

    return cityContainer
}

function createProgramDivs(locations) {
    let programContainer = document.createElement("div");
    programContainer.classList.add("hidden-program-result");

    for (let location of locations) {
        let locationDiv = document.createElement("div");
        locationDiv.innerHTML = program.name
        programContainer.appendChild(programDiv);
    }

    return programContainer
}

function getCitiesFromCountry(id) {
    let cities = CITIES.filter(city => city.countryID == id);
    return cities
}

function getInfoFromProgram(id) {
    let program = PROGRAMMES.filter(program => program.id == id);
    return program.name
}
//Direct code
addEventHandlers()
renderResults()