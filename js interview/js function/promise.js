// asynchronous  operation 
// var promise = new promise(function(reslove,reject)){
//do something
//});
const happyday = new Promise((reslove,reject)=>{
    var a=10;
    if(a===10){
        reslove(" its a correct")

    } else{

        reject(" its error")
    }
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})
 // output //
 //its is correct




var weekendday = new Promise ((reslove,reject)=>{
    var sum = 20;
    if(sum == 20){
        sum= sum + 10 ;
        console.log("sum is" + sum );
        reslove(" sucesss");
    } else {
        console.log("better luck sometimes ")
        reject(" unsucess")
    }
})
.then((add)=>{
    console.log(add)
    
})
.catch((err)=>{
    console.log(err)
})
// output //
//sum = 20    =>  sum is 30  ,successs
// sum = 10   =>  better luck next time , unsuccess
