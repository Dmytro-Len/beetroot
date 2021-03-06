class Marker {
    constructor(color, count) {
        this.color = color;
        this.count = count;
    }
    printMarker(text) {
        // console.log(text) //вывели текст
        let p = text.replace(/\s+/g,''); //удалили все пробелы
        // console.log(p) //имя без пробелов
        let i = 5; //объем картриджа в маркере в процентах
        let f = 0.5 //расход чернил на 1 букву
        if (i >= (p.length * f)) {
            document.write(`<p style='color:${a.color}'>${text}<p>`);
        } else {
            console.log('doesnt have inks')
        }
     
}
}

const a = new Marker('blue', 100);
// console.log(a.color)
// console.log(a.count)

a.printMarker('Look at this color')

//second part

class fillMarker extends Marker {
    addMarker() {
        this.count = count;
    }
}
addMarker(100)
console.log(fillMarker)