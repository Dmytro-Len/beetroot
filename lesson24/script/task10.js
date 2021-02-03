let fromNum = 0;
let toNum = 100;
outerLoop: while (true) {
    let currNum = Math.round((fromNum + toNum) / 2);
    let question = prompt(`Ваше число > ${currNum}, < ${currNum} или = ${currNum}?`);
    switch (question) {
        case "=" :
            alert('Thanks for the game !')
            break outerLoop;
        case '>' :
            fromNum = currNum + 1;
            break;
        case '<' :
            toNum = currNum - 1;
            break;
    }
}