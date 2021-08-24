import React from 'react';

class Post extends React.Component {
  render() {
    return (
      // <div key={post.id}>
      <div>
        <h2>Title: {this.props.post.title}</h2>
        <h2>Date: {this.props.post.date}</h2>
        <p>Body: {this.props.post.body}</p>
      </div>
    )
  }
}

export default Post;
