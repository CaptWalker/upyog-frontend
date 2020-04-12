let coordinates;

async function submitSellerRegisterForm(){

  const firstNameSeller = document.getElementById("firstNameSeller").value;
  const lastNameSeller = document.getElementById("lastNameSeller").value;
  const sellerContact = document.getElementById("sellerContact").value;
  const sellerEmail = document.getElementById("sellerEmail").value;
  const sellerPassword = document.getElementById("sellerPassword").value;
  const sellerPasswordVerify = document.getElementById("sellerPasswordVerify").value;
  const sellerGSTID = document.getElementById("sellerGSTID").value;
  const sellerAddress = document.getElementById("sellerAddress").value;
  const sellerCoordinates=coordinates;

}

async function resetSellerRegisterForm(){

  document.getElementById("firstNameSeller").value="";
  document.getElementById("lastNameSeller").value="";
  document.getElementById("sellerContact").value="";
  document.getElementById("sellerEmail").value="";
  document.getElementById("sellerPassword").value="";
  document.getElementById("sellerPasswordVerify").value="";
  document.getElementById("sellerGSTID").value="";
  document.getElementById("sellerAddress").value="";
  coordinates="";  

}

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