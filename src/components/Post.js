import React from 'react';
import './Posts.css';

class Post extends React.Component {

  constructor() {
    super()
    this.state = {
      liked: 0
    };
  }

  handleOnClick = () => {
    this.setState({liked: this.state.liked +1})
  }

  render() {
    const categories = this.props.post.categories
    return (
      <div key={this.props.post.id} className='post-card'>
        {this.props.post.images ?
          <img src={this.props.post.images.url} alt='Post' className='post-image'></img>
          : null
        }
        <h2>Title: {this.props.post.title}</h2>
        <h3>Date: {this.props.post.date}</h3>
        <p>{this.props.post.body}</p>
        Categories: 
        {/* {this.props.post.categories} */}
        {categories.map((category) => 
        <li key={category.id}>{category}</li>)}
        
        <button onClick={this.handleOnClick}>liked</button>
        <p>Current number of likes: {this.state.liked}</p>
      </div>
    )
  }
}

export default Post;
