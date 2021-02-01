let second = +prompt('Enter number in seconds')

function translate() {
    let a = Math.floor(second / 3600);
    let b = Math.floor(second % 3600 / 60);
    let c = Math.floor(second % 3600 % 60);
    alert(`${a}:${b}:${c}`)
}
translate()