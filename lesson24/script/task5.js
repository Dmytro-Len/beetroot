const value = prompt('Введите 10 чисел, разделяя запятыми');
let string = value.split(",");
let positive = 0;
let negative = 0;
let $zero = 0;
let a = 0;
let b = 0;
for (let digit of string) {
    digit = Number(digit);
    if (digit === 0) {
        $zero++;
        continue;
    }
    if (digit % 2 === 0) {
        b++;
    } else {
        a++;
    }
    if (digit < 0) {
        negative++;
    } else {
        positive++;
    }
}
alert('Нечетные: ' + a + '\n Четные ' + b + '\n Нули ' + $zero + '\n Отрицательные ' + negative + '\n Положительные ' + positive);