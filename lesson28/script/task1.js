class Circle {
    constructor(radius, diam) {
        this.radius = radius;
        this.diam = diam;
    }
    get valueRadius() {
        return this.radius;
    }
    set valueR(value) {
        return value;
    }
    get valueDiam() {
        return this.diameter;
    }
    squareCircle() {
        console.log(this.diam * Math.PI)
    }
}
let c = new Circle(46, 92)
c.value = 24;
// c.diam = radius * 2
console.log(c)
c.squareCircle()