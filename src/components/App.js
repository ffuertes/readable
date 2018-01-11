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
import NotFound from './404';

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  categoryExists = category => {
    const categories = ['react', 'redux', 'udacity'];
    return categories.indexOf(category) > -1;
  }

  postExists = (category, post) => {
    const {posts} = this.props;
    return posts.hasOwnProperty(post) && posts[post].category === category;
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/add-post" exact component={CreatePost} />
            <Route path="/:category/:postId/edit" exact render={ props => {
              const {postId, category} = props.match.params;
              return this.postExists(category, postId) ? <EditPost {...props} /> : <NotFound />
            }} />
            <Route path="/:category/:postId" exact render={ props => {
              const {postId, category} = props.match.params;
              return this.postExists(category, postId) ? <PostDetail {...props} /> : <NotFound />
            }} />
            <Route path="/:catId" exact render={ props => {
              const {catId} = props.match.params;
              return this.categoryExists(catId) ? <Category {...props} /> : <NotFound />
            }} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({posts}) => {
	return {posts}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchData: () => dispatch(fetchPosts())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);