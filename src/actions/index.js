import uuid from 'uuid/v1';

import * as API from '../utils/api';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const ORDER_BY = 'ORDER_BY';
export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const POST_VOTE_UP = 'POST_VOTE_UP';
export const POST_VOTE_DOWN = 'POST_VOTE_DOWN';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const COMMENT_VOTE_UP = 'COMMENT_VOTE_UP';
export const COMMENT_VOTE_DOWN = 'COMMENT_VOTE_DOWN';

export const receivePosts = posts => ({
	type: RECEIVE_POSTS,
	posts
});

export const fetchPosts = () => dispatch => {
	return API.getAllPosts()
		.then(posts => dispatch(receivePosts(posts)) )
};

export const orderBy = (posts, order) => ({
	type: ORDER_BY,
	posts,
	order
})

/**
 * ------------------- POSTS --------------------------
 */

export const addPost = post => ({
	type: ADD_POST,
	post
});
	export const createPost = data => dispatch => {
		const values = {
			...data,
			timestamp: Date.now()
		}
		return API.createPost(values)
		.then( (res) => res.json() )
		.then( (post) => { return dispatch(addPost(post)) } )
	}


export const editPost = (id, values) => ({
	type: EDIT_POST,
	id,
	values
});
	export const updatePost = (id, values) => dispatch => {
		const data = {
			...values,
			timestamp: Date.now()
		}
		return API.updatePost(id, data)
		.then( () => dispatch(editPost(id, data)) )
	}


export const removePost = postId => ({
	type: DELETE_POST,
	postId
});
	export const deletePost = (id) => dispatch => {
		return API.deletePost(id)
		.then( () => dispatch(removePost(id)) )
	}

export const postVoteUp = (postId, voteScore) => ({
	type: POST_VOTE_UP,
	postId,
	voteScore
});
	export const upVote = id => dispatch => {
		return API.upVote(id)
		.then( voteScore => dispatch(postVoteUp(id,voteScore)) )
	}


export const postVoteDown = (postId, voteScore) => ({
	type: POST_VOTE_DOWN,
	postId,
	voteScore
});
	export const downVote = id => dispatch => {
		return API.downVote(id)
		.then( voteScore => dispatch(postVoteDown(id, voteScore)) )
	}


/**
 * ------------------- COMMENTS --------------------------
 */

export const receiveComments = comments => ({
	type: RECEIVE_COMMENTS,
	comments
});
	export const fetchComments = postId => dispatch => {
		return API.getPostComments(postId)
			.then(comments => dispatch(receiveComments(comments)) )
	};

export const addComment = ( postId, comment ) => ({
	type: ADD_COMMENT,
	postId,
	comment
});
	export const createComment = ( postId, data ) => dispatch => {
		const values = {
			parentId: postId,
			id: uuid(),
			timestamp: Date.now(),
			...data
		}
		return API.createComment( postId, values )
		.then( comment => { return dispatch(addComment(postId, comment)) } )
	}

export const editComment = (id, comment) => ({
	type: EDIT_COMMENT,
	id,
	comment
});
	export const updateComment = (id, values) => dispatch => {
		const data = {
			...values,
			timestamp: Date.now()
		}
		return API.updateComment(id, data)
		.then( (res) => res.json() )
		.then( comment => dispatch(editComment(id, comment)) )
	}


export const deleteComment = ( postId, commentId ) => ({
	type: DELETE_COMMENT,
	postId,
	commentId
});
	export const removeComment = ( postId, commentId ) => dispatch => {
		return API.deleteComment( commentId )
		.then( () => { return dispatch(deleteComment(postId, commentId)) } )
	}

export const commentVoteUp = (commentId, voteScore) => ({
	type: COMMENT_VOTE_UP,
	commentId,
	voteScore
});
	export const commentUpVote = id => dispatch => {
		return API.commentUpVote(id)
		.then( voteScore => dispatch(commentVoteUp(id, voteScore)) )
	}

export const commentVoteDown = (commentId, voteScore) => ({
	type: COMMENT_VOTE_DOWN,
	commentId,
	voteScore
});
	export const commentDownVote = id => dispatch => {
		return API.commentDownVote(id)
		.then( (voteScore) => dispatch(commentVoteUp(id, voteScore)) )
	}