var React = require('react');
var ReactDOM = require('react-dom');
var Application = require('./components/Application.react');

var mapsapi = require( 'google-maps-api' )( 'AIzaSyBWhH-uk71JNIke2Qan2DD7WROEZ8bBnx4' );

var map;

mapsapi().then( function( maps ) {

	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 38.9001899999, lng: -77.0276488},
		zoom: 8,
		disableDefaultUI: true
	});

	  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Flan</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Flan</b>, is a rich custard desert with ' +
      'a layer of soft caramel on top.' + 
      'Originating from the Spanish and French culture, this pastry has become very popular amongst Americans.</p>' +
      '(last visited October 30, 2015).</p> <p>Review: This is a great dessert!!</p><p style="color: green;"> <b>score:</b> 96%</p>'+
      '</div>'+
      '</div>';

	var infowindow = new google.maps.InfoWindow({
    	content: contentString
  	});

	var marker = new google.maps.Marker({
		position: {lat: 38.9001899999, lng: -77.0276488},
		map: map,
		title: 'Hello World!'
	});

	marker.addListener('click', function() {
    	infowindow.open(map, marker);
  	});

});

ReactDOM.render(<Application />, document.getElementById('react-application'));

