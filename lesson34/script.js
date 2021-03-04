// function initMap() {
//     const container = document.querySelector('#map')
//     const map = new google.maps.Map(container, {
//         center: {lat: 50.514859621333, lng: 30.411714860733756},
//         zoom: 4,
//     })
// }


function initMap() {
     const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 50.46551807542966, lng: 30.354173434658293 },
      zoom: 15,
      icon: 'maps-and-flags.svg',

    });
  }

//   const marker = new google.maps.Marker({
//       position,
//       map,
//       icon: './maps-and-flags.svg',
//       draggable: 'true',
      
//   })

///ROUTE homework