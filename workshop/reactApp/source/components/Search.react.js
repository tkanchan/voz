var React = require('react');

var searchStyle = {
	width: '100%',
	height: '24px',
	borderRadius: '20px',
	border: '1px solid #ccc',
	backgroundColor: 'rgba(255,255,255,0.90)',
	color: 'rgba(33, 192, 192, 1)'
};

var searchContainer = {
	paddingTop: '12px'
}

var Search = React.createClass({ 

	getInitialState: function() {
		return {
			searchKey: ''
		}
	},

	setInputValue: function(inputValue) {
		this.setState({
			searchKey: inputValue
		})
	},

	handleInputValueChange: function(event) {
		var inputValue = event.target.value;
         this.setInputValue(inputValue);
	},

	handleSubmit: function(event) {
		if (event.keyCode == 13) {
            this.props.searchFunction(this.state.searchKey);
            return false;
         }
	},

	render: function () {
		return (
			<div className="search" style={searchContainer}>
				<input type="text"  style={searchStyle} onChange={this.handleInputValueChange} onKeyDown={this.handleSubmit} value={this.state.inputValue} />
			</div>
		);
	}
 });

module.exports = Search;