
function initMap() {
    
if(navigator.geolocation){
    var success = function(position){
    var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
    var myOptions = {
        zoom: 15,
        center: latlng,
        mapTypeControl: false,
        navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
        mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(document.getElementById("mapa2"), myOptions)
    }
    navigator.geolocation.getCurrentPosition(success, function(msg){
        console.error( msg );
        map = new google.maps.Map(document.getElementById('mapa2'), {
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
        });

    }
}

