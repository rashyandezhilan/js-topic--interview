var data = [" a","b","c","d"]
//1.concat 
 var array= data.concat(["e","f"])
 console.log(array) // [" a","b","c","d","e","f"]
 //2.To string
 console.log(data.toString()) // abcd
 //3.join
 console.log(array.join("*")); //a*b*c*d*e*f 
 // 4.pop
 var fruits= [" apple"," mango", " orange" ," berry"];
 console.log(fruits.pop()); // apple,mango,orange 
 // 5. push
 console.log(fruits.push("kiwi"));  // apple,mangp,orange,berry,kiwi
 //6.shift
 console.log(array.shift()) // a
 //7. unshift
 console.log(data.unshift([" e"])) // e,a,b,c,d 
 //8.index of
 console.log(data[0]); " e"
 //9.length
 console.log(data.length) // 5
 //10.delete
 console.log(delete array[6]); // ture
 //11. splice - add item
 console.log(data.splice(4,1,"g"," h"))  // 
 // 12. slice 
 console.log( data.slice(1)) // [' a', 'b', 'c', 'g', ' h']
 //13.sort
 console.log(array.sort()) //['b', 'c', 'd', 'e', 'f']
 //14.reverse
 console.log(data.reverse());//' h', 'g', 'c', 'b', ' a' 
 //15 .entries
 var obj = [" god"," evils"] // [0,'god'] [1, 'evils']
 var ray = obj.entries()
 console.log(ray) 
 //16. key
 for(var key of ray)
{
    console.log(key[1]) // evils

}
//17. some
//var same =  [ "find " , " raw "]
//console.log( same.some())
//18.filter
console.log(data.filter((d)=> d==='b')) //['b']
//19. find
console.log(data.find((d)=> d==='b')) // b
//20.findindex
console.log(array.findindex((d)=> d==='d')) //['d']
//21.inculdes
console.log(array.includes('b')) //ture
//22.map
console.log(data.map((d)=> d==='b')) // false, false, false, true, false, false



 


