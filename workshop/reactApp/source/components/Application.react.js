var React = require('react');
var TopBar = require('./TopBar.react');
var AddButton = require('./AddButton.react');
var ListView = require('./ListView.react');
var Post = require('./Post.react');
var PostStore = require('../stores/PostStore');
var PostActions = require('../actions/PostActions');

var Application = React.createClass({ 

	getInitialState: function() {
		return {
			listViewShown: false,
			addPostViewShown: false,
			items: PostStore.getPosts()
		}
	},

	componentDidMount: function() {
		PostActions.getPosts();
		PostStore.addChangeListener(this.onPostsChange);
	},

	componentWillUnmount: function() {
		PostStore.removeChangeListener(this.onPostsChange);
	},

	onPostsChange: function() {
		this.setState({
			items: PostStore.getPosts(),
		});
	},

	showListView: function() {
		//PostActions.getPosts();
		this.setState({
			listViewShown: (this.state.listViewShown) ? false : true
		});
	},

	showPostView: function() {
		this.setState({
			addPostViewShown: true
		});
	},

	hidePostView: function() {
		this.setState({
			addPostViewShown: false
		});
	},

	hideListView: function() {
		this.setState({
			listViewShown: false
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
			items: PostStore.getPosts().filter(function (element) {
				return element.name.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
			})
		});
	},

	render: function () {
		document.getElementById('map').addEventListener("click", this.hideListView);
		document.getElementById('map').addEventListener("click", this.hidePostView);
		if (this.state.listViewShown) {
			return (
				<div className="root">
					<TopBar search={this.search} toggleListView={this.showListView} />
					<ListView items={this.state.items} />
				</div>
			);
		}
		return (
			<div className="root">
				<TopBar search={this.search} toggleListView={this.showListView} />
				{this.state.addPostViewShown ? <Post hidePostView={this.hidePostView} /> : <AddButton showPosts={this.showPostView}/>}
			</div>
		);
	}
 });

module.exports = Application;