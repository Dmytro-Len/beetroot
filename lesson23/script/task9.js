let questionFirst = +prompt('В каком году началась вторая мировая война? а) 1939; б) 1940: в) 1941');
let questionSecond = +prompt('В каком году родился Т.Шевченко? а) 1815; б) 1814: в) 1805');
let questionThird = prompt('Назовите фамилию действующего президента Украины? а) Зеленский; б) Зелинский: в) Зиленский');
let a, b, c;

if (questionFirst == 1939) {
    a = 2;
} else {
    a = 0;
}
if (questionSecond == 1815) {
    b = 2;
} else {
    b = 0;
}
if (questionThird == 'Зеленский' || questionThird == 'зеленский') {
    c = 2;
} else {
    c = 0;
}
let sum = a + b + c;
alert(`Вы набрали ${sum} балла(ов)!`)