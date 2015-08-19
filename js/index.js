
var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        screen.lockOrientation('portrait');
    },
    receivedEvent: function(id) {
      var watchID = navigator.geolocation.watchPosition(onTrackingSuccess, onTrackingError, { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true});
		 document.getElementById('DevicePlatform').value = device.platform;
		 document.getElementById('DeviceModel').value = device.model;
		 document.getElementById('DeviceID').value = device.uuid;
		 document.getElementById('DeviceVersion').value = device.version;
		 document.getElementById('ConnectionType').value = navigator.connection.type;
    }
};

	function onTrackingSuccess(position) {
		 if (position.coords.speed > 0){
			 var MilesPH = Math.round(position.coords.speed * 3600 / 1610.3*1000)/1000;
			 document.getElementById('YourMPH').innerHTML = MilesPH;
		 }else{
			 document.getElementById('YourMPH').innerHTML = "0"
		 }
		 document.getElementById('Longitude').value = position.coords.longitude;
		 document.getElementById('Latitude').value = position.coords.latitude;
		 document.getElementById('Altitude').value = position.coords.altitude;
		 document.getElementById('Accuracy').value = position.coords.accuracy;
		 document.getElementById('AltitudeAccuracy').value = position.coords.altitudeAccuracy;
		 document.getElementById('Heading').value = position.coords.heading;
		 document.getElementById('Speed').value = position.coords.speed;
	 	 document.getElementById('Timestamp').value = position.timestamp;

	 	 if (position.coords.speed > 6.71){

			 if (document.getElementById('checkforheadset').value == "1"){
			  //alert('check for headset');
			  window.plugins.headsetdetection.detect(
			  function(detected){
			    if(!detected){
			      //alert("No headphone detected");
			  	  document.getElementById('systemphonestatus').style.backgroundColor="red";
			 	  document.getElementById('systemphonestatus').innerHTML = "Phone Disabled";
			    }else{
			 	  document.getElementById('systemphonestatus').style.backgroundColor="green";
			 	  document.getElementById('systemphonestatus').innerHTML = "Headset Connected<br>Phone Enabled";
			    }
			  });

		     }else{
			  //alert('Dont check for headset');
			  document.getElementById('systemtextstatus').style.backgroundColor="red";
			  document.getElementById('systemtextstatus').innerHTML = "Texting Disabled";
			  document.getElementById('systemphonestatus').style.backgroundColor="red";
			  document.getElementById('systemphonestatus').innerHTML = "Phone Disabled";
		     }
		 }else{
			 document.getElementById('systemtextstatus').style.backgroundColor="green";
			 document.getElementById('systemtextstatus').innerHTML = "Texting Enabled";
			 document.getElementById('systemphonestatus').style.backgroundColor="green";
			 document.getElementById('systemphonestatus').innerHTML = "Phone Enabled";
		 }
	};

	function onTrackingError(error) {
    	//alert('code: '    + error.code    + '\n' +
        //  'message: ' + error.message + '\n');
	};