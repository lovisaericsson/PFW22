"use strict";

//Search function

let countryBtn = document.getElementById("countries-btn");
let cityBtn = document.getElementById("cities-btn");
let courseBtn = document.getElementById("courses-btn");

function addEventHandlers () {

    countryBtn.addEventListener("click", function () {
        countryBtn.classList.toggle("active");
    })

    cityBtn.addEventListener("click", function () {
        cityBtn.classList.toggle("active");
    })

    courseBtn.addEventListener("click", function () {
        courseBtn.classList.toggle("active");
    })
}

function getResults () {

}

//Untoggled fetch results for each category (COUNTRIES, CITIES, PROGRAMMES)

function unToggled () {
    const DATABASE = [];
 
    DATABASE.push(COUNTRIES, CITIES, PROGRAMMES)
 
    return DATABASE;
 }

function getAllCountries () {

    const allCountries = [];

    for (let i = 0 ; i < COUNTRIES.length ; i++) {
        allCountries.push(COUNTRIES[i]);
    }

    return allCountries;
}

function getAllCities () {

    const allCities = [];

    for (let i = 0 ; i < CITIES.length ; i++) {
        allCities.push(CITIES[i]);
    }

    return allCities;
}

function getAllProgrammes () {

    const allProgrammes = [];

    for (let i = 0 ; i < PROGRAMMES.length ; i++) {
        allProgrammes.push(PROGRAMMES[i]);
    }

    return allProgrammes;
}

//Toggle results for each category (COUNTRIES, CITIES, PROGRAMMES)

function toggleOptions () {
    
    let results = [];

    if (countryBtn.classList.contains("active") == true) {
        results.push(getAllCountries());
    } 

    return results;
}

//Direct code

addEventHandlers()