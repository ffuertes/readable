import React, { Component } from 'react';

import PostItem from './PostItem';

export default class PostList extends Component {
	render() {
		const { posts, noContent } = this.props;
		return (
			<div>
				{ noContent ? (
					<NoContent />
				) : (
					<section>
						{ posts.map( (post ) => {
							return (
								<PostItem key={post.id} post={post} />
							)
						})}
					</section>
				)}
			</div>
		);
	}
}

const NoContent = () => {
	return (
		<div>
			Sorry, there is no content in this category yet.
		</div>
	)
}