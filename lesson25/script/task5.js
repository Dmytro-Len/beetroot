num = +prompt('ВВедите число')
function perfectNumber(num) {
    let sum = 0;
    let reminder;
    for (let i = 1; i < num - 1; i++) {
        reminder = num % 1;
        if (reminder === 0) {
            sum += 1;
        }
    }
    if (num === sum) {
        alert(num + 'Совершенное число')
    } else {
        alert('Не совершенное число')
    }
}
perfectNumber()
