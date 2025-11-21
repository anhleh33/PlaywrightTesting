let fruits = ["apple", "mango", "banana", "orange", "cherry"]

let nums = [3, 5434, 34, 55, 11, 2]

// let found = fruits.find(fruit => fruit === "cherry")
function predicate(fruit){
    return fruit === "cherry"
}

// console.log(fruits.find(predicate))
let flag = fruits.find((fruit) => {
    return fruit === "apple"
})
console.log(flag)

console.log(fruits.includes("mango"))
console.log(fruits.indexOf("banana"))

nums.sort()
console.log(nums)

nums.reverse()
console.log(nums)

nums.map((num, index) => {
    console.log(num, index)
})

let newNums = nums.map((num, index) => {
    return  num * 10
})
console.log(newNums)

let filteredNums = newNums.filter((val, i) => {
    return val >= 30
})
console.log(filteredNums)

let reducedNums = nums.reduce((total, curr) => {
    console.log(`[${total}, ${curr}]`)
    return total+curr
})
console.log(reducedNums)

let a = new Array(5)
a.push(10)
a[0] = 6
a[8] = 8
console.log(a)

let tests = new Array(5)
console.log(tests)