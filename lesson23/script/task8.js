let radius = +prompt('Введите радиус окружности:');
let square = +prompt('Введите длину стороны квадрата');

if (radius === square / 2 ) {
    alert('Окружность вписана')
} else {
    alert('Окружность не впишется')
}