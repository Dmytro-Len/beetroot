class EmpTable {
    constructor(call, age, status) {
        this.call = call;
        this.age = age;
        this.status = status;
    }
    getHTML(call, age, status) {
        document.write(`<p> ${call}, ${age}, ${status} </p>`)
    }
}
const a = new EmpTable('mark', 24, 'manager');
const b = new EmpTable('pavlo', 28, 'accountant');
// console.log(a.call, a.age, a.status)
document.write(`<p> ${a.call}, ${a.age}, ${a.status} </p>`)
document.write(`<p> ${b.call}, ${b.age}, ${b.status} </p>`)
