const myObject = {
    username: 'air',
    email: 'simba@g.com',
    gender: 'male',
    programming: [1,2,3],
    password: '2323',
}

for (let property in myObject){
    console.log(property)
    console.log(typeof(property))
    console.log(property.length)
    console.log(myObject.property)
    console.log(myObject[property])
    console.log(typeof myObject[property])
}