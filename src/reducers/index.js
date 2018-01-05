import {combineReducers} from 'redux';

import posts from './posts';

import { RECEIVE_POSTS } from '../actions';

const defaultCategories = {
	react: 0,
	redux: 0,
	udacity: 0,
}

function categories( state=defaultCategories, action ) {
	switch ( action.type ) {
		case RECEIVE_POSTS:
			return action.posts.reduce( (categories, post) => {
				categories[post.category] = categories[post.category] + 1;
				return categories;
			}, defaultCategories );
		default:
			return state;
	}
}

export default combineReducers({
	posts,
	categories
});