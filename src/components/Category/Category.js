import React, { Component } from 'react';

import { getCategoryPosts } from '../../utils/api';

import PostList from '../Post/PostList';

export default class Category extends Component {
	state = {
		posts: [],
		noContent: false
	}

	componentDidMount() {
		const { catId } = this.props.match.params;
		getCategoryPosts( catId )
			.then( (posts) => {
				if ( posts.length === 0 ) {
					this.setState({
						noContent: true
					});
				} else {
					this.setState({
						posts: posts
					});
				}
			});
	}

	render() {
		const { posts, noContent } = this.state;
		return (
			<div>
				<PostList posts={posts} noContent={noContent} />
			</div>
		);
	}
}