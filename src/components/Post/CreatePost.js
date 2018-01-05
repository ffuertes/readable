import React, { Component } from 'react';
import { connect } from 'react-redux';

import serializeForm from 'form-serialize';
import uuid from 'uuid/v1';

import { createPost } from '../../actions';

class CreatePost extends Component {

	onSubmit = (e) => {
		e.preventDefault();

		const values = serializeForm( e.target, {hash: true} );

		this.props.createPost( values )
			.then( () => this.props.history.push('/') );
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<input type="hidden" name="author" defaultValue="Felipe" />
					<input type="hidden" name="id" defaultValue={ uuid() } />

					<div className="form-field">
						<label htmlFor="title">Title:</label>
						<input type="text" name="title" id="title" />
					</div>

					<div className="form-field">
						<label htmlFor="body">Body</label>
						<textarea name="body" id="body"></textarea>
					</div>

					<div className="form-field">
						<label htmlFor="category">Category</label>
						<input type="text" name="category" id="category" />
					</div>

					<input type="submit" value="Create Post" />
				</form>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		createPost: data => dispatch( createPost(data) )
	}
}

export default connect(null, mapDispatchToProps)(CreatePost);

