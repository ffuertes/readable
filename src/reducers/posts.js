import { RECEIVE_POSTS, ADD_POST, EDIT_POST, POST_VOTE_DOWN, POST_VOTE_UP, DELETE_POST, ADD_COMMENT, DELETE_COMMENT } from '../actions/types';

function receivePosts(state, action) {
	return action.posts.reduce( (byId, post) => {
		byId[post.id] = post;
		return byId;
	}, {})
}

function addPost(state, action) {
	state[action.post.id] = action.post
	return state;
}

function editPost(state, action) {
	const {id, values} = action;

	state[id].category = values.category;
	state[id].body = values.body;
	state[id].title = values.title;

	return state;
}

function deletePost(state, action) {
	delete state[action.postId]
	return state;
}

function postVote(state, action) {
	state[action.postId].voteScore = action.voteScore;
	return state;
}

function AddNewComment(state, action) {
	const {postId} = action;
	state[postId].commentCount = state[postId].commentCount + 1;
	return state;
}

function deleteComment(state, action) {
	const {postId} = action;
	state[postId].commentCount = state[postId].commentCount - 1;
	return state;
}

export default function postsById( state={}, action ) {
	switch ( action.type ) {
		case RECEIVE_POSTS: return receivePosts(state, action);
		case ADD_POST: return addPost({...state}, action);
		case EDIT_POST: return editPost({...state}, action);
		case DELETE_POST: return deletePost({...state}, action);
		case POST_VOTE_UP:
		case POST_VOTE_DOWN: return postVote({...state}, action);
		case ADD_COMMENT: return AddNewComment({...state}, action);
		case DELETE_COMMENT: return deleteComment({...state}, action);
		default: return state;
	}
}