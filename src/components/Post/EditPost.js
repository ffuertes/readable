import React, { Component } from 'react';
import { connect } from 'react-redux';
import serializeForm from 'form-serialize';

import { updatePost } from '../../actions';

class EditPost extends Component {

	state = {
		title: '',
		body: '',
		category: ''
	}

	componentWillReceiveProps(props) {
		this.loadInitialData(props)
	}

	componentWillMount() {
		this.loadInitialData(this.props)
	}

	loadInitialData(props) {
		const post = props.post;
		if ( post !== undefined ) {
			this.setState({
				...post
			});
		}
	}

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault();

		const {id, category} = this.state;

		const values = serializeForm( e.target, {hash: true} );

		this.props.editPost(id, values)
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
						<select name="category" id="category" onChange={this.onChange} value={category}>
							<option value="">-- Select Category --</option>
							<option value="react">React</option>
							<option value="redux">Redux</option>
							<option value="udacity">Udacity</option>
						</select>
					</div>

					<input type="submit" value="Update Post" />
				</form>
			</div>
		);
	}
}

function mapStateToProps({posts}, ownProps) {
	const {postId} = ownProps.match.params;
	return { post: posts[postId] }
}

function mapDispatchToProps(dispatch) {
	return {
		editPost: (id, values) => dispatch(updatePost(id, values))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);