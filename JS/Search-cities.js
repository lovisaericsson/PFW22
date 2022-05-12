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