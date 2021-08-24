import React from 'react';

class Post extends React.Component {
  render() {
    return (
      <div key={this.props.post.id}>
        <img src={this.props.post.images.url} alt="Post"></img>
        <h2>Title: {this.props.post.title}</h2>
        <h3>Date: {this.props.post.date}</h3>
        <p>Body: {this.props.post.body}</p>
        <p>{this.props.post.categories ? this.props.post.categories : null }</p>
      </div>
    )
  }
}

export default Post;
