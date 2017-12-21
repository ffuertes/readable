import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import moment from 'moment';

import { getPost, getPostComments, upVote, downVote } from '../../utils/api';

import CommentsList from './Comments/CommentsList';

export default class PostDetail extends Component {

	state = {
		id: '',
		title: '',
		body: '',
		author: '',
		date: '',
		voteScore: 1,
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

	render() {
		const { id, title, body, author, date, voteScore, category, comments } = this.state;
		return (
			<div>
				<h2>{title}</h2>
				<div>Posted on { moment(date).format('MMMM Do YYYY') } by {author} </div>
				<div>Votes: {voteScore} • <button onClick={ () => this.onVoteUp(id) } >Vote Up</button> | <button onClick={ () => this.onVoteDown(id) }>Vote Down</button></div>
				<p>{body}</p>

				<Link to={`${category}/${id}/edit`}>Edit</Link>

				{ comments.length > 0 && <CommentsList comments={comments} /> }
			</div>
		);
	}
}