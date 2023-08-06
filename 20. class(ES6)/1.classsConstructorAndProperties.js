// // 1. Class defination:
// class MyFirstClass{
//     constructor(arg1, arg2){
//         this.property1 = arg1;
//         this.property2 = arg2;
//     }
// }
// The example above creates a class named "MyFirstClass" with two initial property property1 and property2.
    // This means that every object instanciated by this class(MyFirstClass) should compulsarily have these two properties.
// Class aka blueprint or temlate for an object.
// A JavaScript class is not an object. It is a template/blueprint for JavaScript objects.
// JS class should have a built-in method called constructor(), that takes two arguments.
// And then constructor() initializes the pre-properties of class with that two arguments.

// ------------------------------------------------------------------------------------------------------------------------

// // 2. Now instanciate an object of created class(MyFirstClass).
// const oneObject = new MyFirstClass("Happy New Year", 2021);
// console.log(oneObject);
// console.log(oneObject.property1); // 3. Access the class property.
// console.log(oneObject.property2); // 3. Access the class property.

// const twoObject = new MyFirstClass(2, 2021);
// console.log(twoObject);
// console.log(twoObject.property1); // 3. Access the class property.// 3. Access the class property
// console.log(twoObject.property2); // 3. Access the class property.

// ------------------------------------------------------------------------------------------------------------------------

// // above you can see two object instanciated of class(MyFirstClass).
// // The constructor method is called automatically when a new object is created which sets the compusalry properties(property1&property2) of a class.

// // 4. define explicit_property of an object_of_class.
// console.log(twoObject);
// twoObject.explicit_property3 = "ok";
// console.log(twoObject.explicit_property3);
// console.log(twoObject);
// // Note: here only twoObject(object) of MyFirstClass(class) will have explicit_property(explicit_property3). But oneObject(object) will not have.
// // what about explicit_method: twoObject.fullName({ return "Amir Shrestha" }; //????

// // what about explicit_method: twoObject.fullName({ return "Amir Shrestha" }; //????
// console.log(twoObject);
// twoObject.fullName = function() { return "Amir Shrestha" };
// console.log(twoObject.fullName);
// console.log(twoObject);

// // ------------------------------------------------------------------------------------------------------------------------

// // The Constructor Method
// // The constructor method is a special method:
// // It has to have the exact name "constructor"
// // It is executed automatically when a new object is created
// // It is used to initialize object properties

// // If you do not define a constructor method, JavaScript will add an empty constructor method.
// class MySecondClass{}
// const obj = new MySecondClass();
// console.log(obj);
// obj.greet = "Hello Hi Buye!";
// console.log(obj);
// obj.fullName = function() { return "Amir Shrestha" }; // obj.fullName = () => "Amir Shrestha";
// console.log(obj);
// console.log(obj.fullName());
