const HEADERS = {'Authorization': 'whaterver'};
const SERVER_URL = 'http://localhost:3020'

export function getCategories() {
  return fetch( `${SERVER_URL}/categories`, {headers: HEADERS} )
	.then( (res) => res.json() )
	.then(( response ) => response.categories )
}

export function getAllPosts() {
	return fetch( `${SERVER_URL}/posts`, {headers: HEADERS} )
	  .then( (res) => res.json() )
	  .then( ( posts ) => posts )
}

export function getCategoryPosts(category) {
	return fetch( `${SERVER_URL}/${category}/posts`, {headers: HEADERS} )
	  .then( (res) => res.json() )
	  .then( ( posts ) => posts )
}

export function getPost(postId) {
	return fetch( `${SERVER_URL}/posts/${postId}`, {headers: HEADERS} )
	  .then( (res) => res.json() )
	  .then( ( post ) => post )
}

export function getPostComments(postId) {
	return fetch( `${SERVER_URL}/posts/${postId}/comments`, {headers: HEADERS} )
	  .then( (res) => res.json() )
	  .then( ( comments ) => comments )
}

