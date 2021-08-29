import React, { Component } from 'react';
import './Posts.css'

class PostForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      date: '',
      tags: [],
      categories: [],
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
    console.log('onImageChange:', event.target.files[0])
    this.setState({ images: event.target.files[0] });
  };

  handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', this.state.title);
    formData.append('body', this.state.body);
    formData.append('date', this.state.date);
    formData.append('tags', JSON.stringify(this.state.tags));
    formData.append('categories', this.state.categories);
    formData.append('images', this.state.images);
    console.log('State:', this.state);
    fetch('http://localhost:3001/posts', {
      method: 'POST',
      headers: {

      },
      body: formData
    })
    .catch(error=>console.log(error));
  }
  
  handleCatChange = (e) => {
    let value = Array.from(e.target.selectedOptions, option => option.value);
    this.setState({categories: value});
  }

  handleTagChange = (e) => {
    let value = Array.from(e.target.selectedOptions, option => option.value);
    this.setState({tags: value});
  }
  
  render () {
    console.log(this.state);
    return (
      <div className="post-form-container">
        <form onSubmit={this.handleSubmit} >
          <label>Post Title: </label>
          <input 
            type="text" 
            name="title" 
            placeholder="Title" 
            onChange={this.handleChange}
          />
          <label>Post Description: </label>
          <textarea 
            type="textarea" 
            name="body" 
            placeholder="Post Text" 
            onChange={this.handleChange}
          />
          <label>Post Date: </label>
          <input 
            type="text" 
            name="date" 
            placeholder="Post Date" 
            onChange={this.handleChange}
          />
          <label>Select an image to add to this Post: </label>
          <input 
            type="file" 
            placeholder="image" 
            accept="image/*" 
            multiple={true} 
            onChange={this.onImageChange} 
          />
          <label>
            Select all appropriate categories: 
          </label>
          <select 
              multiple={true} 
              name='categories'
              value={this.state.value} 
              onChange={this.handleCatChange}>
              <option value='shows'>shows</option>
              <option value='clinics'>clinics</option>
              <option value='camps'>camps</option>
              <option value='training'>training</option>
              <option value='other'>other</option>
            </select>
          {/* <input
            type='checkbox'
            name='shows'

          />
          <input
            type='checkbox'
            name='clinics'
            
          />
          <input
            type='checkbox'
            name='camps'
            
          />
          <input
            type='checkbox'
            name='training'
            
          />
          <input
            type='checkbox'
            name='other'
            
          /> */}
          {/* <label>
            Select all appropriate Tags: 
          </label>
            <select 
              multiple={true} 
              name='tags'
              value={this.state.value} 
              onChange={this.handleTagChange}>
              <option value='Tag1'>Tag1</option>
              <option value='Tag2'>Tag2</option>
              <option value='Tag3'>Tag3</option>
              <option value='Tag4'>Tag4</option>
            </select>
          <br></br> */}
          <input 
            type="submit" 
            value="Submit" 
          />
        </form>
      </div>
    )
  }
}

export default PostForm;
