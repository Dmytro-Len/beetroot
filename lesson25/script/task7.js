let a = +prompt('Enter hours')
let b = +prompt('Enter minutes')
let c = +prompt('Enter seconds')

function time() {
    if (a > 0 && b > 0 && c > 0) {
        let z = alert(`Time is: ${a}:${b}:${c}`)
    } if (a > 0 && b == false && c > 0) {
        alert(`Time is: ${a}:00:${c}`)
    } if (a > 0 && b > 0 && c == false) {
        alert(`Time is: ${a}:${b}:00`)
    } if (a == false && b == false && c == false) {
        alert(`Time is: 00:00:00`)
    }
}
time()