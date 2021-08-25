import React from 'react';
import './Posts.css'

class Post extends React.Component {
  render() {
    return (
      <div key={this.props.post.id} className='post-card'>
        <img src={this.props.post.images.url} alt='Post' className='post-image'></img>
        <h2>Title: {this.props.post.title}</h2>
        <h3>Date: {this.props.post.date}</h3>
        <p>Body: {this.props.post.body}</p>
        <p>{this.props.post.categories ? this.props.post.categories : null }</p>
      </div>
    )
  }
}

export default Post;


// import React from 'react';
// import './Cards.css';

// class Post extends React.Component {
//   render() {
//     return (
//       <div className='cards'>
//         <div className='cards__container'>
//           <div className='cards__wrapper'>
//             <ul className='cards__items'>
//               <li key={this.props.post.id} className='cards__item'>
//                 <figure className='cards__item__pic-wrap'>
//                   <img
//                     className='cards__item__img'
//                     alt='Post'
//                     src={this.props.post.images.url}
//                   />
//                 </figure>
//                 {/* <img src={this.props.post.images.url} alt="Post" className='cards__item__pic-wrap'></img> */}
//                 <div className='cards__item__info'>
//                   <h2 className='cards__item__text'>Title: {this.props.post.title}</h2>
//                   <h3>Date: {this.props.post.date}</h3>
//                   <p>Body: {this.props.post.body}</p>
//                   <p>{this.props.post.categories ? this.props.post.categories : null }</p>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default Post;
