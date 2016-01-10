import AppDispatcher from '../dispatcher/AppDispatcher';
import request from 'reqwest';

export default {
  savePost: function(name, fields, position) {
    request({
      url: '/voz/post',
      method: 'POST',
      crossOrigin: true,
      data: {
        name: name,
        fields: fields,
        location: position
      }
    }).then((res) => {
      AppDispatcher.dispatch({
        type: 'SENT_POST',
        post: {name: name, fields: fields, location: position}
      });
    });
  },
  getPosts: function() {
    request({
      url: '/voz/post',
      method: 'GET',
      crossOrigin: true
    }).then((res) => {
      AppDispatcher.dispatch({
        type: 'RECEIVED_POSTS',
        posts: res
      });
    });

    AppDispatcher.dispatch(action);
  }
}