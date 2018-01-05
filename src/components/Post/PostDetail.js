import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import moment from 'moment';

import { getPostComments, deleteComment } from '../../utils/api';
import { upVote, downVote, deletePost, } from '../../actions';

import CommentsList from './Comments/CommentsList';
import CommentForm from './Comments/CommentForm';

class PostDetail extends Component {

	state = {
		comments: []
	}

	componentDidMount() {
		const { postId } = this.props.match.params;

		getPostComments( postId )
			.then( comments => this.setState({comments}) );
	}

	addCommentToPost = ( comment ) => {
		this.setState(({comments}) => ({ comments: [...comments, comment ]}) )
	}

	onDeleteComment = (id) => {
		deleteComment(id)
			.then(() => {
				this.setState( ({comments}) => ({comments: comments.filter((comment)=>comment.id !== id)}))
			});
	}

	render() {
		const {postId} = this.props.match.params;
		const post = this.props.postsById[postId] ? this.props.postsById[postId] : {};
		const { id, title, body, author, timestamp, voteScore, category } = post;
		const { comments } = this.state;

		return (
			<div>
				<h2>{title}</h2>
				<div>Posted on { moment(timestamp).format('MMMM Do YYYY') } by {author} </div>
				<div>Votes: {voteScore} • <button onClick={ () => this.props.onVoteUp(id) } >Vote Up</button> | <button onClick={ () => this.props.onVoteDown(id) }>Vote Down</button></div>
				<p>{body}</p>

				<Link to={`/${category}/${id}/edit`}>Edit</Link> | <button onClick={ () => this.props.onDeletePost(id) }>Delete</button>

				<CommentsList deleteComment={this.onDeleteComment} comments={comments} />
				<CommentForm postId={id} onAddComment={this.addCommentToPost} />
			</div>
		);
	}
}

function mapStateToProps({posts}) {
	return {postsById: posts.postsById}
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		onVoteUp: id => dispatch(upVote(id)),
		onVoteDown: id => dispatch(downVote(id)),
		onDeletePost: id => {
			dispatch( deletePost(id) );
			ownProps.history.push('/');
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);