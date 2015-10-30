var React = require('react');
var ReactDOM = require('react-dom');
var Application = require('./components/Application.react');

var mapsapi = require( 'google-maps-api' )( 'AIzaSyBWhH-uk71JNIke2Qan2DD7WROEZ8bBnx4' );

var map;

var googleMaps;

mapsapi().then( function( maps ) {

	googleMaps = google.maps;

	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -34.397, lng: 150.644},
		zoom: 8,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var marker = new google.maps.Marker({
		position: {lat: -34.397, lng: 150.644},
		map: map,
		title: 'Hello World!'
	});

});

ReactDOM.render(<Application />, document.getElementById('react-application'));

