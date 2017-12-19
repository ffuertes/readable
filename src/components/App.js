import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './Home/Home';
import Header from './Header';
import PostDetail from './Post/PostDetail';
import Category from './Category/Category';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/category/:catId" exact component={Category} />
            <Route path="/:category/:postId" exact component={PostDetail} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
