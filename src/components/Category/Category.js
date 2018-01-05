import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostList from '../Post/PostList';

class Category extends Component {
	render() {
		const { catId } = this.props.match.params;

		const posts = this.props.posts.filter( post => post.category === catId );
		const noContent = posts.length === 0;

		return (
			<div>
				<PostList posts={posts} noContent={noContent} />
			</div>
		);
	}
}

function mapStateToProps({posts}) {
	return { posts: posts.posts }
}

export default connect(mapStateToProps)(Category);
