import React from 'react';

function Posts(props) {
  console.log(props)
  return (
    <div className='posts'>
      <p>This is the Posts component</p>
      {/* This is how to render the image entered on the form */}
      {/* <p><img src={this.props.image.url}/></p> */}
    </div>
  );
}

export default Posts;