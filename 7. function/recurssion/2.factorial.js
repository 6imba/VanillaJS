function factorial (numb) {
    if (numb == 0) return 1
    return numb * factorial (numb - 1)
}

const numb = 5
const result = factorial(5)
console.log(`Factorial of ${numb} is ${result}.`)