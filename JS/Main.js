"use strict";

//Search function

let countryBtn = document.getElementById("countries-btn");
let cityBtn = document.getElementById("cities-btn");
let programmeBtn = document.getElementById("courses-btn");

// Event handlers for country, city, programme buttons
function addEventHandlers() {

    countryBtn.addEventListener("click", function () {
        countryBtn.classList.toggle("active");
    })

    cityBtn.addEventListener("click", function () {
        cityBtn.classList.toggle("active");
    })

    programmeBtn.addEventListener("click", function () {
        programmeBtn.classList.toggle("active");
    })
}

function getResults() {

}

//Untoggled fetch results for each category (COUNTRIES, CITIES, PROGRAMMES)

function unToggled() {
    const DATABASE = [];

    DATABASE.push(COUNTRIES, CITIES, PROGRAMMES)

    return DATABASE;
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

//Toggle results for each category (COUNTRIES, CITIES, PROGRAMMES)
function toggleOptions() {

    let results = [];

    if (countryBtn.classList.contains("active") == true) {
        results = [...getAllCountries()]
    }

    if (cityBtn.classList.contains("active") == true) {
        results = [...results, ...getAllCities()]
    }

    if (programmeBtn.classList.contains("active") == true) {
        results = [...results, ...getAllProgrammes()]
    }

    if (results.length == 0) {
        results = [...getAllCountries(), ...getAllCities(), ...getAllProgrammes()]
    }

    return results;
}

//Direct code

addEventHandlers()