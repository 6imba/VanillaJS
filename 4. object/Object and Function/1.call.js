const fullName = function() {
    console.log( this.firstName + " " + this.lastName)
  }
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
fullName.call(person1); 
