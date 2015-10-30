var React = require('react');

var itemStyle = {
	padding: "2px",
	border: "1px solid #ccc",
	borderRadius: "5px",
	marginBottom: "6px"
};


var TopBar = React.createClass({ 

	getInitialState: function() {
		return {
			data: this.props.data
		}
	},

	render: function () {
		return (
			<div className="item" style={itemStyle} >
				<h4>{this.state.data.title}</h4>
			</div>
		);
	}
 });

module.exports = TopBar;