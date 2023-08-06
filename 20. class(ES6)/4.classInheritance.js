// // # Example_1:
// class Class1{
//   constructor(arg1, arg2){``
//     this.property1 = arg1;
//     this.property2 = arg2;
//   }
//   methodP1() {
//     return 'Hello!!!  ---' + this.property1 + '  ---' + this.property2;
//   }
// }
// class Class2 extends Class1 {
//   constructor(arg3, arg4){
//     super(arg3);
//     this.property3 = arg4;
//   }
//   methodC1() {
//     return this.methodP1() + ', it is a  ---' + this.property3 +'.';
//   }
// }
// let obj2 = new Class2("Apple", "Ball");
// console.log(obj2.methodC1());
// // super method that is written inside child_class_constructor invokes the parent_class_constructor.
// // Must call super constructor in derived class before accessing 'this' or returning from derived constructor.

// // ------------------------------------------------------------------------------------------------------------------------

// // # Example_2:
// class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//     present() {
//       return 'I have a ' + this.carname;
//     }
//   }
// class Model extends Car {
//   constructor(brand, mod) {
//     super(brand);
//     this.model = mod;
//   }
//   show() {
//     return this.present() + ", it's model is " + this.model;
//   }
// }
// let myCar = new Model("Ford", "Mustang");
// console.log(myCar.show());

// // ------------------------------------------------------------------------------------------------------------------------



// // The super() method refers to the parent class.
// // By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.
// // Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.

// # Terms: extends, super().
  // - To create a derived_class by inheriting parent_class use the extends keyword while child_class defining.
  // - write super() method inside derived_class constructor. where super() refers to the parent class.


  
// // ------------------------------------------------------------------------------------------------------------------------
// // Both base class and parent class having same method_name:
//   class Class1{
//     constructor(arg1, arg2){
//       this.property1 = arg1;
//       this.property2 = arg2;
//     }
//     method1() {
//       return 'Hello!!!  ---' + this.property1 + '  ---' + this.property2;
//     }
//   }

//   class Class2 extends Class1 {
//     constructor(arg3, arg4){
//       super(arg3);
//       this.property3 = arg4;
//     }
//     method1() {
//       return ', it is a  ---' + this.property3 +'.';
//     }
//   }

//   let obj2 = new Class2("Apple", "Ball");
//   console.log(obj2.method1());


// ------------------------------------------------------------------------------------------------------------------------

// // // # Bug: Both base class and parent class having same method_name but method of child calls itself which leads to infinite loop. (can methods call itself aka recursive loop)
//   // # Error: RangeError: Maximum call stack size exceeded
// class Class1{
//   constructor(arg1, arg2){
//     this.property1 = arg1;
//     this.property2 = arg2;
//   }
//   method1() {
//     return 'Hello!!!  ---' + this.property1 + '  ---' + this.property2;
//   }
// }

// class Class2 extends Class1 {
//   constructor(arg3, arg4){
//     super(arg3);
//     this.property3 = arg4;
//   }
//   method1() {
//     return this.method1() + ', it is a  ---' + this.property3 +'.';
//   }
// }

// let obj2 = new Class2("Apple", "Ball");
// console.log(obj2.method1());

// // Q. what happen if recursion loop never ends?

class Class1{
  constructor(arg1, arg2){
    this.property1 = arg1;
    this.property2 = arg2;
  }
  method1() {
    return 'Hello!!!  ---' + this.property1 + '  ---' + this.property2;
  }
}
class Class2 extends Class1 {
  constructor(arg3, arg4){
    super(arg3);
    this.property3 = arg4;
  }
  method1() {
    // return this.method1() + ', it is a  ---' + this.property3 +'.';
    return super.method1() + ', it is a  ---' + this.property3 +'.';
  }
}
let obj2 = new Class2("Apple", "Ball");
console.log(obj2.method1());

