import React, { Component } from 'react';

// This component should stay in React. No need for Redux
class PostForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      date: '',
      tags: [],
      categories: ['Cat1', 'Cat2', 'Cat3', 'Cat4'],
      // for one image = image: null
      // for multiple images, should it be an empty array?
      images: []
    }
    console.log(this.state);
  }


  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  // Do I need to change this for multiple images entered for one post?
  onImageChange = event => { 
    this.setState({ images: event.target.files[0] });
  };

  handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', this.state.title);
    formData.append('body', this.state.body);
    formData.append('date', this.state.date);
    formData.append('tags', this.state.tags);
    formData.append('categories', this.state.categories);
    formData.append('images', this.state.images);
    fetch('http://localhost:3001/posts', {
      method: 'POST',
      body: formData
    })
    .catch(error=>console.log(error));
    console.log(formData);
  }
  
  render () {
    console.log(this.state);
    return (
      <div className="Post">
        <form onSubmit={this.handleSubmit} >
          <label>Post Title: </label>
          <input 
            type="text" 
            name="title" 
            placeholder="Title" 
            onChange={this.handleChange}
          /><br/>
          <label>Post Description: </label>
          <textarea 
            type="textarea" 
            name="body" 
            placeholder="Post Text" 
            onChange={this.handleChange}
          /><br/>
          <label>Date: </label>
          <input 
            type="text" 
            name="date" 
            placeholder="Date" 
            onChange={this.handleChange}
          /><br/>
          <label>Select an image to add to this Post: </label>
          <input 
            type="file" 
            placeholder="image" 
            accept="image/*" 
            multiple={true} 
            onChange={this.onImageChange} 
          /><br/>
          {/* Can add categories (10 or less options) and tags here later */}
          {/* <label>
            Select all appropriate categories: 
          </label>
            <select multiple={true} value={this.state.categories} onChange={this.handleChange}></select> */}
          <br></br>
          <input 
            type="submit" 
            value="Submit" 
          />
        </form>
        <p>Testing Rendering 'Posts' component info here: </p>
        <p>New Post</p>
          <p>Title: {this.state.title} </p>
          <p>Body: {this.state.body} </p>
          <p>{this.state.images.url} ?
            <img src={this.state.images.url} alt="wrs post"/> : 
            "No image available" 
          </p>
          <img src={this.state.images[0]} alt="wrs post"/>
          {/* <p>if({this.state.images.url}) </p> */}
      </div>
    )
  }
}

export default PostForm;
