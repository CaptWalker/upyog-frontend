let coordinates;

async function submitCustomerRegisterForm(){

  const firstNameCustomer = document.getElementById("firstNameCustomer").value;
  const lastNameCustomer = document.getElementById("lastNameCustomer").value;
  const customerContact = document.getElementById("customerContact").value;
  const customerEmail = document.getElementById("customerEmail").value;
  const customerPassword = document.getElementById("customerPassword").value;
  const customerPasswordVerify = document.getElementById("customerPasswordVerify").value;
  const customerAddress = document.getElementById("customerAddress").value;
  const customerCoordinates=coordinates;

}

async function resetCustomerRegisterForm(){

  document.getElementById("firstNameCustomer").value="";
  document.getElementById("lastNameCustomer").value="";
  document.getElementById("customerContact").value="";
  document.getElementById("customerEmail").value="";
  document.getElementById("customerPassword").value="";
  document.getElementById("customerPasswordVerify").value="";
  document.getElementById("customerAddress").value="";
  coordinates="";  

}
function initMap() {
    var myLatlng = {lat: 22.5726, lng: 88.3639};

    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: myLatlng});

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