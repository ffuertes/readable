import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import moment from 'moment';

import { upVote, downVote, deletePost, fetchComments } from '../../actions';

import CommentsList from './Comments/CommentsList';
import CommentForm from './Comments/CommentForm';

class PostDetail extends Component {

	componentDidMount() {
		const { postId } = this.props.match.params;
		this.props.fetchComments(postId);
	}

	render() {
		const {postId} = this.props.match.params;
		const post = this.props.posts[postId] ? this.props.posts[postId] : {};
		const { id, title, body, author, timestamp, voteScore, category } = post;

		return (
			<div>
				<h2>{title}</h2>
				<div>Posted on { moment(timestamp).format('MMMM Do YYYY') } by {author} </div>
				<div>Votes: {voteScore} • <button onClick={ () => this.props.onVoteUp(id) } >Vote Up</button> | <button onClick={ () => this.props.onVoteDown(id) }>Vote Down</button></div>
				<p>{body}</p>

				<Link to={`/${category}/${id}/edit`}>Edit</Link> | <button onClick={ () => this.props.onDeletePost(id) }>Delete</button>

				<CommentsList />
				<CommentForm postId={id} onAddComment={this.addCommentToPost} />
			</div>
		);
	}
}

function mapStateToProps({posts, comments}) {
	return { posts, comments }
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		onVoteUp: id => dispatch(upVote(id)),
		onVoteDown: id => dispatch(downVote(id)),
		onDeletePost: id => {
			dispatch( deletePost(id) );
			ownProps.history.push('/');
		},
		fetchComments: () => dispatch(fetchComments(ownProps.match.params.postId))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);