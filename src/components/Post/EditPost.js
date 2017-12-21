import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import { withRouter } from 'react-router-dom';
import uuid from 'uuid/v1';

import { updatePost } from '../../utils/api';

class EditPost extends Component {

	state = {
		post: {}
	}

	componentDidMount() {
		getPost( this.props.match )
			.then( (post) => this.setState({post}) )
	}

	onSubmit = (e) => {
		e.preventDefault();

		const values = serializeForm( e.target, {hash: true} );

		updatePost( values )
			.then( () => this.props.history.push('/') );
	}

	render() {
		const { post } = this.props;
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<div className="form-field">
						<label htmlFor="title">Title:</label>
						<input type="text" name="title" id="title" defaultValue={post.title} />
					</div>

					<div className="form-field">
						<label htmlFor="body">Body</label>
						<textarea name="body" id="body" defaultValue={post.body}></textarea>
					</div>

					<div className="form-field">
						<label htmlFor="category">Category</label>
						<input type="text" name="category" id="category" defaultValue={post.category} />
					</div>

					<input type="submit" value="Update Post" />
				</form>
			</div>
		);
	}
}

export default withRouter( EditPost );