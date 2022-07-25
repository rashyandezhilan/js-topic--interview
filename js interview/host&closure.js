//hosting
var a;
a=10;
{
    console.log(a)
}  
//output  
// 10  
 

//closure
function inti(){
    var nam= " moooo" // parent scope

function displayname(){ // child scope  call them 
    console.log(nam);

}
displayname();

}
inti();
 //output  // mooooo