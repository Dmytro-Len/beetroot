// //функция для инициализации карты
// function initMap() {
//   let pointA; //начало маршрута
//   let pointB; //конец маршрута
//   const btn = document.querySelector('#submit-btn').addEventListener('click', function() {
//     pointA = document.querySelector('#start').value;
//     pointB = document.querySelector('#end').value;
//   })

// //определяем карту по умолчанию
//   const map = new google.maps.Map(document.getElementById("map"), {
//     center: {
//       lat: 50.46551807542966,
//       lng: 30.354173434658293
//     },
//     zoom: 15,
//     icon: 'maps-and-flags.svg',
//   });

//   const dirServ = new google.maps.DirectionsService() //
//   const dirRend = new google.maps.DirectionsRenderer()
//   dirRend.setMap(map)

//   const routeOptions = {
//     travelMode: 'DRIVING',
//     origin: pointA,
//     destination: pointB,
//   }

//   dirServ.route(routeOptions, (result, status) => {
//     if (status === 'OK') {
//       dirRend.setDirections(result)
//     } else {
//       alert('Wrong route!')
//     }

//   })

// }

//second try

let start = document.getElementById("start")
let end = document.getElementById("end")

function initMap() {
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: { lat: 41.85, lng: -87.65 },
  });
  directionsRenderer.setMap(map);

  const onChangeHandler = function () {
    calculateAndDisplayRoute(directionsService, directionsRenderer);
  };
  
  let btn = document.getElementById("submit-btn");
  btn.addEventListener("click", () => {
    calculateAndDisplayRoute(directionsService, directionsRenderer);
  });

}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
  directionsService.route(
    {
      origin: {
        query: start.value,
      },
      destination: {
        query: end.value,
      },
      travelMode: google.maps.TravelMode.DRIVING,
    },
    (response, status) => {
      if (status === "OK") {
        directionsRenderer.setDirections(response);
      } else {
        window.alert("Directions request failed due to " + status);
      }
    }
  );
}

document.querySelector('#submit-btn').addEventListener('click', function () {
  let changeBg = document.createElement('h3')
  changeBg.className = 'afterclick'
  changeBg.innerHTML = 'Route has been created';
  changeBg.style.textAlign = 'center'
  document.body.append(changeBg);
});