const car = new Promise((reslove, reject) => {
    setTimeout(() => {
        reslove(" car : volvo ")

    }, 100)
})
const bike = new Promise((reslove, reject) => {
    setTimeout(() => {
        reslove(" bike : h2r")

    }, 200)
})
const truck = new Promise((reslove, reject) => {
    setTimeout(() => {
        
        reslove(" truck : benz")

    }, 400)

})
Promise.allSettled([car, bike, truck]).then((res) => {
    console.log(res)
})
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log(" sucesss")
        console.log(" promies property")
    })
//1
//all - 0: " car : volvo "
      //1: " bike : h2r"
      //2: " truck : benz"
      // sucesss
       //promies property
//2. allsettled
//0: {status: 'fulfilled', value: ' car : volvo '}
//1: {status: 'fulfilled', value: ' bike : h2r'}
//2: {status: 'fulfilled', value: ' truck : benz'}
//length: 3[[Prototype]]: Array(0)
//  sucesss
//  promies property
//3.any
//car : volvo
//  sucesss
//  promies property
//4.race
//car : volvo
//  sucesss
//  promies property



