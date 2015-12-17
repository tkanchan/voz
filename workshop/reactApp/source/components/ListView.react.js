var React = require('react');
var Item = require ('./Item.react');

var listViewStyle = {
	width: '100%',
	height: 'auto',
	backgroundColor: '#fff',
	boxShadow: "0 0 5px 1px #888888",
	padding: "6px 6px 1px 6px"
};


var ListView = React.createClass({ 

	render: function () {
		return (
			<div className="list" style={listViewStyle} >
				{
					this.props.items.map(function(data) {
						return <Item key={data.name} data={data} />
					})
				}
			</div>
		);
	}
 });

module.exports = ListView;