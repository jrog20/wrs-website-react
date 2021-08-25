import React from 'react';
import './Posts.css'

class Post extends React.Component {
  render() {
    return (
      <div key={this.props.post.id} className='post-card'>
        <img src={this.props.post.images.url} alt='Post' className='post-image'></img>
        <h2>Title: {this.props.post.title}</h2>
        <h3>Date: {this.props.post.date}</h3>
        <p>Body: {this.props.post.body}</p>
      </div>
    )
  }
}

export default Post;
