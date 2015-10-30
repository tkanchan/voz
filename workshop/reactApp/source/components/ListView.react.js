var React = require('react');
var Item = require ('./Item.react');

var topBarStyle = {
	width: '100%',
	height: 'auto',
	backgroundColor: '#fff',
	boxShadow: "0 0 5px 1px #888888",
	padding: "6px 6px 1px 6px"
};


var TopBar = React.createClass({ 

	getInitialState: function() {
		return {
			items: this.props.items
		}
	},

	render: function () {
		return (
			<div className="list" style={topBarStyle} >
				{
					this.state.items.map(function(data) {
						return <Item key={data.title} data={data} />
					})
				}
			</div>
		);
	}
 });

module.exports = TopBar;