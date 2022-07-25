var data1=[1,2,3,4,5]
var data2=[6,7,8,9,10]
// spread operator (...)- symbol
var date= [...data1,...data2]
console.log(date) //  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
//push method
data1.push(data2)
console.log(data1) // [1, 2, 3, 4, 5, Array(5)]
// flat method 
var num = data1.flat()
console.log(num) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// concat string
var str=data1.concat(data2)
console.log(str) //  [1, 2, 3, 4, 5,Array(5), 6, 7, 8, 9, 10]

// rest operator 
function good(a , ...arr){
    console.log(arr)
}
good(2,4,5,6,7,8) // [4, 5, 6, 7, 8]
