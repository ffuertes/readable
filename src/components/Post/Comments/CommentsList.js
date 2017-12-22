import React, { Component } from 'react';

import {  } from '../../../utils/api';

export default class CommentsList extends Component {
	render() {
		const { comments, deleteComment } = this.props;
		const noComments = comments.length === 0 ? <NoComments /> : null;
		return (
			<div>
				<h2>Comments</h2>
				{noComments}
				<ul className="comments-list">
					{ comments.map( (comment) =>
						<li key={comment.id} >{ comment.body } <button onClick={ () => deleteComment(comment.id) }>Delete</button></li>
					)}
				</ul>
			</div>
		);
	}
}

const NoComments = () => {
	return (
		<div>No comments here yet...</div>
	)
}