import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import uuid from 'uuid/v1';

import { createPost } from '../../utils/api';

export default class CreatePost extends Component {

	onSubmit = (e) => {
		e.preventDefault();

		const values = serializeForm( e.target, {hash: true} );

		createPost( values )
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