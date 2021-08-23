import React, { Component } from 'react';
// import { connect } from 'react-redux'
import PostForm from '../components/PostForm';
import Posts from '../components/Posts';

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
        this.setState({
          posts: postData.posts
        })
      })
  }

  // componentDidMount() {
  //   fetch('http://localhost:3001/posts', {
  //     method: 'GET',
  //     // headers: {
  //       // 'Content-Type': 'multipart/form-data'
  //       // 'Accept': 'application/json'
  //     // },
  //     // body: JSON.stringify({post: this.state})
  //     // body: postData
  //   })
  //   .then(postData => this.setState({ posts: postData.posts }))
  //   .catch(error=>console.log(error));
  //   // fetch('http://localhost:3001/posts')
  //   //   .then(response => response.json())
  //   //   .then(postData => this.setState({ posts: postData.posts }))
  // }

  render() {
    return (
      <div>
        <PostForm />
        <p>RENDER POSTS COMPONENT HERE - AND ADD ABILITY TO DELETE A POST</p>
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     posts: state.posts
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   addPost: post => dispatch({ type: 'ADD_POST', post })
// })

// export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer); 
export default PostsContainer;
