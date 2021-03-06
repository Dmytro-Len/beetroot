// class EmpTable {
//     constructor(call, age, status) {
//         this.call = call;
//         this.age = age;
//         this.status = status;
//     }
//     getHTML(call, age, status) {
//         document.write(`<p> ${call}, ${age}, ${status} </p>`)
//     }
// }
// const a = new EmpTable('mark', 24, 'manager');
// const b = new EmpTable('pavlo', 28, 'accountant');
// // console.log(a.call, a.age, a.status)
// document.write(`<p> ${a.call}, ${a.age}, ${a.status} </p>`)
// document.write(`<p> ${b.call}, ${b.age}, ${b.status} </p>`)


class Employee {
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
}
class EmpTable {
    constructor(human) {
        this.human = human;
    }
    getHTML() {
        let table = '<table class=mine>\n'
        table += '<tr>\n'
        table += '<th>Name</th>\n'
        table += '<th>Age</th>\n'
        table += '<th>Position</th>\n'
        table += '</tr>\n'
        for (let current of this.human) {
            table += '<tr>\n'
            table += '<td>' + current.name + '</td>\n'
            table += '<td>' + current.age + '</td>\n'
            table += '<td>' + current.position + '</td>\n'
            table += '</tr>\n'
        }
        table += '</table>';
        return table
    }
}
let human = [
    new Employee("Mike", 28, 'accountant'),
    new Employee("Alex", 34, 'manager'),
    new Employee("John", 18, 'trainee'),
];
let table = new EmpTable(human);
document.write(table.getHTML()); 