import React, { Component } from 'react';
import {connect} from 'react-redux';

import { removeComment, commentUpVote, commentDownVote } from '../../../actions';

import CommentEdit from './CommentEdit';

class CommentItem extends Component {
	state = {
		edit: false
	}

	onClickEdit = () => {
		this.setState( prevState => ({edit: !prevState.edit}) )
	}

	render() {
		const { comments, commentId, deleteComment, commentVoteUp, commentVoteDown } = this.props;
		const comment = comments[commentId];
		const {edit} = this.state;
		return (
			<li>
				{edit && <CommentEdit commentId={comment.id} body={comment.body} onEdit={this.onClickEdit} />}

				{!edit &&
					<div>
						{ comment.body } • Votes: {comment.voteScore} | <button onClick={this.onClickEdit}>Edit</button>
						<footer>
							<button onClick={ () => commentVoteUp(comment.id) }>Vote Up</button> | <button onClick={ () => commentVoteDown(comment.id) }>Vote Down</button> •
							<button onClick={ () => deleteComment(comment.parentId, comment.id) }>Delete</button>
						</footer>
					</div>
				}
			</li>
		);
	}
}

function mapStateToProps({comments}) {
	return {comments};
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		deleteComment: (postId, commentId) => dispatch(removeComment( postId, commentId)),
		commentVoteUp: commentId => dispatch(commentUpVote(commentId)),
		commentVoteDown: commentId => dispatch(commentDownVote(commentId)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem)