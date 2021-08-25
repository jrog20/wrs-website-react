import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HomeContainer from './containers/HomeContainer';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import LoginContainer from './containers/LoginContainer';
import PostsContainer from './containers/PostsContainer';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import { connect } from 'react-redux';
import { getCurrentUser } from "./actions/currentUser.js"
// Switch allows only one route to show at a time
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    // const { loggedIn } = this.props
    return (
      <div>
        {/* { loggedIn ? <LoginContainer currentUser={this.props.currentUser} /> : null} */}
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/posts" component={PostsContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}  

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    currentUser: state.currentUser
  })
}

export default connect(mapStateToProps, { getCurrentUser })(App);
