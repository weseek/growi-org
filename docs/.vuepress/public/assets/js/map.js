$(function () {

    function initMap() {

        var location = new google.maps.LatLng(35.700013, 139.748047);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 16,
            panControl: false,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var markerImage = 'images/marker.png';

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: markerImage
        });

        var contentString = '<div class="info-window">' +
                '<h4>GROWI, Inc.</h4>' +
                '<div class="info-content">' +
                '<p>あそびにきてね</p>' +
                '</div>' +
                '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });

        var styles = [{
          "featureType": "landscape",
          "stylers": [{
            // "saturation": -100
          }, {
            // "lightness": 65
          }, {
            "visibility": "on"
          }]
        }, {
          "featureType": "poi",
          "stylers": [{
            "saturation": -100
          }, {
            "lightness": 51
          }, {
            "visibility": "off"
          }]
        }, {
          "featureType": "road.highway",
          "stylers": [{
            // "saturation": -100
          }, {
            "visibility": "simplified"
          }]
        }, {
          "featureType": "road.arterial",
          "stylers": [{
            // "saturation": -100
          }, {
            // "lightness": 30
          }, {
            "visibility": "on"
          }]
        }, {
          "featureType": "road.local",
          "stylers": [{
            // "saturation": -100
          }, {
            // "lightness": 40
          }, {
            "visibility": "on"
          }]
        }, {
          "featureType": "transit",
          "stylers": [{
            // "saturation": -100
          }, {
            "visibility": "simplified"
          }]
        }, {
          "featureType": "administrative.province",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "water",
          "elementType": "labels",
          "stylers": [{
            "visibility": "on"
          }, {
            // "lightness": -25
          }, {
            // "saturation": -100
          }]
        }, {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "hue": "#ffff00"
          }, {
            // "lightness": -25
          }, {
            // "saturation": -97
          }]
        }];


        map.set('styles', styles);


    }

    google.maps.event.addDomListener(window, 'load', initMap);
});
