var t = new Date();
var v= "hello"

console.log(t.setMonth(1))// 1644630737619
console.log(t.getTimezoneOffset()) //-330
console.log(t.getFullYear()) //2022
console.log(t.getSeconds()) // 11
console.log(t.getMinutes()) //32


console.log(t.toLocaleDateString())  // 7/11/2022
console.log(t.toTimeString()) // 10:34:37 (GMT +5)
console.log(v.length)  // 5
console.log(t.toLocaleString())  // 2/11/22  10:38:34 am
console.log(t.toISOString()) // 2022-02-11T05:09:54.074Z
console.log(t.toDateString()); // mon jun 12 22



setInterval((v) => { 
    console.log(" hello " ) // hello
    clearInterval(v);
    
}, 3000); //hello




var cnt = 0;
setInterval(showmsg,1000)
function showmsg()
{
    console.log(" set intervel")
    console.log(cnt);
    cnt++;
    setTimeout(2000);
}
// output ///
//set intervel
//o
//setInterval
//1