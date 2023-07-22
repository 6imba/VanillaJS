function one(){
    var name = 'Amir';
    return function two(){
        console.log(name)
        return 'I am '+name+'.';
    }
}

console.log(one())
console.log('........................................')
console.log(one()())
console.log('........................................')