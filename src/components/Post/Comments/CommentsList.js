import React, { Component } from 'react';
import {connect} from 'react-redux';

import CommentItem from './CommentItem';

class CommentsList extends Component {
	render() {
		const { comments } = this.props;
		const noComments = Object.keys(comments).length === 0 ? <NoComments /> : null;
		return (
			<div>
				<h2>Comments</h2>
				{noComments}
				<ul className="comments-list">
					{ Object.keys(comments).map( (commentId) => {
						return (
							<CommentItem key={commentId} commentId={commentId}/>
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
export default connect(mapStateToProps)(CommentsList)

const NoComments = () => {
	return (
		<div>No comments here yet...</div>
	)
}