import React, { Component } from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

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
			<li class="comment-item">
				{edit && <CommentEdit commentId={comment.id} body={comment.body} onEdit={this.onClickEdit} />}

				{!edit &&
					<div className="comment-item__wrap">
						<div className="comment-votes votes">
							<button onClick={ () => commentVoteUp(comment.id) }><i className="fas fa-angle-up"/></button>
							<div className="vote-score">{comment.voteScore}</div>
							<button onClick={ () => commentVoteDown(comment.id) }><i className="fas fa-angle-down"/></button>
						</div>
						<div className="comment-item__content">
							<div className="comment-meta">{ moment(comment.timestamp).fromNow() } <strong>{comment.author}</strong> said:</div>
							<div className="comment-body">{ comment.body }</div>
							<footer className="comment-footer actions">
							<button onClick={this.onClickEdit}><i className="fas fa-edit"></i></button> | <button onClick={ () => deleteComment(comment.parentId, comment.id) }><i className="fas fa-trash-alt"></i></button>
							</footer>
						</div>
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