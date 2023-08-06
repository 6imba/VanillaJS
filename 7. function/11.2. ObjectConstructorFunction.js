// Constructor Object Constructor Function:
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// Create two Person objects:
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");


// Fetch created object's property:
console.log(myFather.firstName)
console.log(myMother.firstName)