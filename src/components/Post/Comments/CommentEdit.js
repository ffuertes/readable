import React, {Component} from 'react';
import {connect} from 'react-redux';
import serializeForm from 'form-serialize';

import { updateComment } from '../../../actions';

class EditComment extends Component {
	onFormSubmit = (e) => {
		e.preventDefault();
		const values = serializeForm( e.target, {hash: true} );
		const {onUpdateComment} = this.props;

		onUpdateComment(values);
	}

	render() {
		const {body} = this.props;

		return (
			<form onSubmit={ this.onFormSubmit }>
				<textarea name="body" id="editCommentForm" onChange={this.onChange} cols="30" rows="10" defaultValue={body}></textarea>
				<button type="submit">Save</button>
			</form>
		)
	}
}

function mapDispatchToProps(dispatch, ownProps) {
	return {
		onUpdateComment: data => {
			dispatch(updateComment(ownProps.commentId, data))
			ownProps.onEdit();
		}
	}
}

export default connect(null, mapDispatchToProps)(EditComment)

