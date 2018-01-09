import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import logo from '../../logo.svg';

import PostList from '../Post/PostList';

class Home extends Component {

	render() {
		const { posts } = this.props;

		return (
			<div className="l-center">
				<h1 className="page-title">All Posts</h1>
				<PostList posts={posts} />
			</div>
		);
	}
}

function mapStateToProps({posts}) {
	return {posts}
}

export default connect(mapStateToProps)(Home);