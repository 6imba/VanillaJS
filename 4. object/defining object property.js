// const myObject = {};
let myObject = {};
myObject.id = 1;
console.log('myObject: ',myObject)
const myKey1 = 'name';
myObject.myKey1 = 'Amir';
console.log('myObject: ',myObject)
const myKey2 = 'age';
myObject[myKey2] = 23;
console.log('myObject: ',myObject)
const myKey3 = 'address';
myObject = {[myKey3]: 'kapan'};
console.log('myObject: ',myObject)
