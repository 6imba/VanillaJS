// Execution context is the concept for describing the internal working of a code.
// - Everything in JavaScript happens inside Execution Context.
// In JavaScript, the environment that enables the JavaScript code to get executed is what we call JavaScript Execution Context.
// - So, Execution Context environment or a place where javascript gets executed.
// - JavaScript isnt possible without Execution Context.
// - You can assume a execution context as a container in which whole JavaScript code is executed.
// - Execution Context has two component: Memory and Code.
// - Memory component is where all the variables&function are stored as a key-value pair. This memory component is also known as variable_environment.
// - Code component is where code is executed one line at a time. This Code component is also known as thread_of_execution(single thread: execute code oneline at a time).
// - So JavaScript is a synchronous single-threaded language.
// - Single-threaded means JavaScript can only execute single/one command/statement line at a time.
// - and Synchronous means can only execute one command at a time in a specififc order leading to blocking/waiting execution flow. So move to next line once current line has finished its execution.
// - Therefore JavaScript is synchronous single-threaded language.

// So, how is JavaScript gets executed in Execution Context?
    // - Whenever we run JavaScript program, an Execution Conext is created.
    // - How is Execution Context created?
        // Example: In test.js;
            var z = 3;
            function square(x){
                return x*x;
            }
            var result1 = square(5)
            var result1 = square(n)

            // So, when you this code:
                // First, a global_execution_context is created.
                // As we said earlier execution_context has two component Memory and Code.
                // Means Execution_Context is created in two phases:
                    // - Creation phase(Memory creation phase)
                    // - Execution phase(Code execution phase)
                    
                    // - Creation phase(Memory creation phase):
                    // So in first Memory creation phase, JS_Engine move from top to buttom of JS program.
                    // and JS will allocate the memory for all variables and function known as memory space.
                    // Means memory allocated for variable z,result1,result2 and function square is alocated with value undefined.
                    // Memory allocated for variable zresult1,result2 with value stored as undefined initially and function square with value stored as whole code of function in this memory space.
                    
                    // - Execution phase(Code execution phase)
                        // Once, memory allocation for variable for that particular scope is done. JS_Engine again moves and run program statement line by line from top to buttom of JS program.
                        // So this is the point where JS start executing.
                        // Means at first line z = 3; So undefined value of variable z in memory space is placed as 3 now;
                        // And so on in square(5); function is invoked so function code is executed. Which create a new Local execution context.
                        // So when ever new function,sub_program is invoked a new local execution context is created with same two phase: local memory allocation and code execution phases.
                        // and when this function returns this particular local execution context gets deleted.
                        // and once whole program finish excuting whole global execution context get deleted.

                    // Here all these deep stack of execution context from global to local is managed using concept named as CallStack(works in the LIFO) by JavaScript.

        // Synonoms of CallStack: Execution Context Stack, Programm Stack, Control Stack, Runrime Stack, Machine Stack.

// ******************************************************************************************************************************
 
// - Everything in JavaScript happens inside Execution Context.
// - So, Execution Context run-time environment or a place where javascript gets executed
// - and the call stack is the collection of your execution context which works in the LIFO(Last in First out manner).


