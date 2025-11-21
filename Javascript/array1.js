//Array
let fruits = ["apple", "mango", "banana", "orange"]
console.log(fruits.length)
console.log(fruits[4])
console.log(fruits)

fruits.forEach(ele => {
    console.log(ele)
    fruits.push(1)
})
console.log(fruits)

const nums = [4, 3, 1, 33, 5, 7, 8]
console.log(nums)
nums.push(0, 9, 89)
console.log(nums.pop())
console.log(nums)

nums.shift()
nums.unshift(50)
console.log(nums)

nums.fill(3, 1, 4)
console.log(nums)

let newArr = nums.concat(fruits, [0, 0])
console.log(newArr)

console.log(fruits.join('=>'))
console.log(typeof fruits.join('=>'))
console.log(typeof fruits)