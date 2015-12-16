var React = require('react');

var itemStyle = {
	padding: "2px",
	border: "1px solid #ccc",
	borderRadius: "5px",
	marginBottom: "6px"
};

var propStyle = {
	color: "#aaa"
}

var imageStyle = {

}

var container = {
	display: "inline-block",
	width: "100%"
}

var TopBar = React.createClass({ 

	render: function () {
		return (
			<div style={container} >

				<div className="col-xs-10" style={itemStyle} >
					<h4>{this.props.data.name}</h4>
					{
						this.props.data.fields.map(function(prop) {
							return (
									<p key={prop.value} style={propStyle}>{prop.key} | {prop.value}</p>
								);
						})
					}
					
				</div>
			</div>
		);
	}
 });

module.exports = TopBar;