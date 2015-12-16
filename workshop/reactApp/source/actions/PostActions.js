import AppDispatcher from '../dispatcher/AppDispatcher';

export default {
  savePost: function(name, fields, position) {
    var action = {
      type: 'SENT_POST',
      post: {name: name, fields: fields, location: position}
    }

    AppDispatcher.dispatch(action);
  },
  getPosts: function() {
    var action = {
      type: 'RECEIVED_POSTS',
      posts: [
    {
      name: "Tamal",
      fields: [{key: "Food", value: "Tamal"}],
      location: {lat: 38.9001899999, lng: -77.0276488}
    },
    {
      name: "Flan",
      fields: [{key: "Food", value: "Flan"}],
      location: {lat: 40, lng: -80}
    }]
    }

    AppDispatcher.dispatch(action);
  }
}