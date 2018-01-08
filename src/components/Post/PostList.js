import React, { Component } from 'react';

import PostItem from './PostItem';

export default class PostList extends Component {
	state = {
		order: 'timestamp'
	}

	onChangeOrder = event => {
		const { value } = event.target;
		this.setState({
			order: value
		});
	}

	render() {
		const { order } = this.state;
		const { posts } = this.props;

		const postsIds = Object.keys(posts).sort( (a, b) => {
			if ( posts[a][order] < posts[b][order] ) {
				return 1;
			}
			if ( posts[b][order] < posts[a][order] ) {
				return -1;
			}
			return 0;
		});

		const noContent = postsIds.length === 0;

		return (
			<div>
				<div>
					<select name="orderby" id="orderby" onChange={(e) => this.onChangeOrder(e) }>
						<option value="timestamp">Date</option>
						<option value="voteScore">Votes</option>
						<option value="commentCount">Comments</option>
					</select>
				</div>
				{ noContent ? (
					<NoContent />
				) : (
					<section>
						{ postsIds.map( (id) => {
							return (
								<PostItem key={id} postId={id} />
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