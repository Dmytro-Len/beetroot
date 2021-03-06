let get = document.getElementById('tage')
let arr = [];
get.addEventListener('click', function() {
  for (let i = 1; i < 7; i++) {
    let el = document.querySelector(`tbody>tr:nth-child(${i+1})>td:nth-child(2)`).innerHTML;
    arr.push(el)
  }
  console.log(arr)
  arr.sort(function(a, b) {
    if (a < b) {
      return -1
    } if (a > b) {
      return 1
    }
    return 0
  })
  
  document.querySelector(`tbody>tr:nth-child(3)>td:nth-child(2)`).innerHTML = arr[1];
  document.querySelector(`tbody>tr:nth-child(4)>td:nth-child(2)`).innerHTML = arr[2];
  document.querySelector(`tbody>tr:nth-child(5)>td:nth-child(2)`).innerHTML = arr[3];
  document.querySelector(`tbody>tr:nth-child(6)>td:nth-child(2)`).innerHTML = arr[4];
  document.querySelector(`tbody>tr:nth-child(7)>td:nth-child(2)`).innerHTML = arr[5];
  document.querySelector(`tbody>tr:nth-child(2)>td:nth-child(2)`).innerHTML = arr[0];

})
//для 3-й колонки
let getElement = document.getElementById('tpoint')
let arrSec = [];
getElement.addEventListener('click', function() {
  for (let i = 1; i < 7; i++) {
    let el = document.querySelector(`tbody>tr:nth-child(${i+1})>td:nth-child(3)`).innerHTML;
    arrSec.push(el)
  }
  console.log(arrSec)
  arr.sort(function(a, b) {
    if (a < b) {
      return -1
    } if (a > b) {
      return 1
    }
    return 0
  })
  
  document.querySelector(`tbody>tr:nth-child(2)>td:nth-child(3)`).innerHTML = arr[0];
  document.querySelector(`tbody>tr:nth-child(3)>td:nth-child(3)`).innerHTML = arr[1];
  document.querySelector(`tbody>tr:nth-child(4)>td:nth-child(3)`).innerHTML = arr[2];
  document.querySelector(`tbody>tr:nth-child(5)>td:nth-child(3)`).innerHTML = arr[3];
  document.querySelector(`tbody>tr:nth-child(6)>td:nth-child(3)`).innerHTML = arr[4];
  document.querySelector(`tbody>tr:nth-child(7)>td:nth-child(3)`).innerHTML = arr[5];

})

