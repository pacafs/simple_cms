jQuery(function($){

	var directionsDisplay;
	var directionsService = new google.maps.DirectionsService();

	// var a = "/assets/piano6.png";
	// var b = "/assets/fork28.png";
	// var c = "/assets/cocktail22.png";
	// var d = "/assets/mirrors.png";

	var longitude;
	var latitude;
	var canvas = "map";
	var myLatlng;
	var infobox;
	// 	Options buttons variables //
	var markers = true;
	var way = google.maps.TravelMode.DRIVING;
	// 	Options buttons variables //
	var mycontent = '<div class="infobox"><h2 style="color:white;">Title</h2><iframe width="560" height="315" src="//www.youtube.com/embed/re4_9blE4ts" frameborder="0" allowfullscreen></iframe><br /><p>Description</p></div>';


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
				maxZoom: 20,
				disableDefaultUI: true,
				panControl: true,
			    zoomControl: true,
			    scaleControl: false,
				mapTypeControl: false,
				streetViewControl: false,
				overviewMapControl: true
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
			      { saturation: 20 },
			      { hue: "#4EBADB" }
			    ]
			  },{
			    featureType: "road.arterial",
			    elementType: "geometry",
			    stylers: [
			      { hue: "#00ffee" },
			      { saturation: -50 }
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

			// InfoBox // 
			infobox = new InfoBox({
		         content: mycontent,
		         disableAutoPan: false,
		         maxWidth: 500,
		         pixelOffset: new google.maps.Size(-140, 5),
		         zIndex: null,
		         boxStyle: {
		            background: "url('http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/examples/tipbox.gif') no-repeat",
		            opacity: 0.90,
		            width: "280px",
		        },
		        closeBoxMargin: "12px 4px 2px 2px",
		        closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif",
		        infoBoxClearance: new google.maps.Size(1, 1)
    		});

			// Marker clicks Events //	
			google.maps.event.addListener(marker1, 'click', function() {
			  // infowindow.setContent(content1);
			  // infowindow.open(map,marker1);
			  infobox.open(map, this);
			});
			google.maps.event.addListener(marker2, 'click', function() {
			  // infowindow.setContent(content2);
			  // infowindow.open(map,marker2);
			  infobox.open(map, this);
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
			    map.setCenter(start);
			});

			//Call directions function and write the blue line//
			calcRoute();
			directionsDisplay.setMap(map);
			directionsDisplay.setPanel(document.getElementById('directions-panel'));
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




