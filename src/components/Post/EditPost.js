import React, { Component } from 'react';
import serializeForm from 'form-serialize';

import { getPost, updatePost } from '../../utils/api';

export default class EditPost extends Component {

	state = {
		title: '',
		body: '',
		category: ''
	}

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	componentDidMount() {
		//console.log(this.props.match.params.postId);
		getPost( this.props.match.params.postId )
			.then( (post) => this.setState({...post}) )
	}

	onSubmit = (e) => {
		e.preventDefault();

		const {id, category} = this.state;

		const values = serializeForm( e.target, {hash: true} );

		updatePost(id, values )
			.then( () => this.props.history.push(`/${category}/${id}`) );
	}

	render() {
		const { title, body, category } = this.state;

		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<div className="form-field">
						<label htmlFor="title">Title:</label>
						<input type="text" name="title" id="title" onChange={this.onChange} value={title} />
					</div>

					<div className="form-field">
						<label htmlFor="body">Body</label>
						<textarea name="body" id="body" onChange={this.onChange} value={body}></textarea>
					</div>

					<div className="form-field">
						<label htmlFor="category">Category</label>
						<input type="text" name="category" id="category" onChange={this.onChange} value={category} />
					</div>

					<input type="submit" value="Update Post" />
				</form>
			</div>
		);
	}
}