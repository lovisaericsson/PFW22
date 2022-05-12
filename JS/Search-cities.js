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