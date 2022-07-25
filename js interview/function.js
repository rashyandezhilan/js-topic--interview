// function in javascript ///
// type -1  declare by  function names
 greet('jack')
function greet(name){
    console.log('world'+name );
} 
//output/// function 
// world jack

console.log(" function-- anonymous function -----");
//anonymous function//
const exp = function()
{
    console.log(" the anonymous function  ");
}
exp( );
// output//
// the anonymouus function

console.log(" --- arrow function ------")
let bee=( a, b)=> a**b;
console.log(bee(10,2));
// output //
//100

let arrow= (sum) => {
    return a + b ;
}
arrow(sum(10,9));
console.log(" arrow function " );



console.log("------ IIFE------")
/// IIFE 
(function(data){
   for(var i= 0; i < data.length; i++){
        console.log(data[i])
    }
}) (['void','bee','gggg'])
//OUTPUT ///
//void
//bee
//gggg

//// over ////
(function(data){
    for(var i= 0; i < data.length; i++){
         console.log(data[i])
     }
 }) (['oooo','555','kkk'])







