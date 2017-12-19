import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getAllPosts, getCategories } from '../../utils/api';

import logo from '../../logo.svg';

import PostList from '../Post/PostList';

export default class Home extends Component {

	state = {
		posts: [],
		categories: []
	}

	componentDidMount() {
		getAllPosts()
			.then((posts) => {
				this.setState({
					posts: posts
				});
			});

		getCategories()
			.then((categories) => {
				this.setState({
					categories: categories
				});
			});
		}

	render() {
		const { posts, categories } = this.state;

		return (
			<div className="App">
				<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">Welcome to React</h1>
				</header>
				<ul>
					{ categories.map( ( category, key ) => {
						return (
							<li key={key} >
								<Link to={`category/${category.name}`} >{category.name}</Link>
							</li>
						);
					})}
				</ul>

				<PostList posts={posts} />
			</div>
		);
	}
}