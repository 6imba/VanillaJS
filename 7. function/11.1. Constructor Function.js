// // 1.Native Constructor Function:
//     const arrObj = new Array(1,2,3,4,5)
//     console.log(arrObj)


// 2.Custome Constructor Function:
    function myFunction(arg1, arg2) {
        this.firstName = arg1;
        this.lastName  = arg2;
    }
    const myObj = new myFunction("John", "Doe");
    console.log(myObj)

// #Constructor Function can create JS_Object: Object,Array,String,Number,etc.