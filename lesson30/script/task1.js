let insideText = document.getElementById('text').innerHTML = 'lorem-pasan';

window.addEventListener('keydown', function(keydown) {
        keydown.preventDefault()
    if (keydown.code === 'KeyE' && keydown.ctrlKey) {

        document.getElementById('text').style.display = 'none';
        document.getElementById('textarea').style.display = 'block';
        document.getElementById('new-text').style.display = 'none';
        document.getElementById('textarea').innerText = insideText;

    } if (keydown.code === 'Comma' && keydown.ctrlKey) {

        document.getElementById('text').style.display = 'none';
        document.getElementById('textarea').style.display = 'none';
        document.getElementById('new-text').style.display = 'block';
        document.getElementById('new-text').innerText = insideText;

    } 

    }

)