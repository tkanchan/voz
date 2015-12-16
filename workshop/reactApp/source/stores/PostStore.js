'strict mode'

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var mapsapi = require( 'google-maps-api' )( 'AIzaSyBWhH-uk71JNIke2Qan2DD7WROEZ8bBnx4' );
var map;
mapsapi().then( function( maps ) {
	map = new google.maps.Map(document.getElementById('map'), {
				center: {lat: 38.9001899999, lng: -77.0276488},
				zoom: 8,
				disableDefaultUI: false
			});
});

var posts = null;
var markers = new Array()

function setPost(receivedPosts) {
	posts = receivedPosts;
	mapsapi().then( function( maps ) {

		receivedPosts.map(function(post) {

			var fields = "";

			post.fields.map(function(field) {
				fields = fields + "<p><b>"+field.key+"</b>: "+field.value+"</p>";
			});

			var contentString = '<div id="content">'+
			'<div id="siteNotice">'+
			'</div>'+
			'<h1 id="firstHeading" class="firstHeading">'+ post.name +'</h1>'+
			'<div id="bodyContent">'+ fields +
			'<p style="color: green;"> latitude: '+post.location.lat+', longitude: ' +post.location.lng+'</p>'+
			'</div>'+
			'</div>';

			var infowindow = new google.maps.InfoWindow({
				content: contentString
			});

			var marker = new google.maps.Marker({
				position: {lat: post.location.lat, lng: post.location.lng},
				map: map,
				title: post.name
			});

			marker.addListener('click', function() {
				infowindow.open(map, marker);
			});

		});

		
	});
}

function emitChange() {
	PostStore.emit('change');
}

var PostStore = assign({}, EventEmitter.prototype, {

	addChangeListener: function (callback) {
		this.on('change', callback)
	},

	removeChangeListener: function (callback) {
		this.removeListener('change', callback);
	},

	getPosts: function() {
		return posts;
	}
});

function handleAction(action) {
	if (action.type === 'RECEIVED_POSTS') {
		setPost(action.posts);
		emitChange();
	} else if (action.type ==='SENT_POST') {
		var allPosts = posts;
		allPosts.push(action.post);
		setPost(allPosts);
		emitChange();
	}
}

PostStore.dispatchToken = AppDispatcher.register(handleAction);

module.exports = PostStore;