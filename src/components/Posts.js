import React from 'react';

function Posts() {
  // console.log(props)
  return (
    <div className='posts'>
      <p>This is the Posts component</p>
      {/* This is how to render the image entered on the form */}
      {/* <p><img src={this.props.images[0].url}/></p> */}
      {/* <img src={props.post.images.url}> */}

    </div>
  );
}

export default Posts;