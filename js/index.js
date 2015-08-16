
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
		 document.getElementById('Longitude').innerHTML = position.coords.longitude;
		 document.getElementById('Latitude').innerHTML = position.coords.latitude;
		 document.getElementById('Altitude').innerHTML = position.coords.altitude;
		 document.getElementById('Accuracy').innerHTML = position.coords.accuracy;
		 document.getElementById('AltitudeAccuracy').innerHTML = position.coords.altitudeAccuracy;
		 document.getElementById('Heading').innerHTML = position.coords.heading;
		 document.getElementById('Speed').innerHTML = position.coords.speed;
	 	 document.getElementById('Timestamp').innerHTML = position.timestamp;

	 	 if (position.coords.speed > 14){
			 document.getElementById('systemstatus').style.backgroundColor="red";
			 document.getElementById('systemstatus').innerHTML = "Calls and Texting Disabled"
		 }else{
			 document.getElementById('systemstatus').style.backgroundColor="green";
			 document.getElementById('systemstatus').innerHTML = "Calls and Texting Enabled"
		 }
	};

	function onTrackingError(error) {
    	//alert('code: '    + error.code    + '\n' +
        //  'message: ' + error.message + '\n');
	};