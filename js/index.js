
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
		 document.getElementById('DevicePlatform').innerHTML = device.platform;
		 document.getElementById('DeviceModel').innerHTML = device.model;
		 document.getElementById('DeviceID').innerHTML = device.uuid;
		 document.getElementById('DeviceVersion').innerHTML = device.version;
		 document.getElementById('ConnectionType').innerHTML = navigator.connection.type;
    }
};

	function onTrackingSuccess(position) {
		 if (position.coords.speed > 0){
			 var MilesPH = Math.round(position.coords.speed * 3600 / 1610.3*1000)/1000;
			 document.getElementById('Speed').innerHTML = MilesPH;
		 }else{
			 document.getElementById('Speed').innerHTML = "0"
		 }
		 document.getElementById('Longitude').innerHTML = position.coords.longitude;
		 document.getElementById('Latitude').innerHTML = position.coords.latitude;
		 document.getElementById('Altitude').innerHTML = position.coords.altitude;
		 document.getElementById('Accuracy').innerHTML = position.coords.accuracy;
		 document.getElementById('AltitudeAccuracy').innerHTML = position.coords.altitudeAccuracy;
		 document.getElementById('Heading').innerHTML = position.coords.heading;
		 //document.getElementById('Speed').innerHTML = position.coords.speed;
	 	 document.getElementById('Timestamp').innerHTML = position.timestamp;

	 	 if (position.coords.speed > 6.71){

			 if (document.getElementById('checkforheadset').value == "1"){
				 alert('check for headset');
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
			  })

		     }else{
				 				 alert('Dont check for headset');
			  document.getElementById('systemtextstatus').style.backgroundColor="red";
			  document.getElementById('systemtextstatus').innerHTML = "Texting Disabled";
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