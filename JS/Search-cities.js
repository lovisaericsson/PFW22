//Calculates the average rating of OUT in the result (city) based on comments from COMMENTS_CITY
function getOutRating (result) {
    
    let cityOutRating = [];

    for (let comment of COMMENTS_CITY) {
        
        if (result.id == comment.cityID) {

           cityOutRating.push(comment.stars.out);
            
        }
    }

    let averageOutRating = cityOutRating.reduce((a, b) => a + b, 0) / cityOutRating.length;

    return Math.round(averageOutRating * 10) / 10;

 }

 //Calculates the average rating of ACCOMODATION in the result (city) based on comments from COMMENTS_CITY
 function getAccomodationRating (result) {

    let cityAccomodationRating = [];

    for (let comment of COMMENTS_CITY) {
        
        if (result.id == comment.cityID) {

            cityAccomodationRating.push(comment.stars.accomodation);
            
        }
    }

    let averageAccomodationRating = cityAccomodationRating.reduce((a, b) => a + b, 0) / cityAccomodationRating.length;

    return Math.round(averageAccomodationRating * 10) / 10;

 }

 //Calculates the average rating of FOOD in the result (city) based on comments from COMMENTS_CITY
 function getFoodRating (result) {

    let cityFoodRating = [];

    for (let comment of COMMENTS_CITY) {
        
        if (result.id == comment.cityID) {

            cityFoodRating.push(comment.stars.food);
            
        }
    }

    let averageFoodRating = cityFoodRating.reduce((a, b) => a + b, 0) / cityFoodRating.length;

    return Math.round(averageFoodRating * 10) / 10;

 }

 //Fetches the city name

 function getCityName (result) {

    let cityName = ""

    for (let city of CITIES) {

        if (result.id == city.id) {

            cityName += city.name;

        }
    }

    return cityName;

 }

 //Fetches the city description ("about")

 function getCityDescription (result) {

    let cityDescription = ""

    for (let city of CITIES) {

        if (result.id == city.id) {

            cityDescription += city.text;

        }
    }

    return cityDescription;

 }

 //Fetches each city's (result) entertainment places and returns an array with them
 function getCityEntertainment (result) {

        let cityEntertainment = [];

        for (let city of CITIES) {
            
            if (result.id == city.id) {

                for (let entertainment of ENTERTAINMENT_PLACES) {

                    if (result.id == entertainment.cityID) {
                        
                        cityEntertainment.push(entertainment.name);
                    }
                }
            }
        }

        return cityEntertainment;
 }

 function getCityPicturePath (result) {

    let photoPath = "";

    for (country of COUNTRIES) {

        if (result.countryID == country.id) {

            for (image of country.imagesNormal) {
                
                if (image.includes("normal_2") == true) {

                    photoPath += image;

                }
            }
        }
    }

    return photoPath;
 }

 //Fetches each city's (result) math programmes and returns an array with them
 function getMathPrograms (result) {

    let mathProgramsInCity = [];

    for (let university of UNIVERSITIES) {
        if (result.id == university.cityID) {
            
            for (program of PROGRAMMES) {

                if (university.id == program.universityID && program.subjectID == 0) {
                    
                    mathProgramsInCity.push(program)
                }
            }
        }
    }

    return mathProgramsInCity;
 }

  //Fetches each city's (result) technology programmes and returns an array with them
 function getTechnologyPrograms (result) {

    let technologyProgramsInCity = [];

    for (let university of UNIVERSITIES) {
        if (result.id == university.cityID) {
            
            for (program of PROGRAMMES) {

                if (university.id == program.universityID && program.subjectID == 1) {
                    
                    technologyProgramsInCity.push(program)
                }
            }
        }
    }

    return technologyProgramsInCity;
 }

  //Fetches each city's (result) law programmes and returns an array with them
 function getLawPrograms (result) {

    let lawProgramsInCity = [];

    for (let university of UNIVERSITIES) {
        if (result.id == university.cityID) {
            
            for (program of PROGRAMMES) {

                if (university.id == program.universityID && program.subjectID == 2) {
                    
                    lawProgramsInCity.push(program)
                }
            }
        }
    }

    return lawProgramsInCity;
 }

  //Fetches each city's (result) medicine programmes and returns an array with them
 function getMedicinePrograms (result) {

    let medicineProgramsInCity = [];

    for (let university of UNIVERSITIES) {
        if (result.id == university.cityID) {
            
            for (program of PROGRAMMES) {

                if (university.id == program.universityID && program.subjectID == 3) {
                    
                    medicineProgramsInCity.push(program)
                }
            }
        }
    }

    return medicineProgramsInCity;
 }

  //Fetches each city's (result) sociology programmes and returns an array with them
 function getSociologyPrograms (result) {

    let sociologyProgramsInCity = [];

    for (let university of UNIVERSITIES) {
        if (result.id == university.cityID) {
            
            for (program of PROGRAMMES) {

                if (university.id == program.universityID && program.subjectID == 4) {
                    
                    sociologyProgramsInCity.push(program)
                }
            }
        }
    }

    return sociologyProgramsInCity;
 }

 //Fetches each city's (result) philosophy programmes and returns an array with them
 function getPhilosophyPrograms (result) {

    let philosophyProgramsInCity = [];

    for (let university of UNIVERSITIES) {
        if (result.id == university.cityID) {
            
            for (program of PROGRAMMES) {

                if (university.id == program.universityID && program.subjectID == 5) {
                    
                    philosophyProgramsInCity.push(program)
                }
            }
        }
    }

    return philosophyProgramsInCity;
 }

  //Fetches each city's (result) design programmes and returns an array with them
 function getDesignPrograms (result) {

    let designProgramsInCity = [];

    for (let university of UNIVERSITIES) {
        if (result.id == university.cityID) {
            
            for (program of PROGRAMMES) {

                if (university.id == program.universityID && program.subjectID == 6) {
                    
                    designProgramsInCity.push(program)
                }
            }
        }
    }

    return designProgramsInCity;
 }