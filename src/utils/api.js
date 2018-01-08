const HEADERS = {'Authorization': 'whaterver'};
const SERVER_URL = 'http://localhost:3001'

/**
 * Get all of the categories available for the app. List is found in categories.js.
 */
export function getCategories() {
  return fetch( `${SERVER_URL}/categories`, {headers: HEADERS} )
	.then( (res) => res.json() )
	.then(( response ) => response.categories )
}

/**
 * Get all of the posts. Useful for the main page when no category is selected.
 */
export function getAllPosts() {
	return fetch( `${SERVER_URL}/posts`, {headers: HEADERS} )
	  .then( (res) => res.json() )
	  .then( ( posts ) => posts )
}

/**
 * Get all of the posts for a particular category
 * @param {string} category
 */
export function getCategoryPosts(category) {
	return fetch( `${SERVER_URL}/${category}/posts`, {headers: HEADERS} )
	  .then( (res) => res.json() )
	  .then( ( posts ) => posts )
}

/**
 * Get the details of a single post
 * @param {string} postId
 */
export function getPost(postId) {
	return fetch( `${SERVER_URL}/posts/${postId}`, {headers: HEADERS} )
	  .then( (res) => res.json() )
	  .then( ( post ) => post )
}

/**
 * Delete a post.
 * @param {string} postId
 */
export function deletePost(postId) {
	return fetch( `${SERVER_URL}/posts/${postId}`, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'whaterver'
			},
			method: 'DELETE',
		})
	  .then( (res) => res.json() );
}

/**
 * Get all the comments for a single post.
 * @param {string} postId
 */
export function getPostComments(postId) {
	return fetch( `${SERVER_URL}/posts/${postId}/comments`, {headers: HEADERS} )
	  .then( (res) => res.json() )
	  .then( ( comments ) => comments )
}

/**
 * Create a new post
 * @param {object} data All the info for the new post
 */
export function createPost(data) {
	return fetch( `${SERVER_URL}/posts/`, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'whaterver'
			},
			method: 'POST',
			body: JSON.stringify({
				...data,
			})
		})
	  .then( (res) => res )
}

/**
 * Edit a existing post
 * @param {object} data All the info for the new post
 */
export function updatePost(postId, data) {
	return fetch( `${SERVER_URL}/posts/${postId}`, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'whaterver'
			},
			method: 'PUT',
			body: JSON.stringify({
				...data,
			})
		})
	  .then( (res) => res )
}

/**
 * Used for voting up on a post
 * @param {string} postId The post's ID
 */
export function upVote( postId ) {
	return fetch( `${SERVER_URL}/posts/${postId}`, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'whaterver'
			},
			method: 'POST',
			body: JSON.stringify({
				option: 'upVote'
			})
		})
	  .then( ( res ) => res.json() )
	  .then( ( {voteScore} ) => voteScore )
}

/**
 * Used for voting down on a post
 * @param {string} postId The post's ID
 */
export function downVote( postId ) {
	return fetch( `${SERVER_URL}/posts/${postId}`, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'whaterver'
			},
			method: 'POST',
			body: JSON.stringify({
				option: 'downVote'
			})
		})
	  .then( ( res ) => res.json() )
	  .then( ( {voteScore} ) => voteScore )
}

/**
 * User to create a new comment
 * @param {string} postId Comment's parent
 * @param {object} data Comment's details
 */
export function createComment( postId, data ) {
	return fetch( `${SERVER_URL}/comments`, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'whaterver'
			},
			method: 'POST',
			body: JSON.stringify({
				...data,
			})
		})
	  .then( ( res ) => res.json() )
	  .then( ( res ) => res )
}

/**
 * Delete a Comment.
 * @param {string} commentId
 */
export function deleteComment(commentId) {
	return fetch( `${SERVER_URL}/comments/${commentId}`, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'whaterver'
			},
			method: 'DELETE',
		})
	  .then( (res) => res.json() );
}


export function commentDownVote( commentId ) {
	return fetch( `${SERVER_URL}/comments/${commentId}`, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'whaterver'
			},
			method: 'POST',
			body: JSON.stringify({
				option: 'downVote'
			})
		})
	  .then( ( res ) => res.json() )
	  .then( ( {voteScore} ) => voteScore )
}

export function commentUpVote( commentId ) {
	return fetch( `${SERVER_URL}/comments/${commentId}`, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'whaterver'
			},
			method: 'POST',
			body: JSON.stringify({
				option: 'upVote'
			})
		})
	  .then( ( res ) => res.json() )
	  .then( ( {voteScore} ) => voteScore )
}

export function updateComment(commentId, data) {
	return fetch( `${SERVER_URL}/comments/${commentId}`, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'whaterver'
			},
			method: 'PUT',
			body: JSON.stringify({
				...data,
			})
		})
	  .then( (res) => res )
}

