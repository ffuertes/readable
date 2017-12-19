import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default class PostItem extends Component {
	render() {
		const { post } = this.props;
		return (
			<article>
				<h3>
					<Link to={`/${post.category}/${post.id}`}>
						{post.title}
					</Link>
				</h3>
				<div>Posted on { moment(post.timestamp).format('MMMM Do YYYY') } by {post.author} • {post.voteScore} Votes</div>
			</article>
		);
	}
}