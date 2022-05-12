"use strict";

//Get the program level of each program, VERY general - can be substituted with "result" parameter and be used instead 
//of for loop and have result.level instead of program.level

function getProgramLevel (result) {

    let programLevel = [];

        if (result.level == 0) {
            programLevel.push(LEVELS[0])
        }

        if (result.level == 1) {
            programLevel.push(LEVELS[1])
        }

        if (result.level == 2) {
            programLevel.push(LEVELS[2])
        };

    return programLevel;
}

function getProgramLocation (result) {

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

function getProgramRatingAverage (result) {

    let ratedProgram = [];

    for (let comment of COMMENTS_PROGRAMME) {
        
        if (result.id == comment.programmeID) {

           ratedProgram.push(comment.stars.courses);
            
        }
    }

    let averageScore = ratedProgram.reduce((a, b) => a + b, 0) / ratedProgram.length;

    return Math.round(averageScore * 10) / 10;

}

function getTeachersRatingAverage (result) {

    let ratedTeacher = []

    for (let comment of COMMENTS_PROGRAMME) {
        
        if (result.id == comment.programmeID) {

           ratedTeacher.push(comment.stars.teachers);
            
        }
    }

    let teacherAverageScore = ratedTeacher.reduce((a, b) => a + b, 0) / ratedTeacher.length;

    return Math.round(teacherAverageScore * 10) / 10;

}

function getStudentsRatingAverage(result) {

    let ratedStudent = []

    for (let comment of COMMENTS_PROGRAMME) {
        
        if (result.id == comment.programmeID) {

            ratedStudent.push(comment.stars.students);
            
        }
    }

    let studentAverageScore = ratedStudent.reduce((a, b) => a + b, 0) / ratedStudent.length;

    return Math.round(studentAverageScore * 10) / 10;

}

function getProgramSubject (result) {

    let programSubject = [];

    for (let field of FIELDS) {
        if (result.subjectID == field.id) {
            programSubject.push(field.name);
        }
    }

    return programSubject;
}