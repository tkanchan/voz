/* 
	Marker object should have the following: 
	- title
	- properties
	- media(url)
	- mapMarker

	+ constructor(title, properties[], image)
	+ get mapMarker(): Marker(google)
*/

import cloudinary from 'cloudinary';

export class Voice {

	constructor(title, ...properties, image) {
		this.title = title;
		//for every property insert into this.properties
		this.image = image;
		//upload to cloudinary

		this.content = null; //set content to div thing to html from title etc. 

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