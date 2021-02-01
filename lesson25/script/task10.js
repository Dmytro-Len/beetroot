let firstDateHours = +prompt('Enter First Date Hours')
let firstDateMinutes = +prompt('Enter First Date Minutes')
let firstDateSeconds = +prompt('Enter First Date Seconds')
let secondDateHours = +prompt('Enter Second Date Hours')
let secondDateMinutes = +prompt('Enter Second Date Minutes')
let secondDateSeconds = +prompt('Enter Second Date Seconds')

function time() {
    let diffDate;
    let firstResult = firstDateHours * 3600 + firstDateMinutes * 60 + firstDateSeconds;
    let secondResult = secondDateHours * 3600 + secondDateMinutes * 60 + secondDateSeconds;

    if (firstResult > secondResult) {
        diffDate = firstResult - secondResult
    } if (secondResult > firstResult) {
        diffDate = secondResult - firstResult
    } else {
        alert('No difference')
    }
    let a = Math.floor(diffDate / 3600);
    let b = Math.floor(diffDate % 3600 / 60);
    let c = Math.floor(diffDate % 3600 % 60);
    alert(`${a}:${b}:${c}`)
}

time()