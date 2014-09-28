jQuery(function($){

	var longitude = 41.182338;
	var latitude = -8.653831;
	var canvas = "map";
	
	function randing_map(canvas, lan, lat){			

			var myLatlng = new google.maps.LatLng(lan,lat);
			
			var myOptions = {
						zoom: 17,
						center: myLatlng,
						mapTypeId: google.maps.MapTypeId.ROADMAP,
						maxZoom   : 20,
    					disableDefaultUI: true,
    					panControl: true
					}			
			var map = new google.maps.Map( document.getElementById(canvas), myOptions );
			
			// Map Marker
			var marker = new google.maps.Marker({
			    position : myLatlng,
			    map      : map,
			    icon     : "img/point.png"
			});

			// Map Marker
			var marker2 = new google.maps.Marker({
			    position : myLatlng,
			    map      : map,
			    icon     : "img/point.png"
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
			
			var infowindow = new google.maps.InfoWindow({
				content:"<div class='map_adresse'><div class='map_address'><span class='address'>Address : </span>1401 South Grand Avenue Los Angeles, CA 90015</div> <div class='map_tel'><span class='tel'>Phone : </span>(213) 748-2411</div></div>"
			});	
			
			map.setOptions({styles: styles});

			google.maps.event.addListener(marker, 'click', function() {
			  infowindow.open(map,marker);
			});

			google.maps.event.addListener(map, 'zoom_changed', function() {
			    var zoomLevel = map.getZoom();
			    map.setCenter(myLatlng);
				});

			var homeControlDiv = document.getElementById('panel');

			google.maps.event.addDomListener(homeControlDiv, 'click', function() {
			  map.getStreetView().setOptions({visible:true,position:chicago});
			});

	}


	randing_map(canvas, longitude, latitude);

});



////////////////////////////////////////


// var x = document.getElementById("demo");

// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//         x.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }

// function showPosition(position) {
//     x.innerHTML = "Latitude: " + position.coords.latitude + 
//     "<br>Longitude: " + position.coords.longitude; 
// }




// var longitude = 41.199126899999996;
// var latitude = -8.7107048;
// var directionsDisplay;
// var directionsService = new google.maps.DirectionsService();
// var map;
// // Locations
// var chicago = new google.maps.LatLng(41.199126899999996, -8.7107048);
// var home = new google.maps.LatLng(41.182338, -8.653831);

// function initialize() {

//   getLocation();

//   directionsDisplay = new google.maps.DirectionsRenderer();
  
//   getLocation();
  
//   var mapOptions = {
//     zoom:17,
//     center: chicago
//   };
  
//   map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
//   directionsDisplay.setMap(map);

//   //Map Marker

// 	var marker = new google.maps.Marker({
// 	    position : chicago,
// 	    map      : map,
// 	    icon     : "img/point.png"
// 	});
  
//   //Map Styles

// 	var styles = [
// 	  {
// 	    featureType: "all",
// 	    stylers: [
// 	      { saturation: -80 }
// 	    ]
// 	  },{
// 	    featureType: "road.arterial",
// 	    elementType: "geometry",
// 	    stylers: [
// 	      { hue: "#00ffee" },
// 	      { saturation: 50 }
// 	    ]
// 	  },{
// 	    featureType: "poi.business",
// 	    elementType: "labels",
// 	    stylers: [
// 	      { visibility: "off" }
// 	    ]
// 	  }
// 	];	

// 	map.setOptions({styles: styles});
// }

// function calcRoute() {
//   var start = document.getElementById('start').value;
//   var end = document.getElementById('end').value;
//   var request = {
//       origin:chicago,
//       destination:end,
//       travelMode: google.maps.TravelMode.DRIVING
//   };
//   directionsService.route(request, function(response, status) {
//     if (status == google.maps.DirectionsStatus.OK) {
//       directionsDisplay.setDirections(response);
//     }
//   });
// }

// google.maps.event.addDomListener(window, 'load', initialize);