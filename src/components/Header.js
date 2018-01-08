import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
	const categories = [ 'react', 'redux', 'udacity' ];
	return (
		<header className="app-header">
			<Link to="/" className="app-title">Readable | A React-Redux App</Link>
			<ul>
				{ categories.map( category => {
					return (
						<li key={category} >
							<Link to={`/${category}`} >{category}</Link>
						</li>
					);
				})}
			</ul>
		</header>
	);
}

export default Header;