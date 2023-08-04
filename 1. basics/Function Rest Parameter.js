// // Default Parameters:
    // - The default parameter is a way to set default values for function parameters in the case a value is not passed in.
    
    // function multiply(a, b = 1) {
    //     return a * b;
    // }
    // console.log(multiply(5, 2));// output: 10
    // console.log(multiply(5));// output: 5



// // Function Rest Parameter:
    // // - The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.

    // // 1:
    // function sum(...theArgs) {
    //     let total = 0;
    //     for (const arg of theArgs) {
    //       total += arg;
    //     }
    //     return total;
    // }
    // console.log(sum(1, 2, 3));// output: 6
    // console.log(sum(1, 2, 3, 4));// output: 10
      
    // 2:
    function sum(x,y,...theArgs) {
        let total = 0;
        console.log(x)
        console.log(y)
        for (const arg of theArgs) {
          console.log(arg)
        }
    }
    sum(1, 2, 3, 4, 5);
    
    // Restriction for Function Rest Parameter:
    // - A function definition can have only one ...restParam.
    // - The rest parameter must be the last parameter in the function definition.
    
    // Extra:
        // - rest_parameter VS rest_argument. ==> ...args VS arguments
        // console.log(arguments)