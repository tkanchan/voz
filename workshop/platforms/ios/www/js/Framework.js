import Voice from './Voice';

export class Framework {

  	constructor() {

	  	this.voices[] = null;

	  	this.json = "voices.json"; //read json

	  	this._location_ = { lat: null, lng: null} //set latitude and longitude of location

      this.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: this._location_ //get the user's location and set that as the center of the map
      });

  	}

  	addVoice(title, image, props) {
  		this.voices.push(new Voice(title, image, props, this._location_, this.map));

  		//DROP animation on marker in map
  	}

  	removeVoice() {
  		//find maker from passed index
  		//actually remove found marker with marker.setMap(null);
  	}

  	get location() {
  		return this._location_;
  	}

  	set location(lat, long) {
  		this._location_ = {lat, long};
  	}

}