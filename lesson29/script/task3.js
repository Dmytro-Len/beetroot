let count = -1;
let goAhead = () => {
    count += 1;
    if (count === 0) {
            document.querySelector('.top').style.backgroundColor = 'red';
            document.querySelector('.middle').style.backgroundColor = 'white';
            document.querySelector('.bottom ').style.backgroundColor = 'white';
    } if (count === 1) {
            document.querySelector('.top').style.backgroundColor = 'white';
            document.querySelector('.middle').style.backgroundColor = 'yellow';
            document.querySelector('.bottom ').style.backgroundColor = 'white';
    } if (count === 2) {
        document.querySelector('.top').style.backgroundColor = 'white';
        document.querySelector('.middle').style.backgroundColor = 'white';
        document.querySelector('.bottom ').style.backgroundColor = 'green';
    }
}