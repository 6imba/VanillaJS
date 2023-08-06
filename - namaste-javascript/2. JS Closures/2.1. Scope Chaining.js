
// Scope Chain: Chain of Lexical_Environment holding references to its parent Lexical_Environment ==> Scope -> Execution_Context -> Memory -> Lexical Environment -> Chaining.
    // Lexical_Environment is Local Memory Space alnog with Reference to its parent Lexical_Environment.
    // Lexical_Environment is created when ever Execution environment is created.
    // Scope Chain: Scope(Global>Closure>Local),CallStack
func1()
function func1(){
    let x = 1;
    func2()
    function func2(){
        // let x = 2;
        func3()
        function func3(){
            // let x = 3;
            console.log(x)
        }
    }
}
