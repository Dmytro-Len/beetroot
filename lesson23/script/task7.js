let sum = +prompt('Введите сумму покупки:')

if (sum >=200 && sum < 300) {
    let e = sum * 0.03;
    alert(`Ваша скидка составила: ${e}`)
} else if (sum >=300 && sum < 500) {
    let e = sum * 0.05;
    alert(`Ваша скидка составила: ${e}`)
} else if (sum >=500) {
    let e = sum * 0.07;
    alert(`Ваша скидка составила: ${e}`)
} else {
    alert('Неправильный ввод')
}