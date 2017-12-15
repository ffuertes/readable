import React, { Component } from 'react';

import { getAllPosts } from '../../utils/api';

import logo from '../../logo.svg';

export default class Home extends Component {

	state = {
		posts: []
	}

	componentDidMount() {
		getAllPosts()
			.then((posts) => {
				this.setState({
					posts: posts
				});
			});
	}

	render() {
		const { posts } = this.state;
		return (
			<div className="App">
				<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">Welcome to React</h1>
				</header>
				<ul>
				{ posts.map( (post ) => <li key={post.id} >{post.title}</li>) }
				</ul>
			</div>
		);
	}
}