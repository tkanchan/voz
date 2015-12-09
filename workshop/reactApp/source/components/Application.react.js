var React = require('react');
var TopBar = require('./TopBar.react');
var AddButton = require('./AddButton.react');
var ListView = require('./ListView.react');

var items = [
		{
			title: "Tamal",
			properties: [{prop: "Food", val: "Tamal"}],
			image: "http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2011/11/14/0/FNM_120111-Tamale-Festival-007_s4x3.jpg.rend.sni12col.landscape.jpeg"
		},
		{
			title: "Flan",
			properties: [{prop: "Dessert", val: "Flan"}], 
			image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flan_en_Potes.jpg/1280px-Flan_en_Potes.jpg"
		},
		{
			title: "Churro",
			properties: [{prop: "Dessert", val: "Churro"}],
			image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Multitud_de_churros.jpg"
		},
		{
			title: "Creme Brulee",
			properties: [{prop: "Dessert", val: "Creme Bruelee"}],
			image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Creme_brulee.jpg/1920px-Creme_brulee.jpg"
		},
		{
			title: "Marizpan",
			properties: [{prop: "Dessert", val: "Marizpan"}],
			image: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Marzipanfr%C3%BCchte.jpg"		
		},
		{
			title: "Pinchos",
			properties: [{prop: "Snacks", val: "Pinchos"}],
			image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Pinchos_laguardia.jpg/1920px-Pinchos_laguardia.jpg"		
		},
		{
			title: "Empanada",
			properties: [{prop: "Food", val: "Empanada"}],
			image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Empanada_-_Stu_Spivack.jpg/1920px-Empanada_-_Stu_Spivack.jpg"
		},
		{
			title: "Mollete",
			properties: [{prop: "Food", val: "Mollete"}],
			image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Mollete.jpg/1920px-Mollete.jpg"
		}];

var Application = React.createClass({ 

	getInitialState: function() {
		return {
			listViewShown: false,
			items: items
		}
	},

	showListView: function() {
		this.setState({
			listViewShown: (this.state.listViewShown) ? false : true
		});
	},

	search: function(searchKey) {
		// if (searchKey.length > 0){
		// 	this.setState({
		// 		listViewShown: true
		// 	});
		// }

		this.setState({
			listViewShown: true,
			items: items.filter(function (element) {
				return element.title.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
			})
		});
	},

	render: function () {
		if (this.state.listViewShown) {
			return (
				<div className="root">
					<TopBar search={this.search} toggleListView={this.showListView} />
					<ListView items={this.state.items} />
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