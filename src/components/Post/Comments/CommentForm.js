import React, { Component } from 'react';
import { connect } from 'react-redux';
import serializeForm from 'form-serialize';

import { createComment } from '../../../actions';

class CommentForm extends Component {
	state = {
		body: ''
	}

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault();
		const values = serializeForm( e.target, {hash: true} );

		this.props.createComment(values)
			.then((comment) => {
				this.setState({body: ''});
			});
	}

	render() {
		const {body} = this.state;
		return (
			<div className="comment-form">
				<h2>Say Something...</h2>
				<form onSubmit={this.onSubmit}>
					<div className="form-field">
						<label htmlFor="author">Your Name</label>
						<input type="text" name="author" id="author"/>
					</div>
					<div className="form-field">
						<label htmlFor="body">Your Comment</label>
						<textarea name="body" id="body" cols="30" rows="10" value={body} onChange={this.onChange}></textarea>
					</div>
					<div className="form-field submit">
						<button type="submit" class="button primary">Comment</button>
					</div>
				</form>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		createComment: comment => {
			return dispatch(
				createComment(ownProps.postId, comment)
			)
		}
	}
}

export default connect(null, mapDispatchToProps)(CommentForm);