/* 
	Marker object should have the following: 
	- title
	- properties
	- media(url)
	- mapMarker

	+ constructor(title, properties[], image)
	+ get mapMarker(): Marker(google)
*/

import Cloudinary from 'cloudinary';
import google from 'google-maps';

export class Voice {

	constructor(title, image, props, location, map) { //location must be object like: {lat: -33.890, lng: 151.274}
		this.title = title;
		//for every property insert into this.properties
		this.image = image;
		//upload to cloudinary

		this.content = null; //set content to div thing to html from title etc.

		this.marker = new google.maps.Marker({
			position: location,
			map: map,
			animation: google.maps.Animation.DROP,
			icon: image
		}); 
	}

	get mapMarker() {
		return this.marker;
	}

	get content() {
		return this.content;
	}

	get pinImage() {
		return this.pinImage;
	}

	get image(widht, height) {
		return //Implement cloudinary with correct image size.
	}


}