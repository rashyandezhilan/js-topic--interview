// asyn function 
var getdata = async()=> {
    var y = await "hello world";
    console.log(y)

}
getdata();

//output //

//hello world


var r = async()=>{
    var g =  await " rashyand"
    console.log("hi"+ g)
}
r();

// output ///

// hi rashyand    



async function handle(){
    var a =10;
    var result;
    if(a==10){
        console.log(" ****data handleing****** ")
        result = " its correct "
    }else{
        result= " its wrongs"
    }
    var res = await result 
    return res
}
handle().then((res)=>{
    console.log(res)
})
.catch((error)=>{
    console.log(error)
})
// output //
// ****data handleing****** 
 //its correct 


 var hell = async()=>{ 
     var a = 10 ;
     var b = 10;
     var result = a + b ;
     if(result == 20){
         result = a + b ;
         console.log(" the sum are is  " + result );
         result = " achieve";
     }
     else
     {
         result= " stop"
         console.log(" its wrong")
     }
    
    var add= await result;
    return add;
    }
hell().then((add)=>{
    console.log(add)
})
.catch((error)=>{
    console.log(error)
})
// output ///
// achieve
//the sum are is 20


