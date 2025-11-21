let one = "apple" //literal
let two = new String("apple") //object

console.log(one)
console.log(two)

console.log(one === two)
console.log(one == two)

//--------------------------------------------------------------------------------------------
let num = 3 //number
let numStr = "3" //string

console.log(num == numStr)
console.log(num === numStr)

let a = "1"
let b = "10"
console.log(a+b)

//--------------------------------------------------------------------------------------------
let fname = "Hoang Anh"
let lname = " Le"
console.log(`My full name is ${fname.concat(lname)}`)

console.log(fname.startsWith("Hoas"))
console.log(fname.endsWith('h'))

console.log(fname.search('a'))
console.log(fname.includes('a'))