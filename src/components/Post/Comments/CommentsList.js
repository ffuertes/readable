import React, { Component } from 'react';
import {connect} from 'react-redux';

import { removeComment } from '../../../actions';

class CommentsList extends Component {
	render() {
		const { comments, deleteComment } = this.props;
		const noComments = Object.keys(comments).length === 0 ? <NoComments /> : null;
		return (
			<div>
				<h2>Comments</h2>
				{noComments}
				<ul className="comments-list">
					{ Object.keys(comments).map( (commentId) => {
						const comment = comments[commentId];
						return (
							<li key={comment.id} >{ comment.body } <button onClick={ () => deleteComment(comment.parentId, comment.id) }>Delete</button></li>
						)}
					)}
				</ul>
			</div>
		);
	}
}

function mapStateToProps({comments}) {
	return {comments};
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		deleteComment: (postId, commentId) => dispatch(removeComment( postId, commentId))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList)

const NoComments = () => {
	return (
		<div>No comments here yet...</div>
	)
}