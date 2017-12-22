import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import moment from 'moment';

import { getPost, getPostComments, upVote, downVote, deletePost, deleteComment } from '../../utils/api';

import CommentsList from './Comments/CommentsList';
import CommentForm from './Comments/CommentForm';

export default class PostDetail extends Component {

	state = {
		comments: []
	}

	onVoteUp = (id) => {
		upVote(id)
			.then((count) => this.setState( ({voteScore}) => ({ voteScore: count }) ))
	}

	onVoteDown = (id) => {
		downVote(id)
			.then((count) => this.setState( ({voteScore}) => ({ voteScore: count }) ))
	}

	componentDidMount() {
		const { postId } = this.props.match.params;

		getPost( postId )
			.then( (post) => this.setState({ ...post }));

		getPostComments( postId )
			.then( comments => this.setState({comments}) );
	}

	addCommentToPost = ( comment ) => {
		this.setState(({comments}) => ({ comments: [...comments, comment ]}) )
	}

	onDeletePost = (postId) => {
		deletePost(postId)
			.then(this.props.history.push('/'));
	}

	onDeleteComment = (id) => {
		deleteComment(id)
			.then(() => {
				this.setState( ({comments}) => ({comments: comments.filter((comment)=>comment.id !== id)}))
			});
	}

	render() {
		const { id, title, body, author, timestamp, voteScore, category, comments } = this.state;
		return (
			<div>
				<h2>{title}</h2>
				<div>Posted on { moment(timestamp).format('MMMM Do YYYY') } by {author} </div>
				<div>Votes: {voteScore} • <button onClick={ () => this.onVoteUp(id) } >Vote Up</button> | <button onClick={ () => this.onVoteDown(id) }>Vote Down</button></div>
				<p>{body}</p>

				<Link to={`/${category}/${id}/edit`}>Edit</Link> | <button onClick={ () => this.onDeletePost(id) }>Delete</button>

				<CommentsList deleteComment={this.onDeleteComment} comments={comments} />
				<CommentForm postId={id} onAddComment={this.addCommentToPost} />
			</div>
		);
	}
}