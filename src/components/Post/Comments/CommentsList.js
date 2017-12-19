import React, { Component } from 'react';

export default class CommentsList extends Component {
	render() {
		const { comments } = this.props;
		return (
			<div>
				<h2>Comments</h2>
				<ul className="comments-list">
					{ comments.map( (comment) =>
						<li key={comment.id} >{ comment.body }</li>
					)}
				</ul>
			</div>
		);
	}
}