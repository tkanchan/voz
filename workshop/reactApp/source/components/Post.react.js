var PostActions = require('../actions/PostActions');

var React = require('react');

var postStyle = {
	margin: '30px 15px',
	padding: '35px',
	height: '200px',
	width: '50%',
	borderRadius: '0 0 20px 20px',
	backgroundColor: 'rgba(33, 192, 192,0.9)',
	boxShadow: "0 0 5px 1px #888888",
	display: 'block',
	position: 'absolute',
	bottom: '0'
};

var buttonStyle = {
	fontSize: '20px',
	color: '#fff',
	top: '-25',
	right: '0',
	position: 'absolute',
	cursor: 'pointer'
};

var postInput = {
	width: '100%'
}

var fieldsContainer = {
	width: '50%',
	backgroundColor: 'rgba(255, 255, 255, .8)',
	padding: '10px',
	borderRadius: '20px 20px 0 0',
	display: 'block',
	position: 'absolute',
	bottom: '200px',
	margin: '30px 15px'
}

var geoButton = {

}

var addFieldButton = {
	width: '50%'
}

var submitButton = {
	color: 'rgba(33, 192, 192, 1)'
}

var Post = React.createClass({ 

	getInitialState: function() {
		return {
			name: '',
			fields: new Array(),
			newFieldKey: '',
			newFieldValue: '',
			newLocation: '',
			locationStatus: ''
		}
	},

	handleNameChange: function(event) {
		var inputValue = event.target.value;
        this.setState({
			name: inputValue
		})
	},

	addField: function() {
		if(this.state.newFieldKey.length  > 0 && this.state.newFieldValue.length > 0){
			var fields = this.state.fields;
			fields.push({key: this.state.newFieldKey, value: this.state.newFieldValue});
			this.setState({
				fields: fields,
				newFieldKey: '',
				newFieldValue: ''
			});
		}
	},

	handleAddField: function(event) {
		if (event.keyCode == 13) {
            this.addField();
            this.refs.key.focus();
            return false;
        }
	},

	handleNewFieldKeyChanged: function(event) {
		var inputValue = event.target.value;
		this.setState({
			newFieldKey: inputValue
		});
	},

	handleNewFieldValueChanged: function(event) {
		var inputValue = event.target.value;
		this.setState({
			newFieldValue: inputValue
		});
	},

	submit: function() {
		if(this.state.newLocation.length == 0) {
			var latitude = (Math.random() *1.2 + 38.9001899999);
			var longitude = (Math.random() *1.2 + -77.0276488);
			var loc = {lat: latitude, lng: longitude};
		} else {
			var loc = this.state.newLocation;
		}
		
		if(this.state.name.length > 0 && this.state.fields.length > 0){
			PostActions.savePost(this.state.name, this.state.fields, loc);
			this.setState({
				name: '',
				fields: new Array(),
				newFieldKey: '',
				newFieldValue: '',
				newLocation: ''
			});
		}
	},

	handleSubmit: function(event) {
		if (event.keyCode == 13) {
            submit();
            return false;
        }
	},

	getPosition: function(position) {
    	this.setState({
    		newLocation: {lat: position.coords.latitude, lng: position.coords.longitude}
    	});
    	console.log(position + err);
    },

    getPositionError: function(err) {
    	console.log(err.message);
    },

	geolocate: function(event) {
		function getPosition(position) {

		};
		if (navigator.geolocation) {
	        navigator.geolocation.watchPosition(this.getPosition, this.getPositionError);
	    } else {
	    	console.log("fsdfdsf");
	        this.refs.getButton.innerHTML = "Not supported.";
    	}
	},

	render: function () {
		return (
			<div>
				<div style={postStyle}>
					<div style={{position: 'relative'}}>
						<span className="glyphicon glyphicon-minus" style={buttonStyle} aria-hidden="true" onClick={this.props.hidePostView}></span>
						<input type="text" placeholder="Name" style={postInput} onChange={this.handleNameChange} value={this.state.name} />
						<input type="text" placeholder="Key" ref="key"  style={postInput} onChange={this.handleNewFieldKeyChanged} onKeyDown={this.handleAddField} value={this.state.newFieldKey} />
						<input type="text" placeholder="Value"  style={postInput} onChange={this.handleNewFieldValueChanged} onKeyDown={this.handleAddField} value={this.state.newFieldValue} />
						<button type="button" style={addFieldButton} onClick={this.addField}>Add Field</button>
						<button type="button" style={submitButton} onClick={this.submit}>Post</button>
						<button type="btn btn-default" ref="geoButton" style={geoButton} onClick={this.geolocate}>Use current Location</button>
					</div>
				</div>
				<div style={fieldsContainer}>
					<h3 className="text-center">Fields</h3>
					{this.state.fields.length == 0 ? <span className="center-text"> Add fields below. </span> : ''}
					{this.state.fields.map(function(field) {
						return (
							<div key={field.value + field.key}>
								<span><b>{field.key}</b>: </span><span>{field.value}</span>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
 });

module.exports = Post;