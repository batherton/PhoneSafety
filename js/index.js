/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
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
	};

	function onTrackingError(error) {
    	//alert('code: '    + error.code    + '\n' +
        //  'message: ' + error.message + '\n');
	};