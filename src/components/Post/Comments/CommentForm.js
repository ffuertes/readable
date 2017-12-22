import React, { Component } from 'react';
import serializeForm from 'form-serialize';

import { createComment } from '../../../utils/api';

export default class CommentForm extends Component {
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
		const {postId, onAddComment} = this.props;

		const values = serializeForm( e.target, {hash: true} );

		createComment(postId, values)
			.then((comment) => {
				onAddComment(comment);
				this.setState({body: ''});
			});
	}
	render() {
		const {body} = this.state;
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<input type="hidden" name="author" value="Felipe" />
					<textarea name="body" id="body" cols="30" rows="10" value={body} onChange={this.onChange}></textarea>
					<input type="submit" defaultValue="Comment"/>
				</form>
			</div>
		);
	}
}