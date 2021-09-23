import React from 'react';
import './Posts.css';

class Post extends React.Component {

  // constructor() {
  //   super()
  //   this.state = {
  //     liked: 0
  //   };
  // }

  // handleOnClick = () => {
  //   this.setState({liked: this.state.liked +1})
  // }

  render() {
    return (
      <div key={this.props.post.id} className='post-card'>
        {this.props.post.images ?
          <img src={this.props.post.images.url} alt='Post' className='post-image'></img>
          : null
        }
        <h2>{this.props.post.title}</h2>
        <h3>{this.props.post.date}</h3>
        <p>{this.props.post.body}</p>
        {/* <button onClick={this.handleEditClick}>Edit</button> */}
        {/* <button onClick={this.handleOnClick}>Like</button>
        <p>Current number of likes: {this.state.liked}</p> */}
      </div>
    )
  }
}

export default Post;
