const HEADERS = {'Authorization': 'whaterver'};
const SERVER_URL = 'http://localhost:3020'

export function getCategories() {
  return fetch( `${SERVER_URL}/categories`, {headers: HEADERS} )
	.then( (res) => res.json() )
	.then(( categories ) => categories )
}

export function getAllPosts() {
	return fetch( `${SERVER_URL}/posts`, {headers: HEADERS} )
	  .then( (res) => res.json() )
	  .then( ( posts ) => posts )
}

export function getCategoryPosts(category) {
	return fetch( `${SERVER_URL}/${category}/posts`, {headers: HEADERS} )
	  .then( (res) => res.json() )
	  .then(({ posts }) => posts)
}

