//==Exercise1===
//1
let shopingList = ["meat", "vegetables", "buttons", "books", "pencils"]
let item = "spoon";

//2
shopingList.push(item);
console.log(shopingList);

//3
shopingList.shift([0]);
console.log(shopingList);

//4
totalNum = shopingList.length;
console.log(totalNum);

//5
shopingList.forEach(function (item, index) {
    console.log(item, index)
});

//challenge

//Exercise 3
let movies = [];
let ratings = [];
function addMovie(movie, rating) {

    movies.push(movie);
    ratings.push(rating);
}
console.log(addMovie("superman", 5));
console.log(addMovie("sweet 29", 4));
console.log(addMovie("the gorge", 3));
console.log(addMovie("man and wife", 1));
console.log(addMovie("love at first", 2));

console.log(movies);
console.log(ratings);

function getAverageRating() {
    let totalRating = ratings.reduce((a, b) => a + b, 0);
    let AverageRating = totalRating / ratings.length;
    return AverageRating


}

console.log(getAverageRating());

getTopMovies = function () {
    let topRated = (Math.max(...ratings));
    let topIndex = ratings.indexOf(topRated)
    let topMovie = movies[topIndex];
    return topMovie
}

console.log(getTopMovies())



// challenge

const sortMovie = function () {
    let combine = movies.map((movies, i) => ({
        movies: movies,
        rating: ratings[i]
    }));
    combine.sort((a, b) => a.rating - b.rating);
    // Updating the items back to the array
    movies = combine.map(item => item.movies);
    ratings = combine.map(item => item.rating);


}
getSummary = () => {
    let summaryList = movies.map((movies, i) => `${movies}----->${ratings[i]}`).join("\n")
    return `Final Summary List==\n${summaryList}`
}
console.log(getSummary());



















//===Exercise 2====//
//1
let grades = [90, 77, 60, 30];
getAverage = function (grades) {
    let totalGrade = grades.reduce((a, b) => a + b, 0);
    let average = totalGrade / grades.length;
    return average
}
console.log(getAverage(grades));


//2
getHighest = (grades) => {
    return Math.max(...grades);

}
console.log(getHighest(grades));
//3
getLowest = (grades) => {
    return Math.min(...grades);

}
console.log(getLowest(grades));
//5

//challenge

getPassRate = function (grades) {
    let i = 0;
    for (let score of grades) {

        if (score >= 50) {
            i++;
        }
    }
    let totalNumberPassed = i;
    percentagePassedStudent = (i / grades.length) * 100
    return `the number of students that passed is ${totalNumberPassed} which makes a percentage of ${percentagePassedStudent}%`
}
console.log(getPassRate(grades));



//==exercise 4
//1
scores = [50, 90, 70, 80, 60, 70];
names = ["mary", "joy", "ojo", "johnson", "bolu", "eniola"];
//2
calculateAverage = () => {
    let totalScore = scores.reduce((a, b) => a + b, 0);
    let averageScore = totalScore / scores.length
    return `Average Grade for the Class: ${averageScore}`
};

//3
function findTop() {
    let topScore = Math.max(...scores);
    let topScoreIndex = scores.indexOf(topScore);
    let topScoreStudent = names[topScoreIndex];
    return `The Student with the highest score is ${topScoreStudent} `

}
function findBottom() {
    let bottomScore = Math.min(...scores);
    let bottomScoreIndex = scores.indexOf(bottomScore);
    let bottomScoreStudent = names[bottomScoreIndex];
    return `The Student with the lowest score is ${bottomScoreStudent} `

}

//4


// gradeCategorizer=()=>{
//    let studentNames = names.map((name, i)=>{
//     let score= scores[i];
//     let grade;
//     if (score >= 80){
//         grade = `A`;
//     }else if (score >=70){
//         grade =  "B";
//     }else if (score >=60){
//         grade =  "C";
//     }else if (score >=50){
//         grade =  "D";
//     }else if (score >=40){
//         grade =  "E";
//     }else if (score >=30){
//         grade =  "F";
//     };
//     return `${name}----${score} ----${grade}`
//    });
//    console.log((studentNames).join("\n"));


// }
// gradeCategorizer()
// function gradeCategorizer(){
//     let results =[];
//     for(let [index, name] of names.entries()){
//         let score = scores[index];
//         let grade ;

//         if (score >= 80){
//             grade = `A`;
//         }else if (score >=70){
//             grade =  "B";
//         }else if (score >=60){
//             grade =  "C";
//         }else if (score >=50){
//             grade =  "D";
//         }else if (score >=40){
//             grade =  "E";
//         }else if (score >=30){
//             grade =  "F";
//         };
//         results.push(`${name}----${score} ----${grade}`)
//     };
//     return results.join('\n')

//     }
//     console.log(gradeCategorizer())



//using for only

gradeCategorizer = function () {
    let results = [];
    for (i = 0; i < names.length; i++) {
        let name = names[i]
        let score = scores[i];
        let grade;
        if (score >= 80) {
            grade = `A`;
        } else if (score >= 70) {
            grade = "B";
        } else if (score >= 60) {
            grade = "C";
        } else if (score >= 50) {
            grade = "D";
        } else if (score >= 40) {
            grade = "E";
        } else if (score >= 30) {
            grade = "F";
        };
        results.push(`${name}----${score} ----${grade}`)
    };
    return results.join("\n")
}




//5

let formated = "This is a Printed copy of class report"
console.log(gradeCategorizer());
console.log(calculateAverage());
console.log(findTop());
console.log(findBottom());

//challenge
sortedStudentGrade = ()=>{
     let conbination= names.map((name,i)=>({
         name:names[i],
        score:scores[i]
   }))

    console.log(conbination)
}


