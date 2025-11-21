let name = "Anh Le"
console.log(name);

console.log(typeof name);

console.log(name.toUpperCase());
console.log(name.toLowerCase());

console.log(name.includes('Anh'));

console.log(name.split(' '));

let words = name.split(' ')
words.forEach(ele => {
    console.log(ele);
});

console.log(name.length)

//--------------------------------------------------------------------------------------------
let space = " hey welcome "
console.log(space.trim());
console.log(space.trimLeft());
console.log(space.trimRight());

//--------------------------------------------------------------------------------------------
console.log(name.charAt(3));
console.log(name.charAt(name.length-1));
console.log(name.substring(4, name.length));
console.log(name.replace('Le', 'Le Hoang'))