let user = {
    name: "taras",
    age: 18,
    role: 'user',
    length: function() {
        console.log(Object.keys(user))
    },
    checkPermisson: function() {
        if (this.role === 'admin') {
            alert('Access granted')
        } if (this.role === 'user') {
            alert('Access denied')
        }
    }
}
//subtask1
let admin = {}
admin = user;
delete admin.role
console.log(admin)
//subtask2
user.length()
user.checkPermisson()