var React = require('react');
var TopBar = require('./TopBar.react');
var AddButton = require('./AddButton.react');
var ListView = require('./ListView.react');

var items = [
		{
			title: "For sale!",
			properties: [{prop: "Name", val: "Tamal"}],
			image: "http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2011/11/14/0/FNM_120111-Tamale-Festival-007_s4x3.jpg.rend.sni12col.landscape.jpeg"
		},
		{
			title: "Food!",
			properties: [{prop: "Name", val: "Taco"}, {prop: "Price", val: "$12/ea."}]
		}];

var Application = React.createClass({ 

	getInitialState: function() {
		return {
			listViewShown: false
		}
	},

	showListView: function() {
		this.setState({
			listViewShown: (this.state.listViewShown) ? false : true
		});
	},

	search: function(searchKey) {
		console.log(searchKey); //implement searching have a default dataset and a searched/filtered dataset
	},

	render: function () {
		if (this.state.listViewShown) {
			return (
				<div className="root">
					<TopBar search={this.search} toggleListView={this.showListView} />
					<ListView items={items} />
					<AddButton />
				</div>
			);
		}
		return (
			<div className="root">
				<TopBar search={this.search} toggleListView={this.showListView} />
				<AddButton />
			</div>
		);
	}
 });

module.exports = Application;