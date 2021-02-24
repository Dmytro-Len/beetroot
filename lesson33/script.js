const loadButton = document.querySelector('.user__btn')

loadButton.addEventListener('click', () =>{
  fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response => response.json())
  .then(data => {
    const tag = document.querySelector('.user')

    for (i = 0; i < data.length; i++) {
      tag.insertAdjacentHTML('afterbegin', `<p>User: ${data[i].name}, Tel: ${data[i].phone}, ADDRESS: ${data[i].address.city}, ${data[i].address.street}</p>`);
    }
  })
})
