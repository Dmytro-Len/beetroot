fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response => response.json())
  .then(json => {
      console.log(json[2].name)
      
  })