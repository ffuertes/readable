import React, { Component } from 'react';
import moment from 'moment';

import { getPost, getPostComments } from '../../utils/api';

import CommentsList from './Comments/CommentsList';

export default class PostDetail extends Component {

	state = {
		post: {},
		comments: []
	}

	componentDidMount() {
		const { postId } = this.props.match.params;
		getPost( postId )
			.then( (post) => this.setState({ post }));
		getPostComments( postId )
			.then( comments => this.setState({comments}) );
	}

	render() {
		const { post, comments } = this.state;
		return (
			<div>
				<h2>{post.title}</h2>
				<div>Posted on { moment(post.timestamp).format('MMMM Do YYYY') } by {post.author} </div>
				<div>
					{post.body}
				</div>

				<CommentsList comments={comments} />
			</div>
		);
	}
}