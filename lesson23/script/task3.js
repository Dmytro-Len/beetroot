let num = prompt('Введите трехзначное число');

if (num.length == 3) {  
    let a = num.slice(0, 1);
    let b = num.slice(1, 2);
    let c = num.slice(2, 2);
    if (a === b || b === c || a === c) {
        alert('Найдены совпадающие цифры')
    } else {
        alert('Совпадающие цифры не найдены')

    }

} else {
    alert('Неверный ввод')
}