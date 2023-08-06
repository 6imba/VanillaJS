// // # 5:
// class MyThirdClass{
//     constructor(arg1, arg2){
//         this.property1 = arg1;
//         this.property2 = arg2;
//     }
// }
// const thirdObject = new MyThirdClass("Happy New Year", 2021);
// console.log(thirdObject);

// // ------------------------------------------------------------------------------------------------------------------------


// // # 6:
// class MyFourthClass{
//     constructor(argID, argYear){
//         this.objID = argID;
//         this.objCreatedAt = argYear;
//     }
//     //class methods decleration
//     objDetial(username){
//         return `Hi ${username}! your object with number ${this.objID} of MyFourthClass is created in ${this.objCreatedAt}.`;
//     }
// }

// const obj4 = new MyFourthClass(103, 1999);
// console.log(obj4.objID);
// console.log(obj4.objCreatedAt);
// console.log(obj4.objDetial);//class methods name
// console.log(obj4.objDetial("Amir")); //class methods call
// console.log(obj4.constructor);//class inbuilt-methods name

// // ------------------------------------------------------------------------------------------------------------------------

// // # Example:
//     class Car {
//         constructor(name, year) {
//             this.name = name;
//             this.year = year;
//         }
//         age(x) {
//             return x - this.year;
//         }
//     }
//     let date = new Date();
//     let year = date.getFullYear();
//     let myCar = new Car("Ford", 2014);
//     console.log("My " + myCar.name + " car is " + myCar.age(year) + " years old.");

// // ------------------------------------------------------------------------------------------------------------------------


