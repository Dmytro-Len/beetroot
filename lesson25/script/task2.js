function fact() {
    let inputNumber = prompt('Please enter an integer');
    let total = 1;

    for (i = 0; i < inputNumber; i++){
        total = total * (inputNumber - i);
    }
    alert(total)
}
fact()
