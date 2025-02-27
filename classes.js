//Question 1a. & 1b.
class Person {
    constructor(firstName, lastName, middleName){
        this.firstName = firstName
        this.lastName = lastName
        this.middleName = middleName
    }
    fullName() {
        return this.firstName + " " + this.middleName + " " + this.lastName
    }
}

let brandon = new Person("Brandon", "Brown", "O'neil")
let wil = new Person("Wil", "Fausto", "Santos")
console.log(wil.firstName)
console.log(wil.fullName())
console.log(brandon.fullName())

//Question 2

class Book {
    constructor(title, author, rating){
        this.title = title
        this.author = author
        this.rating = rating
    }
    isGood(){
        if(this.rating >= 7){
            return true
        }else {
            return false
        }
    }
}
let theRaven = new Book("The Raven", "Edgar Allen Poe", 5)
let theAlchemist = new Book("The Alchemist", "Paulo Coelho", 8)
let theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 10)

console.log(theRaven.isGood())
//Question 3
class Dog {
    constructor(name, breed, mood, hungry){
        this.name = name
        this.breed = breed
        this.mood = mood
        this.hungry = hungry
    }
    playFetch(){
        this.hungry = true
        this.mood = "Playful"
        console.log("Ruff!")
    }
    feed(){
        if(this.hungry === true){
            this.hungry = false
            console.log("Woof!")
        } else {
            console.log("The dog doesn't look hungry")
        }
    }
    toString(){
        console.log("The Dog's name is " + this.name + " and his breed is " + this.breed + ". Most of the time he is " + this.mood + ".")
            }
}
let blackie = new Dog("Blackie", "Bulldog", "Happy", false)
blackie.toString()
//Question 4

let freezingPoint = {
    celsius: 0,
    fahrenheit: 32,
    kelvin: 273.2
}

class Celsius {
    constructor(celsius){this.celsius = celsius}

getFahrenheitTemp(){
    return 1.8 * this.celsius + 32
}
getKelvinTemp(){
    return this.celsius + 273
}
isBelowFreezing(){
    if(this.celsius <= 0){
        return true
    }else {
        return false
    }
}
}
let outsideTempt = new Celsius(0)
console.log(outsideTempt.isBelowFreezing())