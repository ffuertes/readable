import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostList from '../Post/PostList';

class Category extends Component {
	render() {
		const { catId } = this.props.match.params;
		const {posts} = this.props;
		const postsByCategory = Object.keys(posts).reduce( (filtered, id) => {
			if ( posts[id].category === catId ) {
				filtered[id] = posts[id]
			}
			return filtered;
		}, {});

		return (
			<div>
				<PostList posts={postsByCategory} />
			</div>
		);
	}
}

function mapStateToProps({posts}) {
	return {posts}
}

export default connect(mapStateToProps)(Category);
