import sortBy from 'sort-by';

import { combineReducers } from 'redux';

import { RECEIVE_POSTS, ADD_POST, EDIT_POST, POST_VOTE_DOWN, POST_VOTE_UP, DELETE_POST, ORDER_BY } from '../actions';

function posts( state=[], action ) {
	switch ( action.type ) {
		case RECEIVE_POSTS:
			return action.posts;
		case ADD_POST:
			return [
				...state,
				{
					...action.post
				}
			];
		case EDIT_POST:
			return state.map( post => {
				if ( post.id === action.id) {
					post.category = action.values.category;
					post.body = action.values.body;
					post.title = action.values.title;
				}
				return post;
			})
		case DELETE_POST:
			return state.filter( post => post.id !== action.postId );
		case POST_VOTE_UP:
			return state.map(post => {
				if ( post.id === action.postId ) {
					post.voteScore = post.voteScore + 1
				}
				return post;
			});
		case POST_VOTE_DOWN:
			return state.map(post => {
				if ( post.id === action.postId ) {
					post.voteScore = post.voteScore - 1
				}
				return post;
			});
		default:
			return state;
	}
}


function postsById( state={}, action ) {
	let newState = {};

	switch ( action.type ) {
		case RECEIVE_POSTS:
			return action.posts.reduce( (byId, post) => {
				byId[post.id] = post;
				return byId;
			}, {})
		case ADD_POST:
			return {
				...state,
				[action.post.id]: {
					...action.post
				}
			};
		case EDIT_POST:
			newState = {...state};
			const {id, values} = action;

			newState[id].category = values.category;
			newState[id].body = values.body;
			newState[id].title = values.title;

			return newState;
		case DELETE_POST:
			newState = {...state};
			delete newState[action.postId]
			return newState;
		case POST_VOTE_UP:
			newState = {...state};
			newState[action.postId].voteScore = newState[action.postId].voteScore;
			return newState;
		case POST_VOTE_DOWN:
			newState = {...state};
			newState[action.postId].voteScore = newState[action.postId].voteScore;
			return newState;
		default:
			return state;
	}
}

function allIds( state=[], action) {
	let newState = [];
	switch ( action.type ) {
		case RECEIVE_POSTS:
			return action.posts.map( post => {
				return post.id;
			})
		case ORDER_BY:
			newState = [...state]
			const {posts, order} = action;


			newState.sort( (a, b) => {
				console.log(posts)
				if ( posts[a][order] < posts[a][order] )
					return -1;
				if ( posts[a][order] > posts[a][order] )
					return 1;
				return 0;
			});

			return action.posts.map( post => {
				return post.id;
			})
		default:
			return state;
	}
}

export default combineReducers({
	posts,
	postsById,
	allIds
})