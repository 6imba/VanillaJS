// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

const numbersOne = [1, 2, 3];
const numbersTwo = [...numbersOne];
console.log(numbersOne)
console.log(numbersTwo)
console.log(numbersOne==numbersTwo)

// const arr1 = [1,2,3]
// const arr2 = arr1;
// console.log(arr1==arr2);

// In case of arra,y spread operator copy by value  and assignment operator copy by reference.
// The spread operator is often used in combination with destructuring.