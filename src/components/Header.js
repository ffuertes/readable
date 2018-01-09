import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = (props) => {
	const categories = [ 'react', 'redux', 'udacity' ];
	return (
		<header className="app-header">
			<Link to="/" className="app-title"><i className="fas fa-book"></i> Readable <small>A React-Redux App</small></Link>
			<ul>
				<li><NavLink to="/" exact>Home</NavLink></li>
				{ categories.map( category => {
					return (
						<li key={category} >
							<NavLink to={`/${category}`} >{category}</NavLink>
						</li>
					);
				})}
			</ul>
		</header>
	);
}

export default Header;