var React = require('react');

var buttonStyle = {
	fontSize: '20px',
	color: '#fff',
	paddingTop: '14px',
	paddingLeft: '15px'
};

var backgroundStyle = {
	margin: '30px 15px',
	height: '50px',
	width: '50px',
	borderRadius: '100%',
	backgroundColor: 'rgba(33, 192, 192,0.9)',
	boxShadow: "0 0 5px 1px #888888",
	display: 'block',
	position: 'absolute',
	bottom: '0',
	cursor: 'pointer'
}

var AddButton = React.createClass({ 

	render: function () {
		return (
			<div className="addButton" style={backgroundStyle} onClick={this.props.showPosts}>
				<span className="glyphicon glyphicon-plus" style={buttonStyle} aria-hidden="true"></span>
			</div>
		);
	}
 });

module.exports = AddButton;