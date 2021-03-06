let cssArr = [
    {name: 'color', value: 'red'},
    {name: 'font-size', value: '14px'},
    {name: 'text-align', value: 'center'},
    {name: 'background-color', value: 'yellow'},
    {name: 'text-transform', value: 'uppercase'}
]

function style() {
    let i = 0;
    for(i; i < cssArr.length; i++) {
        document.write(`<p style='${cssArr[i]['name']}: ${cssArr[i]['value']}'>Hello, Dima<p>`);
    }
}
style()