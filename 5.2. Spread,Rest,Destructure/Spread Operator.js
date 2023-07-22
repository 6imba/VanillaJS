// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

// const numbersOne = [1, 2, 3];
// const numbersTwo = [...numbersOne];
// console.log(numbersOne)
// console.log(numbersTwo)
// console.log(numbersOne==numbersTwo)

// const arr1 = [1,2,3]
// const arr2 = arr1;
// console.log(arr1==arr2);

// In case of arra,y spread operator copy by value  and assignment operator copy by reference.
// The spread operator is often used in combination with destructuring.

// Use case of spread operator:

// // UseCase1: Copy/Duplicate an array by value:
// const numbersOne = [1, 2, 3];
// const numbersTwo = [...numbersOne];
// console.log(numbersOne)
// console.log(numbersTwo)
// console.log(numbersOne==numbersTwo)

// // UseCase2: Create new array appending other two or more array:
// const arr1 = [3,6,9,12,15]
// const arr2 = ['a','b','c','d','e']
// const arr3 = [...arr1, ...arr2]
// console.log(arr3)

// // UseCase3: Copy/Duplicate an object by value:
// const obj1 = {a:1,b:2,c:3,d:4,e:5}
// const obj2 = {...obj1}
// console.log(obj2) //{ a: 1, b: 2, c: 3, d: 4, e: 5 }
// console.log(obj1 == obj2) // false

// // // UseCase4: Create new object appending other two or more array:
// const obj1 = {a:1,b:2,c:3}
// const obj2 = {d:4,e:5,f:6}
// const obj3 = {...obj1, ...obj2}
// console.log(obj3)

// #Extra:
    // ShallowCopy by reference:
    // const obj1 = {a:1,b:2,c:3,d:4,e:5}
    // const obj2 = obj1
    // console.log(obj2) //{ a: 1, b: 2, c: 3, d: 4, e: 5 }
    // console.log(obj1 == obj2) // true

    // Hard/Deep_Copy by value:
    // const obj1 = {a:1,b:2,c:3,d:4,e:5}
    // const obj2 = {...obj1}
    // console.log(obj2) //{ a: 1, b: 2, c: 3, d: 4, e: 5 }
    // console.log(obj1 == obj2) // false

// The spread operator allows you to spread out elements of an iterable object such as an array, map, or set.
// The spread operator allows you to spread out property(key-value_pair) of an object.
// In JavaScript, Object s are not iterable unless they implement the iterable protocol.
// Therefore, you cannot use for...of to iterate over the properties of an object.

const arr1 = [1,3,5];
const arr2 = [2,4,6, ...arr1];
console.log(arr2);
// In this example, the three dots ( ...) located in front of the arr1 array is the spread operator.
// The spread operator (...) unpacks the elements of the arr1 array.

// Note: Difference between spread_operator and function_rest_parameter.
// [1, 2, 3, ...arr1] VS function(a, b, ...args)
// spread_operator VS rest_parameter
// Note that ES6 also has the three dots ( ...) which is a rest parameter that collects all remaining arguments of a function into an array. 

// destructuring assignment in array.
// [a, b, ...rest] = [10, 20, 30, 40, 50]; 

// The function_rest_parameters and array_object_destructuring_assignment must be the last arguments of a function.
// However, the spread operator can be anywhere.

// Reference: https://www.javascripttutorial.net/es6/javascript-spread/

