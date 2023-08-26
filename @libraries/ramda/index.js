// // propEq stands for "property equal" and is used to check whether a specific property of an object has a certain value.
// import { propEq } from "ramda";
// const person = { name:'Simba', age:23, gender:'male'}
// const isMale = propEq('male', 'gender')
// const is23 = propEq(23, 'age')
// const isSimba = propEq('Simba', 'name')
// console.log(isMale(person))
// console.log(is23(person))
// console.log(isSimba(person))

// // find in ramda Returns the first element of the list which matches the predicate, or undefined if no element matches.Dispatches to the find method of the second argument, if present.
// import { propEq, find } from "ramda";
// const persons = [{ name: 'Simba', age: 23 }, { name: 'Asu', age: 21 }, { name: 'Sekla', age: 19 }]
// const isAsu = propEq('Asu', 'name')
// // const candidate = find(isAsu, persons)
// const candidate1 = find(isAsu)(persons)
// console.log(candidate1)
// const candidate2 = find(propEq('Ram', 'name'))(persons)
// console.log(candidate2)

// import { mergeDeepRight } from "ramda";
// const x = { a:1, b:2, c:3, d:4, e:5 }
// const y = { c:6, d:7, e:8, f:9, g:10 }
// const z = mergeDeepRight(x, y)
// console.log('z ==> ', z)

// import { mergeDeepLeft } from "ramda";
// const x = { a:1, b:2, c:3, d:4, e:5 }
// const y = { c:6, d:7, e:8, f:9, g:10 }
// const z = mergeDeepLeft(x, y)
// console.log('z ==> ', z)
