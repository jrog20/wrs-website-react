import React, { Component } from 'react';
import PostForm from '../components/PostForm';
import Posts from '../components/Posts';

class PostsContainer extends Component {
  render() {
    return (
      <div>
        <PostForm />
        <p>RENDER POST COMPONENT HERE - AND ADD ABILITY TO DELETE A POST</p>
        <Posts props={this.state}/>
      </div>
    );
  }
}

export default PostsContainer;
