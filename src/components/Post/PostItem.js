import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

import {upVote, downVote, deletePost} from '../../actions'

class PostItem extends Component {
	render() {
		const { postId, posts, voteUp, voteDown, onDeletePost } = this.props;
		const post = posts[postId] ? posts[postId] : {};
		return (
			<article className="post-item">
				<div className="post-item__content">
					<h2 className="post-item__title">
						<Link to={`/${post.category}/${post.id}`}>
							{post.title}
						</Link>
						<div className="post-item__meta">Posted { moment(post.timestamp).fromNow() } by {post.author} | <i className="fas fa-comment"></i> {post.commentCount}</div>
					</h2>
					<footer className="actions">
						<Link to={`/${post.category}/${post.id}/edit`}><i className="fas fa-edit"></i></Link> | <button onClick={ () => onDeletePost(post.id) }><i className="fas fa-trash-alt"></i></button>
					</footer>
				</div>
				<div className="post-item__votes votes">
					<button onClick={() => voteUp(post.id)} ><i className="fas fa-angle-up"></i></button>
					<div className="votes">{post.voteScore}</div>
					<button onClick={() => voteDown(post.id)}><i className="fas fa-angle-down"></i></button>
				</div>
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
		onDeletePost: id => {
			dispatch( deletePost(id) );
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);
