'use strict'

//Get the program level of each program, VERY general - can be substituted with "result" parameter and be used instead
//of for loop and have result.level instead of program.level

function getProgramLevel (result) {
  let programLevel = []

  if (result.level == 0) {
    programLevel.push(LEVELS[0])
  }

  if (result.level == 1) {
    programLevel.push(LEVELS[1])
  }

  if (result.level == 2) {
    programLevel.push(LEVELS[2])
  }

  return programLevel
}
// Fetches programe location based on result
function getProgramLocation (result) {
  let programCity = []
  let programCountry = []
  let programLocation = []
  //Fetches city name
  for (let university of UNIVERSITIES) {
    if (result.universityID == university.id) {
      for (let city of CITIES) {
        if (university.cityID == city.id) {
          programCity.push(city.name)
        }
      }
    }
  }
  //Fetches country name
  for (let university of UNIVERSITIES) {
    if (result.universityID == university.id) {
      for (let city of CITIES) {
        if (university.cityID == city.id) {
          for (let country of COUNTRIES) {
            if (city.countryID == country.id) {
              programCountry.push(country.name)
            }
          }
        }
      }
    }
  }
  //Concat city name with country name separated with ","
  programLocation.push(programCity + ', ' + programCountry)

  return programLocation
}
//Fetches comments rating for courses
function getProgramRatingAverage (result) {
  let ratedProgram = []

  for (let comment of COMMENTS_PROGRAMME) {
    if (result.id == comment.programmeID) {
      ratedProgram.push(comment.stars.courses)
    }
  }
  //Sums up array
  let averageScore =
    ratedProgram.reduce((a, b) => a + b, 0) / ratedProgram.length
  //Returns averageScore with only one decimal
  return Math.round(averageScore * 10) / 10
}
//Fetches comments rating for teachers

function getTeachersRatingAverage (result) {
  let ratedTeacher = []

  for (let comment of COMMENTS_PROGRAMME) {
    if (result.id == comment.programmeID) {
      ratedTeacher.push(comment.stars.teachers)
    }
  }
  //Sums up array
  let teacherAverageScore =
    ratedTeacher.reduce((a, b) => a + b, 0) / ratedTeacher.length
  //Returns averageScore with only one decimal
  return Math.round(teacherAverageScore * 10) / 10
}
//Fetches comments rating for students

function getStudentsRatingAverage (result) {
  let ratedStudent = []

  for (let comment of COMMENTS_PROGRAMME) {
    if (result.id == comment.programmeID) {
      ratedStudent.push(comment.stars.students)
    }
  }
  //Sums up array
  let studentAverageScore =
    ratedStudent.reduce((a, b) => a + b, 0) / ratedStudent.length
  //Returns averageScore with only one decimal
  return Math.round(studentAverageScore * 10) / 10
}
//Fetches program subject
function getProgramSubject (result) {
  let programSubject = []

  for (let field of FIELDS) {
    if (result.subjectID == field.id) {
      programSubject.push(field.name)
    }
  }

  return programSubject
}
//Fetches language subject
function getProgramLanguage (result) {
  let programLanguage = ''

  for (let program of PROGRAMMES) {
    if (result.id == program.id) {
      for (let language of LANGUAGES) {
        if (result.language == language.id) {
          programLanguage += language.name
        }
      }
    }
  }

  return programLanguage
}
//Fetches university subject
function getProgramUniversity (result) {
  let programUniversity = ''

  for (let program of PROGRAMMES) {
    if (result.id == program.id) {
      for (let university of UNIVERSITIES) {
        if (result.universityID == university.id) {
          programUniversity += university.name
        }
      }
    }
  }

  return programUniversity
}

// Creates stars ??? parameter used to calculate iterations
function createStars (number) {
  let stars = ``
  for (let i = 0; i < Math.round(number); i++) {
    let star = `<img class="star-img" src="../Images/Icons/star.png"></img>`
    stars += star
  }
  return stars
}
