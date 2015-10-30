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

	render: function () {
		return (
			<div className="search" style={searchContainer}>
				<input type="text"  style={searchStyle} />
			</div>
		);
	}
 });

module.exports = Search;