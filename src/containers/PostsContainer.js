import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import PostForm from '../components/PostForm';
import Post from '../components/Post';


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
      return <Post post={post} key={post.id} />
    })
  }

  render() {
    return <div>{this.postCards()}</div>
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
