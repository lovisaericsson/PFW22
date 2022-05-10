"use strict";

//Get the program level of each program

function getProgramLevel () /* with parameter from search result? */ {

    let programLevel = [];

    for (let program of PROGRAMMES) {
        if (program.level == 0) {
            programLevel.push(LEVELS[0])
        }

        if (program.level == 1) {
            programLevel.push(LEVELS[1])
        }

        if (program.level == 2) {
            programLevel.push(LEVELS[2])
        };
    }

    return programLevel;
}

// function getEachProgramReview () {

//     let programReviews = [];

//    for (let comment of COMMENTS_PROGRAMME) {
//            programReviews.push(comment.stars.courses);
//    }
   
//     return programReviews;
// }

function mapProgramById (result) {

    let ratedProgram = [];

    for (let comment of COMMENTS_PROGRAMME) {
        
        if (result.id == comment.programmeID) {

           ratedProgram.push(comment.stars.courses);
            
        }
    }

    let averageScore = ratedProgram.reduce((a, b) => a + b, 0) / ratedProgram.length;

    return Math.round(averageScore * 10) / 10;

    //arr.reduce((a, b) => a + b, 0) / arr.length

}