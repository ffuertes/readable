import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import { fetchPosts } from '../actions';

import Home from './Home/Home';
import Header from './Header';
import PostDetail from './Post/PostDetail';
import Category from './Category/Category';
import CreatePost from './Post/CreatePost';
import EditPost from './Post/EditPost';

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/add-post" exact component={CreatePost} />
            <Route path="/:category/:postId/edit" exact component={EditPost} />
            <Route path="/:category/:postId" exact component={PostDetail} />
            <Route path="/:catId" exact component={Category} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
	return {
		fetchData: () => dispatch(fetchPosts())
	}
}

export default connect(null, mapDispatchToProps)(App);
