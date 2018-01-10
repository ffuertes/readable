import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import moment from 'moment';

import { upVote, downVote, deletePost, fetchComments } from '../../actions';

import CommentsList from './Comments/CommentsList';
import CommentForm from './Comments/CommentForm';

class PostDetail extends Component {

	componentDidMount() {
		const { postId } = this.props.match.params;
		this.props.fetchComments(postId);
	}

	render() {
		const {postId} = this.props.match.params;
		const post = this.props.posts[postId] ? this.props.posts[postId] : {};
		const { id, title, body, author, timestamp, voteScore, category } = post;

		return (
			<div>
				<div className="l-center">
				<h1 class="page-title">{title}</h1>
					<div>Posted on { moment(timestamp).format('MMMM Do YYYY') } by {author} </div>

					<div className="post-body">
						<div className="votes">
							<button onClick={ () => this.props.onVoteUp(id) } ><i className="fas fa-angle-up"></i></button>
							<div className="votes">{voteScore}</div>
							<button onClick={ () => this.props.onVoteDown(id) }><i className="fas fa-angle-down"></i></button>
						</div>
						<pre className="post-content">{body}</pre>
					</div>
					<div className="post-actions actions">
						<Link to={`/${category}/${id}/edit`}><i className="fas fa-edit"></i></Link> | <button onClick={ () => this.props.onDeletePost(id) }><i className="fas fa-trash-alt"></i></button>
					</div>
				</div>

				<div className="comments-area">
					<div className="l-center">
						<CommentsList />
						<CommentForm postId={id} onAddComment={this.addCommentToPost} />
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps({posts, comments}) {
	return { posts, comments }
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		onVoteUp: id => dispatch(upVote(id)),
		onVoteDown: id => dispatch(downVote(id)),
		onDeletePost: id => {
			dispatch( deletePost(id) );
			ownProps.history.push('/');
		},
		fetchComments: () => dispatch(fetchComments(ownProps.match.params.postId))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);