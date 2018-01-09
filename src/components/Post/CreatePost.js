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
			<div className="l-center">
				<h1 className="page-title">Create a New Post</h1>
				<form onSubmit={this.onSubmit}>
					<input type="hidden" name="id" defaultValue={ uuid() } />

					<div className="form-field">
						<label htmlFor="author">Author:</label>
						<input type="text" name="author" id="author" />
					</div>

					<div className="form-field">
						<label htmlFor="title">Title:</label>
						<input type="text" name="title" id="title" />
					</div>

					<div className="form-field">
						<label htmlFor="body">Body</label>
						<textarea name="body" id="body" rows="15"></textarea>
					</div>

					<div className="form-field">
						<label htmlFor="category">Category</label>
						<select name="category" id="category">
							<option value="">-- Select Category --</option>
							<option value="react">React</option>
							<option value="redux">Redux</option>
							<option value="udacity">Udacity</option>
						</select>
					</div>

					<div className="form-field submit">
						<button type="submit" className="button primary">Create Post</button>
					</div>
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

