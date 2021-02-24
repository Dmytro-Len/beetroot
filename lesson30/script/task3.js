const box = document.querySelector('.text-field');

box.addEventListener('mousemove', function(e) {
    const x = e.pageX - this.offsetLeft;
    const y = e.pageY - this.offsetTop;
    console.log(x, y)
    if (x >= 200 && y >= 150) {
        box.style.width = `${x + 100}px`;
        box.style.height = `${y + 100}px`;
    }
})

