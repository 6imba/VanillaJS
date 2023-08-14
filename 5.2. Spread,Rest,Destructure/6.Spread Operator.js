// // 1 Spread Opreator used to clone array.
// let arr1= [2,4,6,8,10,12,14];
// let arr2 = [...arr1];
// console.log(arr2);


// // 2 Spread Opreator used to clone object.
// let obj1= {name:'Amir', age:22, gender:'male'};
// let obj2 = {...obj1};
// console.log(obj2);


// // #Spred Operator in array:
// const arr1 = [1,2,3];
// const arr2 = [5,6,7];
// const arr3 = [...arr1, 4, ...arr2, 8];
// console.log(arr3);
// // arr3 ==> [1,2,3,4,5,6,7,8]
// // spread operator to clone array. ==> const arr4 = [...arr3]
// const arr4 = [...arr3]
// console.log(arr4);
// console.log(arr4 == arr3);
// console.log([1,2,3] == [1,2,3]);
// // However, we cannot use the equality operator for comparing the arrays. The reason behind this is that JavaScript array is an object type and objects are compared based on the references of the variables and not on the values.


// // #Spred Operator in object:
// const obj1 = {age: 22};
// const obj2 = {age: 20};

// // const obj3 = {...obj1, name:'Amir'}
// // const obj3 = {...obj2, name:'Samir'}
// // const obj3 = {...obj1, name:'Amir', ...obj2, name:'Samir'} //Notice the properties that did not match were combined, but the property that did match, color, was overwritten by the last object that was passed,
// console.log(obj3)
// // obj3 ==> {age:22, name:'Amir', age:20, name:'Saimr'}
// // spread operator to clone object. ==> const obj4 = [...obj3]

// const obj1 = {age: 22};
// const obj2 = {gender: "Male"};
// const obj3 = {...obj1, name:'Amir', ...obj2, address:'Kapan'} 
// console.log(obj3)


// // // Create Modified copy of Object using spread Object:
// const obj1 = {a:"Apple",b:"Ball",c:"C"};
// const obj2 = {...obj1,c:'Cat'} //over-write c.
// console.log(obj2)
