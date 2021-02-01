let a = Number(prompt('Enter first number'))
let b = Number(prompt('Enter second number'))

if (a > b) {
    while (a % b != 0) {
        a--
    }
    alert(a)
} if (a < b) {
    while (b % a != 0) {
        b--
    }
    alert(b)
} if (a === b) {
    alert(a)
} 