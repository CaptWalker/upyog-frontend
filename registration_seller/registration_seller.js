let coordinates;

function initMap() {
    var myLatlng = {lat: 22.5726, lng: 88.3639};

    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 9, center: myLatlng});

    // Create the initial InfoWindow.
    var infoWindow = new google.maps.InfoWindow(
        {content: 'Click the map to get Lat/Lng!', position: myLatlng});
    infoWindow.open(map);

    // Configure the click listener.
    map.addListener('click', function(mapsMouseEvent) {
      // Close the current InfoWindow.
      infoWindow.close();

      // Create a new InfoWindow.
      infoWindow = new google.maps.InfoWindow({position: mapsMouseEvent.latLng});
      coordinates = mapsMouseEvent.latLng.toString();
      infoWindow.setContent(mapsMouseEvent.latLng.toString());
      console.log(coordinates);
      infoWindow.open(map);
    });
  }

  console.log(coordinates);