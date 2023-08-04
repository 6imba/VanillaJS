// var x = 2 || 3          =====> 2
// var x = 0 || 3          =====> 3
// var x = null || 3       =====> 3
// var x = undefined || 3  =====> 3
// var x = false || 3      =====> 3

// var x = true || 3       =====> true
// var x = 1 || 3          =====> 1



// # Clean_Code: readable,reuseable, refactorable


// const obj1 = {
//     name: "Amir",
//     age: 22,
//     role: () => "developer",
//     detial(){
//         return this
//     }
// }

// const {name,role,age,detial} = {...obj1}
// console.log(name)
// console.log(age)
// console.log(role())
// console.log(detial())
