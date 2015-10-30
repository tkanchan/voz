var React = require('react');
var TopBar = require('./TopBar.react');
var AddButton = require('./AddButton.react');

var Application = React.createClass({ 

	render: function () {
		return (
			<div className="root">
				<TopBar />
				<AddButton style="position: fixed; bottom: 0;"/>
			</div>
		);
	}
 });

module.exports = Application;