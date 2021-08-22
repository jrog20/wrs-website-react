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
      categories: [
        { name: 'Category 1', id: 'cat1'},
        { name: 'Category 2', id: 'cat2'},
        { name: 'Category 3', id: 'cat3'},
        { name: 'Category 4', id: 'cat4'},
      ],
        // , 'cat2', 'cat3', 'cat4'],
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
    // const formData = new FormData();
    // formData.append('title', this.state.title);
    // formData.append('body', this.state.body);
    // formData.append('date', this.state.date);
    // formData.append('tags', this.state.tags);
    // formData.append('categories', this.state.categories);
    // formData.append('images', this.state.images);
    console.log('State:', this.state);
    fetch('http://localhost:3001/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({post: this.state})
      // body: formData
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

    // const {categories} = this.state.categories
    let categoriesList = this.state.categories.length > 0 && this.state.categories.map((item, i) => {
      return (
        <option key={i} value={item.id}>{item.name}</option>
      )
    }, this)

    return (
      <div className="cards">
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
          {/* Add Categories (10 or less options) and Tags here later */}
          <label>
            Select all appropriate categories: 
          </label>
            <select 
              multiple={true} 
              name='categories'
              value={this.state.value} 
              onChange={this.handleCatChange}>
              {/* Third option */}
              {/* {categoriesList} */}

              {/* First option */}
              <option value='Cat1'>Cat1</option>
              <option value='Cat2'>Cat2</option>
              <option value='Cat3'>Cat3</option>
              <option value='Cat4'>Cat4</option>
            </select>
          <br></br>
          <label>
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
          {/* <p>{this.state.images.url} ?
            <img src={this.state.images.url} alt="wrs post"/> : 
            "No image available" 
          </p>
          <img src={this.state.images[0]} alt="wrs post"/> */}
          {/* <p>if({this.state.images.url}) </p> */}
      </div>
    )
  }
}

export default PostForm;
