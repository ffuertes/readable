import React, { Component } from 'react';
import {connect} from 'react-redux';

import CommentItem from './CommentItem';

class CommentsList extends Component {
	render() {
		const { comments } = this.props;
		const commentsIds = Object.keys(comments);
		const noComments = commentsIds.length === 0 ? <NoComments /> : null;
		return (
			<div>
				<h2 className="section-title"><i className="far fa-comment"></i> {commentsIds.length === 1 ? '1 comment' : `${commentsIds.length} Comments`}</h2>
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
		<div className="no-comments">No comments here yet...</div>
	)
}