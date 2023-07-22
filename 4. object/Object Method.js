// anonomous function:
const person1 = {
  fName: "Amir",
  lName: "Shrestha",
  fullName: function (){
    return this.fName + ' ' + this.lName;
  }
}
let result1 = person1.fullName();
console.log(result1);

// arrow function of anonomous function:
const person2 = {
  fName: "Amir",
  lName: "Shrestha",
  fullName: () => this.fName + ' ' + this.lName
}
let result2 = person2.fullName();
console.log(result2);