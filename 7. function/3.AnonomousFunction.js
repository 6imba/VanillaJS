// Anonomous Function:

// # 1:
// function (){ return 1}; // anonomous function can't be just declared, it shoud be assigned somewhere(variable,callback,etc). Actually its used that way.
var x = function (){ return 1};

// # 2:
() =>1;
var y = () =>1;



// # 3:
  console.log("JavaScript Strated!");

  //1  Function Expressions stored in a variable x. //anonymous function
  let x = function (a, b) {
    return a * b;
  };
  console.log(x); //display function expression
  console.log(x(2, 7)); //After a function expression has been stored in a variable, the variable can be used as a function.

  let z = (a, b) => a * b;
  console.log(z); //display function expression
  console.log(z(2, 7)); //After a function expression has been stored in a variable, the variable can be used as a function.

  let y = () => 3 + 4;
  console.log(y);
  console.log(y());
  console.log("Hi")
  console.log(() => 3 + 4);
  console.log((() => 3 + 4)());

  console.log(() => 3 + 4); // ==> anonomous arrow function



// # Anonomous Function is used in:
  // 1.Function variable
  // 2.object methods
  // 3.eventListener
  // 4.callback

// # Reference:
  //https://www.javascripttutorial.net/javascript-anonymous-functions/