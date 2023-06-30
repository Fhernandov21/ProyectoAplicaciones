// 12.137198648615461, -86.22418545012458
// AIzaSyAdHNRNQENRBEXBYRv0ZKDMwwpeHADF5XA

// Variable mapa
var map;
function initMap() {
  // Se crea el mapa con api de google maps
  map = new google.maps.Map(document.getElementById('mapa'), {
    center: {lat: 12.1371, lng: -86.2241},
    zoom: 13,
    zoomControl: true
  });

  // Se agrega un marker al map con la ubicación del negoico
  var marker = new google.maps.Marker({
    position: {lat: 12.1371, lng: -86.2241},
    map: map,
title: 'Nuestras oficinas :D'
  });

  // Se quita el botón de control del zoom del mapa para pantallas pequeñas
  if(screen.width<900){
    map.zoomControl=false;
  }
}

