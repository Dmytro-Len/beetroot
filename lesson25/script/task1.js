let a = +prompt('Enter first number');
let b = +prompt('Enter second number')

function num (){
    if (a < b) {
        alert('-1')
    } if (a > b) {
        alert('1')
    } if (a === b){
        alert('0')
    } 
}
num(a, b)