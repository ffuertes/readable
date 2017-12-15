import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Home from './Home/Home';
import Post from './Post/Post';
import Category from './Category/Category';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/post" exact component={Post} />
          <Route path="/category" exact component={Category} />
        </div>
      </Router>
    );
  }
}

export default App;
