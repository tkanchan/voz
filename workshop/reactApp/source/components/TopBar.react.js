var React = require('react');
var Search = require ('./Search.react');

var topBarStyle = {
	width: '100%',
	height: '50px',
	backgroundColor: 'rgba(33, 192, 192,0.9)',
	boxShadow: "0 0 5px 1px #888888"
};

var menuIconStyle = {
	fontSize: '20px',
	color: '#fff',
	paddingTop: '14px',
	paddingLeft: '8px',
	textAlign: 'center',
	cursor: 'pointer'
};

var TopBar = React.createClass({ 

	render: function () {
		return (
			<div className="topBar" style={topBarStyle} >
				<div className="col-xs-1"><span className="glyphicon glyphicon-menu-hamburger" style={menuIconStyle} aria-hidden="true" onClick={this.props.toggleListView}></span></div>
				<div className="col-xs-10"><Search searchFunction={this.props.search} /></div>
				<div className="col-xs-1"><span className="glyphicon glyphicon-search" style={menuIconStyle} aria-hidden="true"></span></div>
			</div>
		);
	}
 });

module.exports = TopBar;