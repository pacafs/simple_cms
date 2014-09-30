jQuery(function($){

	var directionsDisplay;
	var directionsService = new google.maps.DirectionsService();
	
	var start  = new google.maps.LatLng(41.183157,-8.652716);
	var end    = new google.maps.LatLng(41.17984,-8.6536);
	var waipt1 = new google.maps.LatLng(41.180813, -8.65687);
	var waipt2 = new google.maps.LatLng(41.179756, -8.656553);

	var longitude;
	var latitude;
	var canvas = "map";
	var myLatlng;

	var content1 = "<div class='my_marker' style='overflow: hidden; cursor: default; clear: both; position: relative; padding: 10px; width: 200px; height: 100px; background-color: rgb(255, 255, 255);'>"
				 + "<div><img src='http://nightclub54.com/wp-content/uploads/2013/01/club1.png' alt='Smiley face' height='42' width='42'></div>"
				 + "<h1>1</h1>"
				 + "</div>";

	var content2 = "<div style='overflow: hidden; cursor: default; clear: both; position: relative; padding: 10px; width: 200px; height: 100px; background-color: rgb(255, 255, 255);'>"
				 + "<div><img src='http://nightclub54.com/wp-content/uploads/2013/01/club1.png' alt='Smiley face' height='42' width='42'></div>"
				 + "<h1>2</h1>"
				 + "</div>";

    var content3 = "<div style='overflow: hidden; cursor: default; clear: both; position: relative; padding: 10px; width: 200px; height: 100px; background-color: rgb(255, 255, 255);'>"
				 + "<div><img src='http://nightclub54.com/wp-content/uploads/2013/01/club1.png' alt='Smiley face' height='42' width='42'></div>"
				 + "<h1>3</h1>"
				 + "</div>";

    var content4 = "<div style='overflow: hidden; cursor: default; clear: both; position: relative; padding: 10px; width: 200px; height: 100px; background-color: rgb(255, 255, 255);'>"
				 + "<div><img src='http://nightclub54.com/wp-content/uploads/2013/01/club1.png' alt='Smiley face' height='42' width='42'></div>"
				 + "<h1>4</h1>"
				 + "</div>";

	function getLocation() {
	
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(showPosition);
	    } else {
	    	alert("Can´t get your Location");
	    }
	
	}

	function showPosition(position) {
	    
	    longitude  = position.coords.latitude;
	    latitude   = position.coords.longitude; 
	    
	    randing_map(canvas, longitude, latitude);

	}
	
	function randing_map(canvas, lan, lat){			

			myLatlng = new google.maps.LatLng(lan,lat);

			directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});
			
			var myOptions = {
						zoom: 17,
						center: myLatlng,
						mapTypeId: google.maps.MapTypeId.ROADMAP,
						maxZoom   : 20,
    					disableDefaultUI: true,
    					panControl: true
					}			
			var map = new google.maps.Map( document.getElementById(canvas), myOptions );
			
			// My Position
			var marker = new google.maps.Marker({
			    position : myLatlng,
			    map      : map,
			    icon     : "assets/point.png"
			});
			// Map Marker 1
			var marker1 = new google.maps.Marker({
			    position : start,
			    map      : map,
			    icon     : "assets/piano.png"
			});

			// Map Marker 2
			var marker2 = new google.maps.Marker({
			    position : waipt1,
			    map      : map,
			    icon     : "assets/food.ico"
			});

			// Map Marker 3
			var marker3 = new google.maps.Marker({
			    position : waipt2,
			    map      : map,
			    icon     : "assets/bar.png"
			});

			// Map Marker 4
			var marker4 = new google.maps.Marker({
			    position : end,
			    map      : map,
			    icon     : "assets/beer.png"
			});

			// Map Styles
			var styles = [
			  {
			    featureType: "all",
			    stylers: [
			      { saturation: -80 }
			    ]
			  },{
			    featureType: "road.arterial",
			    elementType: "geometry",
			    stylers: [
			      { hue: "#00ffee" },
			      { saturation: 50 }
			    ]
			  },{
			    featureType: "poi.business",
			    elementType: "labels",
			    stylers: [
			      { visibility: "off" }
			    ]
			  }
			];	

			map.setOptions({styles: styles});

			// InfoWindows Custom Content //			
			var infowindow = new google.maps.InfoWindow({
				content: content1
			});
			// Marker clicks Events //	
			google.maps.event.addListener(marker1, 'click', function() {
			  infowindow.setContent(content1);
			  infowindow.open(map,marker1);
			});
			google.maps.event.addListener(marker2, 'click', function() {
			  infowindow.setContent(content2);
			  infowindow.open(map,marker2);
			});
			google.maps.event.addListener(marker3, 'click', function() {
			  infowindow.setContent(content3);
			  infowindow.open(map,marker3);
			});
			google.maps.event.addListener(marker4, 'click', function() {
			  infowindow.setContent(content4);
			  infowindow.open(map,marker4);
			});	

			// Click on the map to remove Infowindows
			google.maps.event.addListener(map, 'click', function() {
			    infowindow.close();
			});

			// Zoom change Event
			google.maps.event.addListener(map, 'zoom_changed', function() {
			    var zoomLevel = map.getZoom();
			    map.setCenter(myLatlng);
			});

			//Call directions function
			calcRoute();
			directionsDisplay.setMap(map);

	}

	function calcRoute() {

	  var waypts   = [{location: waipt1, stopover: true},{location: waipt2, stopover: true}];

	  var request = {
	      origin: start,
	      destination: end,
	      waypoints: waypts,
	      optimizeWaypoints: true,
	      travelMode: google.maps.TravelMode.DRIVING
	  };

	  directionsService.route(request, function(response, status) {
	    
	    if (status == google.maps.DirectionsStatus.OK) {
	      directionsDisplay.setDirections(response);
	    } else {
	    	alert("Fucked Up");
	    }

	  });
	}

	google.maps.event.addDomListener(window, 'load', getLocation);


});	