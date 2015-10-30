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

var imStyle = {
	height: "70px",
	padding: "2px",
	paddingTop: "2px",
	width: "70px",
	marginBottom: "6px",
	borderRadius: "100%",
	textAlign: 'center'
}

var imageStyle = {

}

var container = {
	display: "inline-block",
	width: "100%"
}

var TopBar = React.createClass({ 

	getInitialState: function() {
		return {
			data: this.props.data,
			image: (this.props.data.image) ? this.props.data.image : "http://www.rigathisweek.lv/image/7e1518a5.70c3fb494"
		}
	},

	render: function () {
		return (
			<div style={container} >

				<div className="col-xs-2" style={imageStyle} >
					<image style={imStyle} src={this.state.image} />
				</div>

				<div className="col-xs-10" style={itemStyle} >
					<h4>{this.state.data.title}</h4>
					{
						this.state.data.properties.map(function(prop) {
							return (
									<p style={propStyle}>{prop.prop} | {prop.val}</p>
								);
						})
					}
					
				</div>
			</div>
		);
	}
 });

module.exports = TopBar;