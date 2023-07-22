// Reference:
// - https://www.youtube.com/watch?v=cCOL7MC4Pl0
// - youtube.com/channel/UCYFd7Qy93YP7gPERnxP545A


// console.log('Synchronous 1')
// setTimeout( _ => console.log('Timeout 2', 0))
// Promise.resolve().then( _ => console.log('Promise 3'))
// console.log('Synchronous 4')


// fetch is a browser based Api but its also available in node via node-fetch library.
// import fetch from 'node-fetch';
// import {fetch} from 'node-fetch';
const fetch = require('node-fetch');
console.log(fetch)
const promise = fetch('https://jsonplaceholder.typicode.com/todos/1')

promise
    .then(res => res.json())

