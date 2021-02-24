let car = {
    production: 'Fiat',
    model: 'Panda',
    year: 2008,
    averageSpeed: 87
}

function info() {
    alert(`${car.production}, ${car.model}, ${car.year}, ${car.averageSpeed}`)
}
info()

function time() {
    let a = +prompt('Введите расстояние в км')
    if (a > (4 * car.averageSpeed)) {
        let wayTime = (a / car.averageSpeed) + 1;
        alert(wayTime)
    } else {
        alert(a / car.averageSpeed)
    }
}
time()