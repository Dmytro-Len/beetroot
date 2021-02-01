let a = +prompt('Enter hours')
let b = +prompt('Enter minutes')
let c = +prompt('Enter seconds')

function timeInSeconds() {
    let result = a * 3600 + b * 60 + c
    alert(result)
}
timeInSeconds()