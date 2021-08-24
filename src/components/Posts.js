import React from 'react';
import Post from './Post';

const Posts = ({ posts }) => (
  <div>
    <p>This is the Posts component</p>
    {/* This is how to render the image entered on the form */}
    {/* <p><img src={this.props.images[0].url}/></p> */}
    {/* <img src={props.post.images.url}> */}

    {/* MAYBE? {img_url={post.images.url} or add [0]? */}


    {/* { posts.map(post => <Post title={post.title} />)} */}
  </div>
);

export default Posts;