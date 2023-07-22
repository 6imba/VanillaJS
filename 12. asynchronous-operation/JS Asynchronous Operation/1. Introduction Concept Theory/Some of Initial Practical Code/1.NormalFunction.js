// // # 1. Two NormalFunction, call seperately :
//   // Declaration & Defination:
//     var sum; //variable declare
//     function firstFunction(num1, num2) { //function declare aswell as defined
//             sum = num1+num2;
//         }
//     function secondFunction() { //function declare aswell as defined
//         console.log('Sum: ', sum)
//       }

//   // Invocation/Call
//     secondFunction(); //function call
//     firstFunction(5, 5); //function call
//     secondFunction(); //function call



// 2 Two NormalFunction, secondFunction call inside firstFunction:
var sum;
function firstFunction(num1, num2) {
        sum = num1+num2;
        secondFunction();
    }
function secondFunction() {
    console.log('Sum: ', sum)
  }
firstFunction(5, 5);



// Here,
// #1. The problem with the first example above, is that you have to call two functions(firstFunction before secondFunction) to display the result.
// #2. The problem with the second example, is that you cannot prevent the calculator firstFunction from displaying the result(as secondFunction is invoked inside firstFunction).

// Now it is time to bring in a callback.