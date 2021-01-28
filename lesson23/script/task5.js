let enter = prompt('Enter number, consists 5 number');

if (enter.length === 5) {
    let firstLetter = enter.slice(0, 1)
    let secondLetter = enter.slice(1, 2)
    let lastLetter = enter.slice(-1)
    let prelastLetter = enter.slice(-2,-1)
    // alert(firstLetter)
    // alert(secondLetter)
    // alert(lastLetter)
    // alert(prelastLetter)
    if (firstLetter === lastLetter && secondLetter === prelastLetter) {
        alert('Entered number is a palindrom')
    } else {
        alert('Entered number is NOT a palindrom')
    }
} else {
    alert('Incorrect enter')
}