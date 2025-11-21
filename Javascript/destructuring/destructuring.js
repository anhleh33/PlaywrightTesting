let fruits = ["apple", "mango", "grapes", "banana"]

 getRandomNum = () => {
    const num = Math.random() * 9999;
    return num.toString()
 }
 
let num = getRandomNum() 
console.log(getRandomNum())

let [a, ...rest] = fruits
console.log(a)
console.log(rest)

// let [first, sec, thr, last] = fruits
// console.log(first, thr, last)

let [first, , last] = fruits
console.log(`First: ${first} and Last: ${last}`)

const myBio = {
    num: {
        fname : "Anh Hoang",
        lname: "Le"
    },
    age: 20,
    gender: "female"
}
console.log(myBio)
let {num: {fname, lname}, age} = myBio
console.log(num, fname, lname)
 
// let {fullname, gender} = myBio
// console.log(fullname, gender)
// let {fullname: {fname}} = myBio
// console.log(fname)

