class Person{
    static age = 0

    getAge(){
        return Person.age++
    }
}

const person = new Person();

console.log(person.getAge())
console.log(person.getAge())
console.log(person.getAge())

console.log("-------------------------")
const per = new Person();
console.log(per.getAge())
console.log(per.getAge())
