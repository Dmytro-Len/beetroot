let makeUser = (name, age, height, weight) => {
    let obj = {
        name: name,
        age: age,
        height: height,
        weight: weight
    }

    if (isNaN(obj.age) || isNaN(obj.height) || isNaN(obj.weight)) {
        console.log('Wrong type')
    } else {
        console.log(`${obj.name}, ${obj.age}, ${obj.height}, ${obj.weight}`)
    }

}
let user = makeUser('John', '39', 178, 67)
// console.log(`${user.name}, ${user.age}, ${user.height}, ${user.weight}`)