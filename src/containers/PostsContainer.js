import React, { Component } from 'react';
import Post from '../components/Post';
import { Link } from 'react-router-dom';
 

class PostsContainer extends Component {

  constructor() {
    super()
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/posts')
      .then(response => response.json())
      .then(postData => {
        console.log(postData)
        this.setState({
          posts: postData
        })
      })
  }

  handleEditClick = () => {
    this.setState(prevState => 
      ({ title: prevState.title 
    })); 
  }

  postCards = () => {
    return this.state.posts.map(post => {
      return <Post post={post} key={post.id} onClick={this.handleEditClick} />
    })
  }

  render() {
    return (
      <div className='post-container'>
        {this.postCards()}
      </div>
    )
  }
}

export default PostsContainer;
