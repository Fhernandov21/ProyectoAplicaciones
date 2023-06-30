// 12.137198648615461, -86.22418545012458
// AIzaSyAdHNRNQENRBEXBYRv0ZKDMwwpeHADF5XA

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('mapa'), {
    center: {lat: 12.1371, lng: -86.2241},
    zoom: 13,
    zoomControl: true
  });
  var marker = new google.maps.Marker({
    position: {lat: 12.1371, lng: -86.2241},
    map: map,
title: 'Nuestras oficinas :D'
  });
  if(screen.width<900){
    map.zoomControl=false;
  }
}

