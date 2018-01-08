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