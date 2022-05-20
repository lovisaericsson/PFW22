'use strict'

//Result wrapper
let wrapper = document.getElementById('results')

//Search buttons
let countryBtn = document.getElementById('countries-btn')
let cityBtn = document.getElementById('cities-btn')
let programmeBtn = document.getElementById('courses-btn')

// Filter subject buttons
let filter = document.querySelector('.filterprogram')
let filterDropdown = document.querySelector('.filters-dropdown')
let filterBtn = document.querySelector('.filter-program-btn')
let designBtn = document.getElementById('designBtn')
let techBtn = document.getElementById('techBtn')
let mathBtn = document.getElementById('mathBtn')
let lawBtn = document.getElementById('lawBtn')
let filoBtn = document.getElementById('filoBtn')
let medicineBtn = document.getElementById('medicineBtn')
let sociologyBtn = document.getElementById('sociologyBtn')

//Filter level buttons
let bachelorsBtn = document.getElementById('bachelorsBtn')
let mastersBtn = document.getElementById('mastersBtn')
let doctorateBtn = document.getElementById('doctorateBtn')

//Adds event handlers for all buttons on Search page
function addEventHandlers () {
  // Event handlers for country, city, programme, filter buttons
  countryBtn.addEventListener('click', function () {
    countryBtn.classList.toggle('active')
    renderResults()
  })
  cityBtn.addEventListener('click', function () {
    cityBtn.classList.toggle('active')
    renderResults()
  })
  programmeBtn.addEventListener('click', function () {
    programmeBtn.classList.toggle('active')
    renderResults()
  })

  //Filter subject handlers
  filterBtn.addEventListener('click', function () {
    filterBtn.classList.toggle('active')
    renderResults()
  })

  designBtn.addEventListener('click', function () {
    designBtn.classList.toggle('active')
    renderResults()
  })

  techBtn.addEventListener('click', function () {
    techBtn.classList.toggle('active')
    renderResults()
  })

  mathBtn.addEventListener('click', function () {
    mathBtn.classList.toggle('active')
    renderResults()
  })

  lawBtn.addEventListener('click', function () {
    lawBtn.classList.toggle('active')
    renderResults()
  })

  filoBtn.addEventListener('click', function () {
    filoBtn.classList.toggle('active')
    renderResults()
  })

  medicineBtn.addEventListener('click', function () {
    medicineBtn.classList.toggle('active')
    renderResults()
  })

  sociologyBtn.addEventListener('click', function () {
    sociologyBtn.classList.toggle('active')
    renderResults()
  })

  // Filter level handlers
  bachelorsBtn.addEventListener('click', function () {
    bachelorsBtn.classList.toggle('active')
    renderResults()
  })

  mastersBtn.addEventListener('click', function () {
    mastersBtn.classList.toggle('active')
    renderResults()
  })

  doctorateBtn.addEventListener('click', function () {
    doctorateBtn.classList.toggle('active')
    renderResults()
  })
}

// Fetches and stores ALL countries in an array
function getAllCountries () {
  const allCountries = []

  for (let i = 0; i < COUNTRIES.length; i++) {
    allCountries.push(COUNTRIES[i])
  }

  return allCountries
}

// Fetches and stores ALL cities in an array
function getAllCities () {
  const allCities = []

  for (let i = 0; i < CITIES.length; i++) {
    allCities.push(CITIES[i])
  }

  return allCities
}

// Fetches and stores ALL programmes in an array
function getAllProgrammes () {
  const allProgrammes = []

  for (let i = 0; i < PROGRAMMES.length; i++) {
    allProgrammes.push(PROGRAMMES[i])
  }

  return allProgrammes
}

// Renders results, sorting it alphabetically, based on toggled options (yes/no). If none are toggled,
// all results will be displayed (cities, programmes, countries).
function renderResults () {
  let results = toggleOptions()
  sortAlphabetical(results)

  //Build the search result with divs, checking whether the div to be created
  // is a city, country or programme.
  wrapper.innerHTML = ''
  for (let j = 0; j < results.length; j++) {
    // Every five iterations, ads are rendered
    if (j != 0 && j % 5 == 0) {
      renderAdvertisement()
    }
    if ('languageID' in results[j]) {
      createDiv('country', results[j], wrapper)
    }
    if ('countryID' in results[j]) {
      createDiv('city', results[j], wrapper)
    }
    if ('universityID' in results[j]) {
      createDiv('program', results[j], wrapper)
    }
  }
}

// Renders a single ad
function renderAdvertisement () {
  let div = document.createElement('div')
  div.classList.add('ad')
  div.style.backgroundImage = `url("../Advertising-images/${randomizeAdNumber()}.png")`
  wrapper.appendChild(div)
}

// Randomize a number from 1-11
function randomizeAdNumber () {
  let nr = Math.floor(Math.random() * 11) + 1
  return nr
}

//Toggle results for each category (COUNTRIES, CITIES, PROGRAMMES)
function toggleOptions () {
  let results = []

  // If country is toggled, get all countries
  if (countryBtn.classList.contains('active') == true) {
    results = [...getAllCountries()]
  }

  // If city is toggled, get all cities
  if (cityBtn.classList.contains('active') == true) {
    results = [...results, ...getAllCities()]
  }

  // If programme is not toggled, or if cities/countries is toggled along with programme, get all programmes
  if (
    programmeBtn.classList.contains('active') == true &&
    (cityBtn.classList.contains('active') == true ||
      countryBtn.classList.contains('active') == true)
  ) {
    results = [...results, ...getAllProgrammes()]
  }

  // If ONLY programme is toggled...
  if (
    programmeBtn.classList.contains('active') == true &&
    cityBtn.classList.contains('active') == false &&
    countryBtn.classList.contains('active') == false
  ) {
    //...show programme filter (btn) bar (when clicked, drops down with filter options)
    filter.classList.remove('no-display')
    document.getElementById('results').style.marginTop = '155px'

    // If filter btn is untoggled, dont show filters
    if (filterBtn.classList.contains('active') == false) {
      filterDropdown.classList.add('no-display')
      filterBtn.style.backgroundImage = "url('../Images/arrow-down.png')"
    }
    // If filter btn is toggled, show filters
    if (filterBtn.classList.contains('active') == true) {
      filterDropdown.classList.remove('no-display')
      filterBtn.style.backgroundImage = "url('../Images/arrow-up-blue.png')"
    }

    // Fetches all programmes...
    results = [...results, ...getAllProgrammes()]
    // ...and filters the programs in turn
    results = [...filterDesign(results)]
    results = [...filterTech(results)]
    results = [...filterMath(results)]
    results = [...filterLaw(results)]
    results = [...filterFilo(results)]
    results = [...filterMedicine(results)]
    results = [...filterSociology(results)]

    // Handling for filtering on LEVEL (bachelor, master, doctorate) through each button
    if (
      doctorateBtn.classList.contains('active') == true ||
      mastersBtn.classList.contains('active') == true ||
      bachelorsBtn.classList.contains('active') == true
    ) {
      results = [...filterBacherlors(results)]
      results = [...filterMasters(results)]
      results = [...filterDoctorate(results)]
    }

    // If no subject filters are selected, display all programmes
    if (results.length == 0) {
      results = [...getAllProgrammes()]

      // check if LEVEL buttons are selected
      if (
        doctorateBtn.classList.contains('active') == true ||
        mastersBtn.classList.contains('active') == true ||
        bachelorsBtn.classList.contains('active') == true
      ) {
        results = [...filterBacherlors(results)]
        results = [...filterMasters(results)]
        results = [...filterDoctorate(results)]
      }
    }
  }

  // If programme is not toggled, or if cities/countries is toggled along with programme, dont show filters
  if (
    programmeBtn.classList.contains('active') == false ||
    (programmeBtn.classList.contains('active') == true &&
      (cityBtn.classList.contains('active') == true ||
        countryBtn.classList.contains('active') == true))
  ) {
    document.getElementById('results').style.marginTop = '120px'
    filter.classList.add('no-display')
  }

  // If nothing is toggled, show all results (countries, cities, programmes)
  if (results.length == 0) {
    results = [...getAllCountries(), ...getAllCities(), ...getAllProgrammes()]
  }

  // Calls function to switch colors when buttons are toggled
  toggleColors()

  // if search bar/input field is not empty, filter according to input value
  if (getInputValue() !== 0) {
    results = results.filter(result =>
      result.name.toLowerCase().includes(getInputValue())
    )
  }

  return results
}

// Handling for colors when toggling buttons
function toggleColors () {
  // Colors for city, country, program, programfilter
  let mainButtons = [countryBtn, cityBtn, programmeBtn, filterBtn]
  for (let i = 0; i < mainButtons.length; i++) {
    // If active/toggled
    if (mainButtons[i].classList.contains('active') == true) {
      mainButtons[i].style.backgroundColor = 'white'
      mainButtons[i].style.color = '#9aaec2'
    } // If inactive/untoggled
    else if (mainButtons[i].classList.contains('active') == false) {
      mainButtons[i].style.backgroundColor = '#9aaec2'
      mainButtons[i].style.color = 'white'
    }
  }
  // Colors for filter subject and level
  let filterButtons = [
    designBtn,
    techBtn,
    mathBtn,
    lawBtn,
    filoBtn,
    medicineBtn,
    sociologyBtn,
    bachelorsBtn,
    mastersBtn,
    doctorateBtn
  ]

  for (let j = 0; j < filterButtons.length; j++) {
    // If active/toggled
    if (filterButtons[j].classList.contains('active') == true) {
      filterButtons[j].style.backgroundColor = '#b7c9da'
      filterButtons[j].style.color = 'white'
    } // If inactive/untoggled
    else if (filterButtons[j].classList.contains('active') == false) {
      filterButtons[j].style.backgroundColor = '#9aaec2'
      filterButtons[j].style.color = 'white'
    }
  }
}

// Handling for program subject filtering
function filterDesign (results) {
  // If button is not toggled, the belonging subject results will not show
  if (designBtn.classList.contains('active') == false) {
    results = results.filter(result => result.subjectID !== 6)
  }
  return results
}
function filterTech (results) {
  // If button is not toggled, the belonging subject results will not show
  if (techBtn.classList.contains('active') == false) {
    results = results.filter(result => result.subjectID !== 1)
  }
  return results
}
function filterMath (results) {
  // If button is not toggled, the belonging subject results will not show
  if (mathBtn.classList.contains('active') == false) {
    results = results.filter(result => result.subjectID !== 0)
  }
  return results
}
function filterLaw (results) {
  // If button is not toggled, the belonging subject results will not show
  if (lawBtn.classList.contains('active') == false) {
    results = results.filter(result => result.subjectID !== 2)
  }
  return results
}
function filterFilo (results) {
  // If button is not toggled, the belonging subject results will not show
  if (filoBtn.classList.contains('active') == false) {
    results = results.filter(result => result.subjectID !== 5)
  }
  return results
}
function filterMedicine (results) {
  // If button is not toggled, the belonging subject results will not show
  if (medicineBtn.classList.contains('active') == false) {
    results = results.filter(result => result.subjectID !== 3)
  }
  return results
}
function filterSociology (results) {
  // If button is not toggled, the belonging subject results will not show
  if (sociologyBtn.classList.contains('active') == false) {
    results = results.filter(result => result.subjectID !== 4)
  }
  return results
}

// Handling for program level filtering
function filterBacherlors (results) {
  // If button is not toggled, the belonging level results will not show
  if (bachelorsBtn.classList.contains('active') == false) {
    results = results.filter(result => result.level !== 0)
  }
  return results
}
function filterMasters (results) {
  // If button is not toggled, the belonging level results will not show
  if (mastersBtn.classList.contains('active') == false) {
    results = results.filter(result => result.level !== 1)
  }
  return results
}
function filterDoctorate (results) {
  // If button is not toggled, the belonging level results will not show
  if (doctorateBtn.classList.contains('active') == false) {
    results = results.filter(result => result.level !== 2)
  }
  return results
}

// Get input value from search bar
function getInputValue () {
  // Not key sensitive
  let inputValue = document.getElementById('inputfield').value.toLowerCase()

  return inputValue
}

// Sorts the results alphabetically
function sortAlphabetical (result) {
  result.sort(function (a, b) {
    if (a.name > b.name) {
      return 1
    }
    if (a.name < b.name) {
      return -1
    }
    return 0
  })
  return result
}

// Create each result div, taking parameters for:
// a) type (country, city, programme)
// b) result
// c) wrapper
function createDiv (typeDiv, result, wrapper) {
  let createDiv = document.createElement('div')
  createDiv.classList.add('box')
  wrapper.appendChild(createDiv)

  // If result = type: country, create div for country result
  if (typeDiv == 'country') {
    createDiv.innerHTML = result.name
    // Fetch cities connected to country result...
    let cities = getCitiesFromCountry(result.id)
    // ...and create a div for them
    let divWithCities = createCityDivs(cities)

    // "initializes" arrow (up if country = clicked, down if country = not clicked)
    createDiv.classList.add('country-arrow-down')
    createDiv.style.backgroundImage = "url('../Images/arrow-down.png')"
    createDiv.appendChild(divWithCities)

    // Event listener for country (result) div
    createDiv.addEventListener('click', function () {
      divWithCities.classList.toggle('city-result')
      // When clicked, show arrow up and scroll into view (center)
      if (divWithCities.classList.contains('city-result')) {
        createDiv.classList.add('country-arrow-up')
        createDiv.scrollIntoView({ block: 'center' })
        createDiv.classList.remove('country-arrow-down')
        createDiv.style.backgroundImage = "url('../Images/arrow-up.png')"
      }
      // When not clicked, show arrow down
      else {
        createDiv.classList.remove('country-arrow-up')
        createDiv.classList.add('country-arrow-down')
        createDiv.style.backgroundImage = "url('../Images/arrow-down.png')"
      }
    })
  }

  // If result = type: city, create div for city result
  if (typeDiv == 'city') {
    createDiv.classList.add('city-arrow-out')
    createDiv.style.backgroundImage = "url('../Images/arrow-right.png')"
    createDiv.innerHTML = result.name
    wrapper.appendChild(createDiv)

    // Fetch HTML element for popUp and add support (span) for closing the popUp when opened
    let popUp = document.getElementById('popup-City')
    let popUpcontent = document.getElementsByClassName('popup-content')
    let span = document.getElementsByClassName('close')[0]

    // Event listener: when a city is clicked, targeted popUp will be displayed on top of results
    createDiv.addEventListener('click', function () {
      popUp.style.display = 'block'
      // Fill popUp with result city's information, such as picture, name, average rating etc.
      popUpcontent[0].innerHTML = `
            <img src = "../Images/${getCityPicturePath(result)}"</img> 
            <h2> ${result.name.toUpperCase()}</h2> 
            <p>${getCityDescription(result)}</p>
            <br>
            <div><h3>OUT: ${createStars(getOutRating(result))}(${getOutRating(
        result
      )}${checkIfValueNaN(getOutRating(result))})</h3></div> 
            <div><h3>FOOD: ${createStars(
              getFoodRating(result)
            )}(${getFoodRating(result)}${checkIfValueNaN(
        getFoodRating(result)
      )})</h3></div> 
            <div><h3>HOUSING: ${createStars(
              getAccomodationRating(result)
            )}(${getAccomodationRating(result)}${checkIfValueNaN(
        getAccomodationRating(result)
      )})</h3></div> 
            <br>
            <div class = "entertainment-city"></div>
            <div class = "programmes-city"></div>  
            `

      // Calls functions to create connected programmes drop-downs and entertainment drop-downs
      entertainmentCreateDropdown(result)
      programmeCreateDropdown(result)
    })

    // Enables "close" (X) of the popUp
    span.addEventListener('click', function () {
      popUp.style.display = 'none'
    })

    // When the user clicks anywhere outside of the popup, close it
    window.onclick = function (event) {
      if (event.target == popUp) {
        popUp.style.display = 'none'
      }
    }
  }

  // If result = type: programme, create div for programme result
  if (typeDiv == 'program') {
    // Fetch programme result's location, subject and level
    let location = getProgramLocation(result)
    let subject = getProgramSubject(result)
    let level = getProgramLevel(result)

    // On each programme result, show arrow down icon as default (unclicked)
    createDiv.classList.add('program-arrow-down')
    createDiv.style.backgroundImage = "url('../Images/arrow-down.png')"

    // Top tags within result (subject, level)
    let topTags = document.createElement('div')
    topTags.innerHTML = `<p>${subject[0].toUpperCase()}</p> <p>${level[0].toUpperCase()}</p>`
    createDiv.appendChild(topTags)
    topTags.classList.add('topTag')

    // Programme name
    let programName = document.createElement('div')
    programName.innerHTML = result.name
    createDiv.appendChild(programName)

    // Bottom programme (university) location tag
    let bottomTag = document.createElement('div')
    bottomTag.innerHTML = `<img src="../Images/Icons/marker.png"> ${location}`
    createDiv.appendChild(bottomTag)
    bottomTag.classList.add('bottomTag')

    // Dropdown of program: displaying ratings, level, country, city, university & language
    let programDropDown = document.createElement('div')
    programDropDown.classList.add('program-dropdown')
    programDropDown.innerHTML = `<h2>${result.name.toUpperCase()}</h2>
        <div><h3>TEACHERS:</h3><div>${createStars(
          getTeachersRatingAverage(result)
        )}(${getTeachersRatingAverage(result)}/5)</div></div>
        <div><h3>STUDENTS:</h3><div>${createStars(
          getStudentsRatingAverage(result)
        )}(${getStudentsRatingAverage(result)}/5)</div></div>
        <div><h3>COURSES:</h3> <div>${createStars(
          getProgramRatingAverage(result)
        )}(${getProgramRatingAverage(result)}/5)</div></div>
        <div><h3>LEVEL: ${getProgramLevel(result)}</h3></div>
        <br>
        <div><h3>COUNTRY: ${location[0].split(',').pop()}</h3></div>
        <div><h3>CITY: ${location[0].split(',')[0]}</h3></div>
        <div><h3>LANGUAGE: ${getProgramLanguage(result)}</h3></div>
        <div><h3>UNIVERSITY: ${getProgramUniversity(result)}</h3></div>
        `

    // When programme drop-down is open, show arrow up.
    programDropDown.classList.add('no-display')
    createDiv.appendChild(programDropDown)
    createDiv.addEventListener('click', function () {
      programDropDown.classList.toggle('no-display')
      if (programDropDown.classList.contains('no-display')) {
        createDiv.classList.add('program-arrow-down')
        createDiv.classList.remove('program-arrow-up')
        createDiv.style.backgroundImage = "url('../Images/arrow-down.png')"
      }
      // When not clicked, show arrow down
      else {
        createDiv.scrollIntoView({ block: 'center' })
        createDiv.classList.remove('program-arrow-down')
        createDiv.classList.add('program-arrow-up')
        createDiv.style.backgroundImage = "url('../Images/arrow-up.png')"
      }
    })
  }

  return createDiv
}
//Creates city divs for country-dropdown
function createCityDivs (cities) {
  let cityContainer = document.createElement('div')
  cityContainer.classList.add('hidden-city-result')

  for (let city of cities) {
    createDiv('city', city, cityContainer)
  }

  return cityContainer
}
//Fetches cities based on countryID
function getCitiesFromCountry (id) {
  let cities = CITIES.filter(city => city.countryID == id)
  return cities
}
//Fetches info based on programid
function getInfoFromProgram (id) {
  let program = PROGRAMMES.filter(program => program.id == id)
  return program.name
}
// Creates entertainment dropdown in city-popup
function entertainmentCreateDropdown (result) {
  let entertainmentDropdown = document.querySelector('.entertainment-city')

  // Create entertainment div, add arrow, fill with 2 div and append dropdown
  let createDiv = document.createElement('div')
  createDiv.classList.add('city-dropdown-arrow-down')
  createDiv.style.backgroundImage = "url('../Images/arrow-down.png')"
  createDiv.classList.add('box-city')
  createDiv.innerHTML = `
    <div class = "entertainment-name"></div>
    <div class = "entertainment-info"></div>`
  entertainmentDropdown.appendChild(createDiv)

  // Fill entertainment dropdown
  let entertainmentName = document.querySelector('.entertainment-name')
  let entertainmentInfo = document.querySelector('.entertainment-info')
  entertainmentName.innerHTML = 'NÖJE'
  entertainmentInfo.innerHTML = `<p> ${getCityEntertainment(result)}</p>`
  entertainmentInfo.classList.add('no-display')

  // Eventlistner on click
  createDiv.addEventListener('click', function () {
    // Toggle display on/off
    entertainmentInfo.classList.toggle('no-display')
    // When not clicked, show arrow down
    if (entertainmentInfo.classList.contains('no-display')) {
      createDiv.classList.add('city-dropdown-arrow-down')
      createDiv.classList.remove('city-dropdown-arrow-up')
      createDiv.style.backgroundImage = "url('../Images/arrow-down.png')"
    }
    // When clicked, show arrow up
    else {
      createDiv.classList.remove('city-dropdown-arrow-down')
      createDiv.classList.add('city-dropdown-arrow-up')
      createDiv.style.backgroundImage = "url('../Images/arrow-up.png')"
    }
  })
}

// Creates program dropdown in city-popup for each subject
function programmeCreateDropdown (result) {
  // Loops through fields
  for (let j = 0; j < FIELDS.length; j++) {
    let programmeResult
    let subjectName

    // If the fields name is X, store the corresponding functions result in
    // programme result and fill subject name with corresponding subject name
    if (FIELDS[j].name == 'Matematik') {
      programmeResult = getMathPrograms(result)
      subjectName = 'Matematik Program'.toUpperCase()
    }
    if (FIELDS[j].name == 'Teknik') {
      programmeResult = getTechnologyPrograms(result)
      subjectName = 'Teknik Program'.toUpperCase()
    }
    if (FIELDS[j].name == 'Juridik') {
      programmeResult = getLawPrograms(result)
      subjectName = 'Juridik Program'.toUpperCase()
    }
    if (FIELDS[j].name == 'Medicin') {
      programmeResult = getMedicinePrograms(result)
      subjectName = 'Medicin Program'.toUpperCase()
    }
    if (FIELDS[j].name == 'Sociologi') {
      programmeResult = getSociologyPrograms(result)
      subjectName = 'Sociologi Program'.toUpperCase()
    }
    if (FIELDS[j].name == 'Filosofi') {
      programmeResult = getPhilosophyPrograms(result)
      subjectName = 'Filosofi Program'.toUpperCase()
    }
    if (FIELDS[j].name == 'Design') {
      programmeResult = getDesignPrograms(result)
      subjectName = 'Design Program'.toUpperCase()
    }

    // If the city has at least one program within the given field/subject...
    if (programmeResult.length > 0) {
      let programmeDropdown = document.querySelector('.programmes-city')

      // ...create a div for each subject
      let createDiv = document.createElement('div')
      createDiv.innerHTML = `${subjectName}`
      createDiv.classList.add('box-city')
      createDiv.classList.add('city-dropdown-arrow-down')
      createDiv.style.backgroundImage = "url('../Images/arrow-down.png')"

      // Loops through programmeResult
      for (let i = 0; i < programmeResult.length; i++) {
        // Creates dropdown for each of its programs, fills with info and appends
        let location = getProgramLocation(programmeResult[i])
        let programDropDown = document.createElement('div')
        programDropDown.classList.add('program-dropdown')
        programDropDown.innerHTML = `<h2>${programmeResult[
          i
        ].name.toUpperCase()}</h2>
                <div><h3>TEACHERS:</h3><div>${createStars(
                  getTeachersRatingAverage(result)
                )}(${getTeachersRatingAverage(result)}/5)</div></div>
                <div><h3>STUDENTS:</h3><div>${createStars(
                  getStudentsRatingAverage(result)
                )}(${getStudentsRatingAverage(result)}/5)</div></div>
                <div><h3>COURSES:</h3> <div>${createStars(
                  getProgramRatingAverage(result)
                )}(${getProgramRatingAverage(result)}/5)</div></div>
                <div><h3>LEVEL: ${getProgramLevel(
                  programmeResult[i]
                )}</h3></div>
                <br>
                <div><h3>COUNTRY: ${location[0].split(',').pop()}</h3></div>
                <div><h3>CITY: ${location[0].split(',')[0]}</h3></div>
                <div><h3>LANGUAGE: ${getProgramLanguage(
                  programmeResult[i]
                )}</h3></div>
                <div><h3>UNIVERSITY: ${getProgramUniversity(
                  programmeResult[i]
                )}</h3></div>
                `
        programDropDown.classList.add('no-display')
        createDiv.appendChild(programDropDown)

        // Eventlistner on click
        createDiv.addEventListener('click', function () {
          // Toggle display on/off
          programDropDown.classList.toggle('no-display')
          // When not clicked, show arrow down
          if (programDropDown.classList.contains('no-display')) {
            createDiv.classList.add('city-dropdown-arrow-down')
            createDiv.classList.remove('city-dropdown-arrow-up')
            createDiv.style.backgroundImage = "url('../Images/arrow-down.png')"
          }
          // When clicked, show arrow up
          else {
            createDiv.classList.remove('city-dropdown-arrow-down')
            createDiv.classList.add('city-dropdown-arrow-up')
            createDiv.style.backgroundImage = "url('../Images/arrow-up.png')"
          }
        })
      }
      // Appends dropdown to subject div
      programmeDropdown.appendChild(createDiv)
    }
  }
}
//Direct code
addEventHandlers()
renderResults()
