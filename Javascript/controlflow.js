let flag = false
if(flag == true){
    console.log("type something")
}
else{
    console.log("skip")
}
console.log("completed")

let browser = 'opera'
if(browser == 'chrome'){
    console.log("Run in Chrome")
}
else if(browser == 'firefox'){
    console.log("Run in FireFox")
}
else if(browser == 'edge'){
    console.log("Run in Edge")
}
else{
    console.log(browser + " is not available")
}

browser = 'chrome'
switch(browser){
    case 'chrome':
        console.log("Run in Chrome")
        break
    case 'firefox':
        console.log("Run in FireFox")
        break
    case 'edge':
        console.log("Run in Edge")
        break
}

let fruits = ["apple", "mango", "banana", "orange", "cherry"]
for(let i = 0;  i < fruits.length; i++){
    console.log(fruits[i])
}

 for (const iterator of fruits){
    console.log(iterator)
 }

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
for(const iterator in browsers){
    console.log(iterator)
}
