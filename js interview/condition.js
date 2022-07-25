// condition in javascript
// if condition//
var x = 20;
var y = 50;
if (x == 10) {

      console.log(" !!! true!!");  
}
//  output- true//


///if else////
console.log("_____ if else _____");
var gender = "male"
var age = 20;
if (gender == "male") {
      console.log(" you are a " + gender + age + " and above the age limits");
}
// output///
//you are a male 26 and above the age limits
console.log("__________________")
//else if //
var gender = "male"
var age = 26;
if (gender == "male" && age >= 18) {
      console.log(" you are a " + gender + age + " and above the age limits");
      console.log("checked !!!!!");
}
else {
      console.log(" sorry dude !!!")
}

//output else if///
// you are  a male 26 and above the age limits
// checked!!!
console.log("_______________")
/// nested if....///
var gen = "female"
var age = 26;
if (gen == "female") {
      if (age > 27) {
            console.log(" you are a " + gen + age + " and above the age limits");

      }
      else {
            console.log(" sorry lady ")
      }
}
// output///
//sorry lady
console.log("---------------------");
// switch statement
console.log("____switch statement____")

let grade = "U";

switch (grade) {
      case "A":
            console.log(" you are a ---" + grade + " ----OUT STANDING ")
            break;
      case "B":
            console.log(" you are a " + grade +" EXCELLENT")
            break;
      case "C":
            console.log(" you are a " + grade +" distanst ")
            break;
      case "D":
            console.log(" you are a " + grade +" pass ")
            break;
      default:
            console.log(" not graded")
}
// OUTPUT//
// grade =A ---  YOU are A --- outstanding
// grade = U ---  not grade
