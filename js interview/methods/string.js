var  word =  `john`
var word1 = ' hello '
var word2 = ' everyone '
var word3 = " hi hello bye"
var num = ' 59';
// 1.length 
console.log("length of word"+ word.length) // length of word  6
//2.startsWith
console.log(word.startsWith('j')) // ture
//3. end with
console.log(word.endsWith('n')) // ture
//4.uppercase
console.log(word.toUpperCase()) // JOHN
//5.lowercase
console.log(word.toLowerCase()) // john
// 6.indexof
console.log(word.indexOf('j')) // 0 
// 7.concat
console.log(word1.concat(word2))  // hello everyone
// 8.slice
console.log(word3.split()) // hi hello bye 
// 9.join 
var join= word3.split()
console.log(join.join()); // hi hello bye 
//10.reverse
//console.log(word3.reverse())

//11.tostring
console.log(num.toString()) //59
// 12.substr 
console.log(word.substring())  // john 
// 13.trim
console.log(word2.trim()) // everyone 
//14.replace
var replace= word3.replace('hi',`yoyo`)
console.log(word3.replace())  // yoyo hello bye 
// 15.replaceall
var mydata = " world will end ";
console.log(mydata.replace("world"," green")) // green will end

// 16.includes
console.log(word3.includes('bye')) // ture
// 17 . lastindexof
console.log(word3.lastIndexOf()) // -1


