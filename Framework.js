export class Framework {

  	constructor() {
  		this.map = new google.maps.Map(document.getElementById('map'), {
		    zoom: 10,
		    center: {lat: -33.9, lng: 151.2}
	  	});

	  	this.voices[] = null;

	  	this.json = "voices.json"; //read json

	  	this._location_ = { lat: null, lng: null} //set latitude and longitude of location

  	}

  	addVoice(title, ...props, image) {
  		
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