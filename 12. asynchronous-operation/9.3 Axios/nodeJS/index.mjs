import axios from 'axios'
// console.log(axios.get("https://reqres.in/api/users?page=1"))
// console.log(await axios.get("https://reqres.in/api/users?page=1"))

const x = async () => console.log(await axios.get("https://reqres.in/api/users?page=1"))
x().data