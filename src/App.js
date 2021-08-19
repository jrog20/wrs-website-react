import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HomeContainer from './containers/HomeContainer';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import LoginContainer from './containers/LoginContainer';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Posts from './components/Posts';

// Switch allows only one route to show at a time
import { Switch, Route } from 'react-router-dom';

// ADDED
import { getCurrentUser } from "./actions/currentUser.js"
import { connect } from 'react-redux';

class App extends Component {
  
  // ADDED
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    // const { loggedIn } = this.props
    return (
      <div>
        {/* { loggedIn ? <LoginContainer currentUser={this.props.currentUser} /> : <HomeContainer />} */}
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/posts" component={Posts} />
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
// export default App;
