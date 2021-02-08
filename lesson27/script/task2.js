const check = [
    {name: 'bread', count: 1, price: 14},
    {name: 'apple', count: 4, price: 28},
    {name: 'chocolate', count: 2, price: 25},
]

// распечатка чека
check.forEach(showCheck => console.log(showCheck)) 

//подсчет суммы покупки
function checkSum() {
    console.log(check[0]['price'] * check[0]['count'] + check[1]['price'] * check[1]['count'] + check[2]['price'] * check[2]['count'])
}
checkSum()

//самая дорогая покупка в чеке
function expensivePrice() {
    check.sort((a, b) => a.price < b.price ? 1 : -1);
    console.log(check[0])
}
expensivePrice()

//средняя стоимость товара в чеке
function averagePrice() {
    console.log(((check[0]['price'] + check[1]['price'] + check[2]['price']) / check.length).toFixed(2))
}
averagePrice()