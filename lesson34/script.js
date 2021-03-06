function initMap() {
     const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 50.46551807542966, lng: 30.354173434658293 },
      zoom: 15,
      icon: 'maps-and-flags.svg',
    });
const position = { lat: 50.55, lng: 28.656664386571386 };
const destination = { lat: 60.2586905455587, lng: 28.686664386571386 };
const dirServ = new google.maps.DirectionsService()
const dirRend = new google.maps.DirectionsRenderer()

const routeOptions = {
  travelMode: 'DRIVING',
  origin: position,
  destination: destination,
}

dirRend.setMap(map)

dirServ.route(routeOptions, (result, status)=> {
  if (status === 'OK') {
    dirRend.setDirections(result)
  } else {
    alert('Wrong route!')
  }
  // console.log(result)
  // console.log(status)
})

}

  document.querySelector('#submit-btn').addEventListener('click', function() {
    // console.log('it works')
  let changeBg = document.createElement('h3')
  changeBg.className = 'afterclick'
  changeBg.innerHTML = 'Route has been created';
  changeBg.style.textAlign = 'center'
  document.body.append(changeBg);
  });
