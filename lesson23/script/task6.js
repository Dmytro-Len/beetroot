let $ = +prompt('введите вашу сумму в USD')
let exchange = prompt('Введите в какую валюту конвертировать? EUR, UAH, RUB?')
let usdEur = 0.83;
let usdUah = 28.17;
let usdRub = 75.84;

if (exchange == 'EUR') {
    let a = $ * usdEur
    alert(`Ваша сумма в EUR равна: ${a}`)
} else if (exchange == 'UAH') {
    let a = $ * usdUah
    alert(`Ваша сумма в UAH равна: ${a}`)
} else if (exchange == 'RUB') {
    let a = $ * usdRub
    alert(`Ваша сумма в RUB равна: ${a}`)
} else {
    alert('Неправильный ввод')
}