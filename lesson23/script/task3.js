let num = prompt('Enter number with three numbers');
if (num.length === 3) {
   let a = num.slice(0, 1)
   let b = num.slice(1, 2)
   let c = num.slice(-1)
//    alert(a)
//    alert(b)
//    alert(c)
if (a == b || b == c || a == c) {
    alert('We find correct numbers')
} else {
    alert('We didnt find correct numbers')
}
} else {
    alert('Wrong enter')
}