console.log([2,4,6,8,10,12,14] == [2,4,6,8,10,12,14]);
console.log(1 == 1);
console.log(1 == 2);
console.log('amir' == 'amir');
console.log(1 == '1');
console.log(1 === 1);
console.log(1 === '1');


// why the "==" operator return false when comparing reference types in javascript? Because you're not actually comparing the contents of the object, you're comparing the memory addresses. You need to access the object that is referenced, then compare that.