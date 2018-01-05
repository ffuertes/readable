import React, { Component } from 'react';
import sortBy from 'sort-by';
import { connect } from 'react-redux';

import PostItem from './PostItem';

import { orderBy } from '../../actions';

class PostList extends Component {

	state = {
		order: 'timestamp'
	}

	onChangeOrder = (event) => {
		this.setState({
			order: event.target.value
		})
	}

	render() {
		const { order } = this.state;
		const { posts, noContent } = this.props;

		//const orderedPosts = posts.sort(sortBy(order));

		return (
			<div>
				<div>
					<select name="orderby" id="orderby" onChange={ () => this.props.sortBy(posts, order)}>
						<option value="timestamp">Date</option>
						<option value="voteScore">Votes</option>
					</select>
				</div>
				{ noContent ? (
					<NoContent />
				) : (
					<section>
						{ Object.keys(posts).map( (post ) => {
							return (
								<PostItem key={post.id} post={posts[post]} />
							)
						})}
					</section>
				)}
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		sortBy: (posts, order) => dispatch(orderBy(posts, order))
	}
}

export default connect(null, mapDispatchToProps)(PostList)

const NoContent = () => {
	return (
		<div>
			Sorry, there is no content in this category yet.
		</div>
	)
}