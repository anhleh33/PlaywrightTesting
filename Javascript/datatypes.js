//String
let name = "anh hoang"
let name1 = 'anh hoang'
console.log(name)
console.log(name1)
console.log(typeof name)
console.log(typeof name1)

//Number
let num = 3
console.log(num)
console.log(typeof num)

let weight = 70.4
console.log(weight)
console.log(typeof weight)

//Boolean
let flag = true
console.log(flag)
console.log(typeof flag)

//Undefined
let a
console.log(a)

//Null
let c = ''
console.log(typeof c)
c = null
console.log(typeof c)


//Object
let browser = {
    "name": "chrome",
    "version": 80,
    "vendor": "Google",
    fun: () => {
        console.log("I eat RAM")
    }
}
console.log(typeof browser)
console.log(browser)
browser.fun()
console.log(browser.name)

//Array
let browsers = [
    {
        "name": "chrome",
        "version": 80
    }, 
    {
        "name":"firefox",
        "version": 75
    }
]
console.log(typeof browsers)
console.log(browsers)
console.log(browsers[1].name)
console.table(browsers)