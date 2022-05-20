"use strict";

// Get the program level of each program
function getProgramLevel(result) {

    let programLevel = [];

    if (result.level == 0) { // if level = BACHELOR
        programLevel.push(LEVELS[0])
    }

    if (result.level == 1) { // if level = MASTER
        programLevel.push(LEVELS[1])
    }

    if (result.level == 2) { // if level = DOCTORATE
        programLevel.push(LEVELS[2])
    };

    return programLevel;
}

// Function to fetch each programme's location (returns string: "City name, Country name")
function getProgramLocation(result) {

    let programCity = [];
    let programCountry = [];
    let programLocation = [];

    for (let university of UNIVERSITIES) {
        if (result.universityID == university.id) {
            for (let city of CITIES) {
                if (university.cityID == city.id) {
                    programCity.push(city.name)
                }
            }
        }
    }

    for (let university of UNIVERSITIES) {
        if (result.universityID == university.id) {
            for (let city of CITIES) {
                if (university.cityID == city.id) {
                    for (let country of COUNTRIES) {
                        if (city.countryID == country.id) {
                            programCountry.push(country.name);
                        }
                    }
                }
            }
        }
    }

    programLocation.push(programCity + ", " + programCountry)

    return programLocation;
}

// Caculate and return the average rating (number) of the COURSES in the programme
function getProgramRatingAverage(result) {

    let ratedProgram = [];

    for (let comment of COMMENTS_PROGRAMME) {

        if (result.id == comment.programmeID) {

            ratedProgram.push(comment.stars.courses);

        }
    }

    let averageScore = ratedProgram.reduce((a, b) => a + b, 0) / ratedProgram.length;

    // Returns the rating number rounded up to nearest decimal (number.decimal)
    return Math.round(averageScore * 10) / 10;

}

// Caculate and return the average rating (number) of the TEACHERS in the programme
function getTeachersRatingAverage(result) {

    let ratedTeacher = []

    for (let comment of COMMENTS_PROGRAMME) {

        if (result.id == comment.programmeID) {

            ratedTeacher.push(comment.stars.teachers);

        }
    }

    let teacherAverageScore = ratedTeacher.reduce((a, b) => a + b, 0) / ratedTeacher.length;

    // Returns the rating number rounded up to nearest decimal (number.decimal)
    return Math.round(teacherAverageScore * 10) / 10;

}

// Caculate and return the average rating (number) of the STUDENTS in the programme
function getStudentsRatingAverage(result) {

    let ratedStudent = []

    for (let comment of COMMENTS_PROGRAMME) {

        if (result.id == comment.programmeID) {

            ratedStudent.push(comment.stars.students);

        }
    }

    let studentAverageScore = ratedStudent.reduce((a, b) => a + b, 0) / ratedStudent.length;

    // Returns the rating number rounded up to nearest decimal (number.decimal)
    return Math.round(studentAverageScore * 10) / 10;

}

// Fetches and returns the programme's (result) subject (FIELD)
function getProgramSubject(result) {

    let programSubject = [];

    for (let field of FIELDS) {
        if (result.subjectID == field.id) {
            programSubject.push(field.name);
        }
    }

    return programSubject;
}

// Fetches and returns the programme's (result) LANGUAGE 
function getProgramLanguage(result) {

    let programLanguage = "";

    for (let program of PROGRAMMES) {

        if (result.id == program.id) {

            for (let language of LANGUAGES) {

                if (result.language == language.id) {
                    programLanguage += language.name
                }
            }
        }
    }

    return programLanguage;
}

// Fetches and returns the programme's (result) UNIVERSITY NAME 
function getProgramUniversity(result) {

    let programUniversity = "";

    for (let program of PROGRAMMES) {

        if (result.id == program.id) {

            for (let university of UNIVERSITIES) {

                if (result.universityID == university.id) {

                    programUniversity += university.name;
                }
            }
        }
    }

    return programUniversity;
}

// Creates stars – parameter used to calculate iterations
function createStars(number) {
    let stars = ``;
    for (let i = 0; i < Math.round(number); i++) {
        let star = `<img class="star-img" src="../Images/Icons/star.png"></img>`;
        stars += star;
    }
    return stars;
}