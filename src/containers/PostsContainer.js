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

  postCards = () => {
    return this.state.posts.map((post) => {
      // <Link key={post.id} to={`/posts/${post.id}`}>
      //   <Post post={post} key={post.id} />
      // </Link>
      return <Post post={post} key={post.id} />
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
