while (true) {
    const enterDigits = prompt('Enter 2 digits and operator for resolving using comas for example: 2, 2, + . Your turn: ');
    const digitArr = enterDigits.split(',');
    alert(eval(digitArr[0] + digitArr[2] + digitArr[1]))
    let answer = prompt('Would you like to calculate more? (yes, no)')
    if (answer === 'no') {
        break;
    }
}