import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

import {upVote, downVote} from '../../actions'

class PostItem extends Component {
	render() {
		const { postId, posts, voteUp, voteDown } = this.props;
		const post = posts[postId] ? posts[postId] : {};
		return (
			<article>
				<h3>
					<Link to={`/${post.category}/${post.id}`}>
						{post.title}
					</Link>
				</h3>
				<div>Posted { moment(post.timestamp).fromNow() } by {post.author} • {post.voteScore} Votes • {post.commentCount} Comments</div>
				<footer>
					<button onClick={() => voteUp(post.id)} >Vote Up</button> | <button onClick={() => voteDown(post.id)}>Vote Down</button>
				</footer>
			</article>
		);
	}
}

function mapStateToProps({posts}) {
	return { posts }
}

function mapDispatchToProps(dispatch) {
	return {
		voteUp: id => dispatch(upVote(id)),
		voteDown: id => dispatch(downVote(id)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);
