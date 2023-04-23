function scoresAverage(moviesAvg) {

    if (moviesAvg.length === 0) {
        return 0;
      }

   

    const allScores = moviesAvg.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    return allScores/ moviesAvg.length
   

}






///

let solu = moviesArray.sort(function(a,b){
    return a-b
})

finalSolu = solu.sort()

return finalSolu





//dif
let totalSum = moviesArray.reduce((acc,movie) => {
    return acc + movie.score;

},0 )



let average = totalSum/moviesArray.length
let roundedAverage = Math.round(average * 100) / 100;
return









//example simplifying 1st exercise




function getAllDirectors(moviesArray) {

    return allDirectors = moviesArray.filter (movie =>{
        return movie.director;
    });


}

//Example with reduce

let totalBeforeResult = 40000

let exerciseResults = [25000, 30000, 10000, -5000];
let totalLastExercises = exerciseResults.reduce((acc, result) =>{
    return acc + result;
}, totalBeforeResult)


//WEEK 2 DAY 2

//THIS: Context -> Literal Objects

//FUNCTION DECLARATION: THIS is what we have at the left side of the dot, this depends on the moment of executing
//ARROW FUNCTION: THIS inherits of the function where the arrow function is declared, this depends on the definition
// RULE 90% CASES: BY DEFAULT, WHEN DEFINING LITERAL OBJECT METHODS: USE FUNCTION DECLARATION
let soldier = {
    strength: 10,
    health:20,
    attack() {
        return this.strength

    },
    receiveDamage: function(damage) {
        this.health -= damage
    }
}

//SCOPE: the space of the code where a variable is valid.
    //global let var
    //function let var
    //block only available for LET. VAR HAS NO BLOCK SCOPE

let username = "Pedro"; //global scope variable
const registerUser = ( ) => {
    console.log( "inside", userName)
}

registerUser();
console.log("outside",userName)


//SHADOWING:

let userAge = 23;

const sendUserAge = () => {
    let userAge = 10;
    console.log(userAge); //10
}

console.log(userAge); //23



//HOISTING: mechanism Declaration of variables are brought ath the top of the js file before executing the rest of the code

var x = 10;
console.log(x); //10

x = 10
console.log(x)
var x;







