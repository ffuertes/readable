import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import logo from '../../logo.svg';

import PostList from '../Post/PostList';

class Home extends Component {

	render() {
		const { posts, categories } = this.props;

		return (
			<div className="App">

				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
					<Link to="/add-post">Create new post »</Link>
				</header>

				<ul>
					{ Object.keys(categories).map( ( category ) => {
						return (
							<li key={category} >
								<Link to={`/${category}`} >{category}</Link>
							</li>
						);
					})}
				</ul>

				<PostList posts={posts} />

			</div>
		);
	}
}

function mapStateToProps({posts, categories}) {
	return {
		posts: posts.postsById,
		categories
	}
}

export default connect(mapStateToProps)(Home);