jQuery(function($){

	var directionsDisplay;
	var directionsService = new google.maps.DirectionsService();

	var a = "/assets/piano6.png";
	var b = "/assets/fork28.png";
	var c = "/assets/cocktail22.png";
	var d = "/assets/mirrors.png";

	var longitude;
	var latitude;
	var canvas = "map";
	var myLatlng;

	// 	Options buttons variables //
	var markers = true;
	var way = google.maps.TravelMode.DRIVING;
	// 	Options buttons variables //

	var content1 = "<div class='my_marker' style='overflow-y: scroll; overflow-x: hidden; cursor: default; clear: both; position: relative; padding: 10px; width: 200px; height: 170px; background-color: rgb(255, 255, 255);'>"
				 + "<div><img src='http://www.oocities.org/unlklavier/Paul-performing.jpg' alt='Smiley face' height='80' width='80'></div>"
				 + "<h1>Piano Concerto</h1>"
				 + "<p>Hello Friend!</p>"
				 + "</div>";

	var content2 = "<div class='my_marker' style='overflow-y: scroll; overflow-x: hidden; cursor: default; clear: both; position: relative; padding: 10px; width: 200px; height: 150px; background-color: rgb(255, 255, 255);'>"
				 + "<div><img src='http://tm222.dd14.firma5.com/wp-content/uploads/Bild11.jpg' alt='Smiley face' height='80' width='80'></div>"
				 + "<h1>Restaurant</h1>"
				 + "</div>";

    var content3 = "<div class='my_marker' style='overflow-y: scroll; overflow-x: hidden; cursor: default; clear: both; position: relative; padding: 10px; width: 200px; height: 150px; background-color: rgb(255, 255, 255);'>"
				 + "<div><img src='http://nightclub54.com/wp-content/uploads/2013/01/club1.png' alt='Smiley face' height='80' width='80'></div>"
				 + "<h1>NightClub</h1>"
				 + "</div>";

    var content4 = "<div class='my_marker' style='overflow-y: scroll; overflow-x: hidden; cursor: default; clear: both; position: relative; padding: 10px; width: 200px; height: 150px; background-color: rgb(255, 255, 255);'>"
				 + "<div><img src='http://www.sanfranciscosentinel.com/wp-content/uploads/2008/04/barleycorn-1.jpg' alt='Smiley face' height='80' width='80'></div>"
				 + "<h1>Classic Pub</h1>"
				 + "</div>";

	jQuery.getloc = function getLocation() {
		
		$(".main").empty().html('<div class="spinner"><div class="dot1"></div><div class="dot2"></div></div>');

	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(showPosition);
	    } else {
	    	alert("Can´t get your Location");
	    }
	
	}

	function showPosition(position) {
	    
	    longitude  = position.coords.latitude;
	    latitude   = position.coords.longitude; 
	    
	    randing_map(canvas, longitude, latitude, markers);

	}
	
	function randing_map(canvas, lan, lat, markers){			

			myLatlng = new google.maps.LatLng(lan,lat); //new google.maps.LatLng(lan,lat);

			directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: markers}); //
			
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
			    icon     : "/assets/point.png"
			});	
			// Map Marker 1
			var marker1 = new google.maps.Marker({
			    position : start,
			    map      : map,
			    icon     : a
			});

			// Map Marker 2
			var marker2 = new google.maps.Marker({
			    position : waipt1,
			    map      : map,
			    icon     : b
			});

			// Map Marker 3
			var marker3 = new google.maps.Marker({
			    position : waipt2,
			    map      : map,
			    icon     : c
			});

			// Map Marker 4
			var marker4 = new google.maps.Marker({
			    position : end,
			    map      : map,
			    icon     : d
			});

			if(markers == false){
				marker1.setVisible(false);
				marker2.setVisible(false);
				marker3.setVisible(false);
				marker4.setVisible(false);
			}

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

		    $("#fb").on('click', function(){
		    	marker1.setVisible(false);
				marker2.setVisible(false);
				marker3.setVisible(false);
				marker4.setVisible(false);
				directionsDisplay.suppressMarkers = false;
				calcRoute();
			    directionsDisplay.setMap(map);
		    });

		    $("#go").on('click', function(){
		    	marker1.setVisible(true);
				marker2.setVisible(true);
				marker3.setVisible(true);
				marker4.setVisible(true);
				directionsDisplay.suppressMarkers = true;
				calcRoute();
			    directionsDisplay.setMap(map);
		    });

		    $("#be").on('click', function(){
		    	way = google.maps.TravelMode.WALKING;
				calcRoute();
			    directionsDisplay.setMap(map);
		    });

		    $("#rss").on('click', function(){
		    	way = google.maps.TravelMode.DRIVING;
				calcRoute();
			    directionsDisplay.setMap(map);
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

			//Call directions function and write the blue line//
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
	      travelMode: way
	  };

	  directionsService.route(request, function(response, status) {

	    	if (status == google.maps.DirectionsStatus.OK){
	    		directionsDisplay.setDirections(response);
	    	} else {
	    	    alert(status);
	    	}
	  });
	
	}

	// Fire action //
	google.maps.event.addDomListener(window, 'load', $.getloc());
	// Fire Action //

});	